import { Link } from "react-router-dom";

const Navbar = ()=>{
    return (
        <>
        <div className="absolute top-0 w-full h-1/6 bg-slate-600 flex justify-end border-b-2 border-white">
            <div className="h-full w-2/5 flex  justify-evenly  items-center">
                <Link to="/index" className="text-xl font-semibold text-white">
                    home
                </Link>
                <p className="text-xl font-semibold text-white">
                    About us
                </p>
                <p className="text-xl font-semibold text-white">
                   Contact Us
                </p>
                
            </div>
        </div>
        </>
    );
}
export default Navbar ; 