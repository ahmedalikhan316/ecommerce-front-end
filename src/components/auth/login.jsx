import { useNavigate } from "react-router-dom";

const Login = ({setAuth})=>{
    const navigate = useNavigate();

    return (
        <>
            <div className="h-full w-full flex bg-gray-400 justify-center items-center">
                <div className=" w-1/4 h-2/4  bg-gray-200 ">
                    <h1 className="bg-red-400 flex justify-center items-center">Login Form</h1>

                    <div className="w-full  h-1/4 bg-slate-300 flex flex-col ">
                    <label htmlFor="userName" className="text-xl">UserName</label>
                    <input type="text" name="userName" id="" className="rounded-md" required/>
                    </div>
                    <div className="w-full  h-1/4 bg-slate-300 flex flex-col ">
                    <label htmlFor="password" className="text-xl">UserName</label>
                    <input type="password" name="password" id="" className="rounded-md" required/>
                    </div>
                    <p>don't have an account <span 
                    onClick={
                        ()=>{
                            setAuth("signup");
                        }
                    }
                    className="hover:to-blue-500 cursor-pointer">SignUp</span></p>
                    <div className="w-full  h-1/4 bg-slate-300 flex flex-col ">
                    <label htmlFor="password" className="text-xl">UserName</label>
                    <button className="bg-blue-600 p-3 rounded-md"
                    onClick={()=>{
                        navigate('/index');
                    }}
                    >Login</button>
                    </div>
                </div>

            </div>
        </>
    )


}
export default Login;