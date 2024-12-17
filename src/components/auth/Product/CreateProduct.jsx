import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const CreateProduct = () => {

    const Get = async()=>{
        try{
            const {data} = await axios.get('http://localhost:3006/get-all',{
                withCredentials:true
            });
            console.log(data.data);
        }
        catch(error){
            console.log(error);
        }

    }
    useEffect(()=>{
        Get();
    },[])

    
    return (
        <>
            <div className="w-1/4 h-1/3 bg-blue-600 p-3 rounded">
                <p className="text-lg text-white">User Id</p>
                <p className="text-lg text-white">UserName</p>
                <p className="text-lg text-white">Email</p>
                <p className="text-lg text-white">Password</p>
            </div>
           
        </>
    );
};

export default CreateProduct;
