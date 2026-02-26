import { useState } from "react";
import logo from "../assets/grapeslogo.png";

function Login() {
    const [phone, setPhone] = useState("");
    const [hospitalId, setHospitalId] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex">



            <div className="w-1/2 bg-gray-50 p-10 flex flex-col justify-between">
                <div>
                    <img src={logo} alt="logo" className="w-40 mb-10" />
                    <h1 className="text-3xl font-semibold">Welcome, to <span className="text-purple-600">Grapes HMS</span></h1>
                </div>

                <div className="text-sm text-gray-500">Grapes IDMR</div>
            </div>



            <div className="w-1/2 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <div className="bg-white rounded-xl p-8 w-96 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Sign in to your account</h2>
                    

                    <input type="text" placeholder="Mobile Number" className="w-full border p-2 rounded mb-4" value={phone} onChange={(e) => setPhone(e.target.value)} />


                    <select className="w-full border p-2 rounded mb-4" value={hospitalId} onChange={(e) => setHospitalId(e.target.value)}>
                        <option value="">Select Hospital</option>
                        <option value="1">GRAPES IDMR</option>
                    </select>


                    <div className="relative mb-4">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button type="button" className="absolute right-2 top-2 text-sm text-purple-600" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide" : "Show"}
                        </button>
                    </div>


                    <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;