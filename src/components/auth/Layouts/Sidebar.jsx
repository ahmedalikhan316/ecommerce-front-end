import { Link } from "react-router-dom";

const Sidebar = ()=>{
    return (
        <>
        <div className="w-1/4 h-full bg-slate-600 ">
            <div className="h-2/4 w-full flex flex-col justify-around items-center">
                <p className="text-xl font-semibold rounded-md p-2 text-white hover:bg-blue-700 hover:text-white hover:border-">
                    Customer Management
                </p>
                <p className="text-xl font-semibold p-2 text-white rounded-md hover:bg-blue-700 hover:text-white">
                    User management
                </p>
                <div>
                <Link to="product" className="text-xl rounded-md p-2 font-semibold text-white hover:bg-blue-700 hover:text-white">
                  Product management
                </Link>
                </div>
               

                 <div>
                 <input type="text" className="h-10 w-36 rounded-md mr-3" name="" id="" placeholder="Search product"/>
                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 h-10 w-36 rounded-md">search</button>
                 </div>
                
            </div>
        </div>
        </>
    );
}
export default Sidebar ; 