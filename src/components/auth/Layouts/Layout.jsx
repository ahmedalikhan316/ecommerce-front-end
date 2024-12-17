import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({children})=>{
    return (
        <>
          <div className="h-full w-full bg-gray-300">
            <Navbar></Navbar>
           <div className="pt-28 w-full h-full flex ">
           <Sidebar/>
           {children}
             </div>
          </div>
        </>
    );
}
export default Layout;