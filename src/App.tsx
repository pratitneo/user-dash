import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import UserCard from "./components/UserCard";
import { API_URLS } from "./config/api";
import { customStyles } from "./utils/tableCustomStyles";
import { topUsers } from "./utils/topUsers";
import type { NewUserDataType, UserProps, UserRowProps, UserState } from "./utils/types";
import DataTable from "react-data-table-component";
import Button from "./components/Button";
import { IoIosAdd } from "react-icons/io";
import Overlay from "./components/Overlay";
import NewCustomerModal from "./components/NewCustomerModal";
import { useNewUserModal } from "./store/NewUserModal/NewUserModalContext";
import { useDropdown } from "./store/Dropdown/DropdownContext";
import SectionHead from "./components/SectionHead";
import { useEffect, useMemo, useRef } from "react";
import { useRemHei } from "./hooks/useRemHei";
import { UserColumns } from "./utils/tableCols";
import { useTable } from "./store/Table/TableContext";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addUser, clearSearch, setAllUsers, setSearchValue } from "./store/useReducer";
import { initialFormState } from "./utils/userRoles";

const App = () => {

  // CONTEXT
  const { modalVisible, updateModalVisible, clearNewUserData, setNewCustErrors } = useNewUserModal()
  const { updateDropdownValue } = useDropdown()
  const { getLoading, updateGetLoading } = useTable()

  const dispatch = useDispatch()
  const allUsers = useSelector((state: UserState) => state.allUsers)
  const searchValue = useSelector((state: UserState) => state.searchValue)

  // STATE & REF
  const userTable = useRef<HTMLDivElement | null>(null)
  const height = useRemHei(userTable, 30)

  // AXIOS API REQUEST FOR USER LIST 
  const getUsers = async () => {
    try {
      updateGetLoading?.(true)
      const { data } = await axios.get(API_URLS?.users)
      const mappedUsers = data?.users?.map((user: UserProps) => ({
        rank: user?.id,
        fullName: `${user?.firstName} ${user?.lastName}`,
        email: user?.email,
        role: user?.company?.title,
      }))
      dispatch({ type: setAllUsers, payload: mappedUsers })
    }
    catch (err) {
      updateGetLoading?.(false)
      console.log(err)
    }
    finally {
      updateGetLoading?.(false)
      console.log('fetching complete')
    }
  }
  // FETCH USERS FOR THE FIRST RENDER
  useEffect(() => {
    getUsers()

  }, [])
  // POST NEW USER
  const postUser = async (newUserData: NewUserDataType) => {
    await axios.post(API_URLS?.postUser, newUserData)
    const newCustRank = (allUsers?.length ?? 0) + 1
    const newCust: UserRowProps = {
      rank: newCustRank ?? 0,
      fullName: newUserData?.fullName ?? '-',
      email: newUserData?.email ?? '-',
      role: newUserData?.role ?? '-',
    }

    // updateFilteredUsers?.(updatedCustData)
    dispatch({ type: addUser, payload: newCust })
  }

  // CHECK FORM DATA
  const formValidation = (formDetails: NewUserDataType) => {

    const errors: NewUserDataType = {
      fullName: formDetails.fullName ? '' : 'please check full name',
      email: formDetails.email ? '' : 'please check email',
      role: formDetails.role ? '' : 'please select a role',
    }
    setNewCustErrors(errors)

    const isValid = Object.values(errors).every(err => !err)
    console.log(isValid, 'isValid')

    if (isValid) {
      postUser?.(formDetails)
      updateModalVisible?.(false)
      setNewCustErrors(initialFormState)
      clearNewUserData?.()
      updateDropdownValue?.('please select a role')

    }
  }

  // FILTER ON TABLE
  const memoFilterUsers = useMemo(() => {
    const query = searchValue?.toLowerCase()?.trim()
    if (!query) return allUsers

    const getFilterUsers = allUsers?.filter((user: UserRowProps) => user?.fullName?.toLowerCase()?.trim()?.includes?.(query))
    return getFilterUsers

  }, [searchValue, allUsers])
  // CLOSE MODAL OVERLAY
  const handleOverclose = () => {
    updateModalVisible?.(false)
    updateDropdownValue?.('select a role')
    clearNewUserData?.()
    setNewCustErrors(initialFormState)
  }
  // GET SEARCH VALUE
  const handleSearch = (inputEvent: React.ChangeEvent<HTMLInputElement>) => {
    // updateSearchValue?.(inputEvent?.target?.value)
    dispatch({ type: setSearchValue, payload: inputEvent?.target?.value })
  }

  return (
    <div className="min-h-screen bg-bgPrime text-colorPrime">
      <div className="container flex flex-col gap-4">
        {/* HEADER & SEARCH */}
        <div className="flex flex-col w-full gap-3 lg:flex-row lg:gap-6">
          <Header appName="cliently" />
          <Search placeholder="search user by name..." inputName="global-search" inputValue={searchValue} getActionFn={handleSearch} getClearSearch={() => dispatch({ type: clearSearch })} />
        </div>
        {/* SIDEBAR, CARDS & TABLE *************************************/}
        <div className="lg:flex gap-4">
          <Sidebar />
          {/* CARDS & TABLE */}
          <div className="flex flex-col flex-1 gap-4 max-w-fit overflow-x-auto">
            {/* CARDS *************************************/}
            <div className="flex flex-col gap-4 xl:justify-between">
              <SectionHead head="top users" />
              <div className="flex gap-3 p-2 max-w-fit overflow-x-auto whitespace-nowrap">
                {topUsers?.map((user, index) => (
                  <UserCard
                    key={user.name}
                    name={user.name}
                    networth={user.netWorth}
                    place={user.place}
                    rank={index + 1}
                  />
                ))}
              </div>
            </div>

            {/* TABLE *************************************/}
            <div className="flex flex-col gap-2 mt-6">
              <SectionHead head="all users" />
              <Button name="add new" variant="secondary" trailingIcon={<IoIosAdd size={22} />} getActionFn={() => updateModalVisible?.(true)} />
              <div ref={userTable} className={`rounded-lg border`}>
                {getLoading ? <Loader /> : <DataTable columns={UserColumns} data={memoFilterUsers ?? []} keyField="rank" customStyles={customStyles} fixedHeader fixedHeaderScrollHeight={`${height}px`} />}
              </div>
            </div>

          </div>
        </div>
        {/* OVERLAY */}
        {modalVisible && <Overlay getActionFn={handleOverclose}>
          <NewCustomerModal heading={'fill details to show new customer'} onSubmit={formValidation} />
        </Overlay>}
      </div>
    </div>
  );
}

export default App;
