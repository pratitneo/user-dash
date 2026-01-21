import axios from "axios";
import Header from "./components/Header";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import UserCard from "./components/UserCard";
import { API_URLS } from "./config/api";
import { UserColumns } from "./utils/tableCols";
import { customStyles } from "./utils/tableCustomStyles";
import { topUsers } from "./utils/topUsers";
import type { TopUserProps, UserProps } from "./utils/types";
import DataTable from "react-data-table-component";
import { useQuery } from "@tanstack/react-query";
import Button from "./components/Button";
import { IoIosAdd } from "react-icons/io";
import Overlay from "./components/Overlay";
import NewCustomerModal from "./components/NewCustomerModal";

const App = () => {

  const getUsers = async () => {
    const { data } = await axios.get(API_URLS.users)
    return data
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 10000,
    select: (data) =>
      data.users.map((user: UserProps) => ({
        rank: user.id ?? 0,
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email ?? '',
        company: user.company?.name,
      })),
  })


  return (
    <div className="min-h-screen bg-bgPrime text-colorPrime">
      <div className="container flex flex-col gap-4">
        {/* Header & Search */}
        <div className="flex flex-col w-full gap-3 lg:flex-row lg:gap-6">
          <Header appName="cliently" />
          <Search placeholder="search user by name..." inputName="global-search" />
        </div>
        {/* SIDEBAR *************************************/}
        <div className="lg:flex gap-4">
          <Sidebar />
          <div className="flex flex-col flex-1 gap-4">
            {/* CARDS *************************************/}
            <div className="flex flex-wrap gap-4 xl: justify-between">
              {topUsers && topUsers?.map((user: TopUserProps, index: number) => <UserCard key={user?.name} name={user?.name} networth={user?.netWorth} place={user?.place} rank={index + 1} />)}
            </div>
            {/* TABLE *************************************/}
            <div className="flex flex-col gap-2 mt-6">
              <Button name="add new customer" trailingIcon={<IoIosAdd size={22} />} />
              <div className="rounded-lg max-h-[650px] overflow-y-auto">
                <DataTable
                  columns={UserColumns}
                  data={data ?? []}
                  customStyles={customStyles}
                />
              </div>
            </div>

          </div>
        </div>
        {/* OVERLAY */}
        <Overlay>
          <NewCustomerModal />
        </Overlay>
      </div>
    </div>
  );
}

export default App;
