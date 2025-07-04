import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () =>{

    const[emailId, setEmailId] = useState("");
    const[password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async() =>{
        try{
            //const result = await axios.post("http://localhost:7000", {emailId,password})
            const data = "Raja"
            //dispatch(addUser(result.data));
            dispatch(addUser(data));
            if (data != null)
            {
                return navigate("/");
            }
        }
        catch(err)
        {
            console.error(err)
        }
        
    }

    return(
        <div className="flex justify-center my-10">
            <div className="card bg-base-300 w-96 shadow-sm">
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <div>
                    <label className="form-control w-full max-w-xs py-8">
                        <div className="label">
                            <span className="label-text">Email ID</span>
                        </div>
                        <input type="text" value={emailId} onChange={(e)=>setEmailId(e.target.value)} className="input input-bordered w-full max-w-xs" />
                        
                    </label>
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className="label-text">Password</span>
                        </div>
                        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
                        
                    </label>
                </div>
                <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Login