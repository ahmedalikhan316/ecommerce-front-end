import { Link } from "react-router-dom";

const Product = ({children})=>{

    return (
        <>
        <div className="w-5/6 h-full">
            <h1 className="text-2xl font-semibold ">Product page</h1> 
            <div className="w-full h-full p-4 flex flex-col ">
               <div className="w-full  h-1/5 gap-x-2 flex">
               <Link to="/product/create-product" className="bg-gray-800 h-12 text-white py-2 px-4 rounded-md">
                    Create Product
                </Link>
                <Link to="/product/get-product" className="bg-gray-800 h-12 text-white py-2 px-4 rounded-md">
                    Get Product
                </Link>
               </div>
                <div className="w-full  h-4/5">
                    {children}
                </div>
            </div>
            
        </div>
       
        </>
    )

 
}
export default Product;