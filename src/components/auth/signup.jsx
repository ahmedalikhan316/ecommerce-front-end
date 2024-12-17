const Signup = ({setAuth})=>{

    return (
        <>
            <div className="h-full w-full flex bg-gray-400 justify-center items-center">
                <div className=" w-1/4 h-full  bg-gray-200 ">
                    <h1 className="bg-red-400 flex justify-center items-center">Sign Up form</h1>

                    <div className="w-full  h-1/4 bg-slate-300 flex flex-col ">
                    <label htmlFor="userName" className="text-xl">UserName</label>
                    <input type="text" name="userName" id="" className="rounded-md" required/>
                    </div>
                    <div className="w-full  h-1/4 bg-slate-300 flex flex-col ">
                    <label htmlFor="password" className="text-xl">password</label>
                    <input type="password" name="password" id="" className="rounded-md" required/>
                    </div>
                    <div className="w-full  h-1/4 bg-slate-300 flex flex-col ">
                    <label htmlFor="password" className="text-xl">Confirm Password</label>
                    <input type="password" name="password" id="" className="rounded-md" required/>
                    </div>
                    <p>Already have an account <span className="hover:to-blue-500 cursor-pointer"
                    onClick={()=>{
                                setAuth('login')
                    }}      
                    >Login</span></p>
                    <div className="w-full  h-1/4 bg-slate-300 flex flex-col ">
                    <button className="bg-blue-600">Sign Up</button>
                    </div>
                </div>

            </div>
        </>
    )


} 
export default Signup;