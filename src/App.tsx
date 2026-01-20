import Header from "./components/Header";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
// import { useIsMobile } from "./hooks/useMobile";

const App = () => {
  // const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-bgPrime text-colorPrime">
      <div className="container flex flex-col gap-4">
        {/* Small to medium screen */}
        <div className="flex flex-col w-full gap-3 lg:flex-row lg:gap-6">
          <Header appName="cliently" />
          <Search placeholder="search user..." inputName="global-search" />
        </div>
        {/* Big screens layout */}
        <div className="lg:flex gap-4">
          <Sidebar />
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
