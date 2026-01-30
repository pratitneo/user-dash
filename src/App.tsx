import Header from "./components/Header";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import UserCard from "./components/UserCard";
import { customStyles } from "./utils/tableCustomStyles";
import { topUsers } from "./utils/topUsers";
import type { NewUserDataType, UserRowProps, UserState } from "./utils/types";
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
import { sideLinks } from "./utils/sideLinks";
import { validateNewUser } from "./utils/validate";
import { createUser, fetchUsers } from "./services/users.service";

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
      const users = await fetchUsers()
      dispatch({ type: setAllUsers, payload: users })
    } catch (err) {
      console.error(err)
    } finally {
      updateGetLoading?.(false)
    }
  }

  // FETCH USERS FOR THE FIRST RENDER
  useEffect(() => {
    getUsers()
  }, [])

  // POST NEW USER
  const postUser = async (newUserData: NewUserDataType) => {
    const nextRank = (allUsers?.length ?? 0) + 1
    const newUser = await createUser(newUserData, nextRank)

    dispatch({ type: addUser, payload: newUser })
  }


  // CHECK FORM DATA
  const formValidation = (formDetails: NewUserDataType) => {

    const { errors, isValid } = validateNewUser(formDetails)
    setNewCustErrors(errors)

    if (!isValid) return

    postUser?.(formDetails)
    updateModalVisible?.(false)
    setNewCustErrors(initialFormState)
    clearNewUserData?.()
    updateDropdownValue?.('please select a role')
  }

  // FILTER ON TABLE
  const filteredUsers = useMemo(() => {
    if (!searchValue) return allUsers

    const query = searchValue?.toLowerCase()?.trim()
    return allUsers?.filter((user: UserRowProps) => user?.fullName?.toLowerCase()?.trim()?.includes?.(query))

  }, [searchValue, allUsers])
  // CLOSE MODAL OVERLAY
  const handleOverlayClose = () => {
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
          <Header appName="cliently" links={sideLinks} />
          <Search placeholder="search user by name..." inputName="global-search" inputValue={searchValue} getActionFn={handleSearch} getClearSearch={() => dispatch({ type: clearSearch })} />
        </div>
        {/* SIDEBAR, CARDS & TABLE *************************************/}
        <div className="lg:flex gap-4">
          <Sidebar links={sideLinks} />
          {/* CARDS & TABLE */}
          <div className="flex flex-col flex-1 gap-4 max-w-fit overflow-x-auto">
            {/* CARDS *************************************/}
            <div className="flex flex-col gap-4 xl:justify-between">
              <SectionHead head="top users" />
              <div className="flex gap-3 p-2 max-w-fit overflow-x-auto whitespace-nowrap">
                {topUsers?.map((user, index) => <UserCard key={user.name} name={user.name} networth={user.netWorth} place={user.place} rank={index + 1} />)}
              </div>
            </div>

            {/* TABLE *************************************/}
            <div className="flex flex-col gap-2 mt-6">
              <SectionHead head="all users" />
              <Button name="add new" variant="secondary" trailingIcon={<IoIosAdd size={22} />} getActionFn={() => updateModalVisible?.(true)} />
              <div ref={userTable} className={`rounded-lg border`}>
                {getLoading ? <Loader /> : <DataTable columns={UserColumns} data={filteredUsers ?? []} keyField="rank" customStyles={customStyles} fixedHeader fixedHeaderScrollHeight={`${height}px`} />}
              </div>
            </div>

          </div>
        </div>
        {/* OVERLAY */}
        {modalVisible && <Overlay getActionFn={handleOverlayClose}>
          <NewCustomerModal heading={'fill details to show new customer'} onSubmit={formValidation} />
        </Overlay>}
      </div>
    </div>
  );
}

export default App;
