import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./auth";
import Index from "./components/auth";
import Product from "./components/auth/product";
import CreateProduct from "./components/auth/Product/CreateProduct";
import GetProduct from "./components/auth/Product/GetProduct";
import Layout from "./components/auth/Layouts/Layout";

export default function App() {
  const location = useLocation();
  const isAuthPath = location.pathname ==='/';
  return (
   <>
    <div className="h-full w-full">
      {
        isAuthPath ? (
          <Routes>
            <Route index element = {<Auth/>}/>
            
          </Routes>
        ):
        (
          <Layout>
              <Routes>
            <Route path="/" element={<Auth/>} />
            <Route path="/index" element={<Index/>} />
            <Route path="/product">
              <Route index element={<Product/>}></Route>
              <Route path="get-product" element={
                <Product>
                  <GetProduct/>
                </Product>
              }></Route>
              <Route path="create-product" element={
                 <Product>
                 <CreateProduct/>
               </Product>
                }></Route>
            
            </Route>
            

    </Routes>
          </Layout>
        )
      }
      
       {/* <Routes>
            <Route path="/" element={<Auth/>} />
            <Route path="/index" element={<Index/>} />
            <Route path="/product">
              <Route index element={<Product/>}></Route>
              <Route path="get-product" element={<GetProduct/>}></Route>
              <Route path="create-product" element={<CreateProduct/>}></Route>
            
            </Route>
            

    </Routes> */}
    
    </div>
    
   
   </>
  )
}