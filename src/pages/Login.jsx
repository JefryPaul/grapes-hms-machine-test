import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/grapeslogo.png";
import { preLogin, userLogin } from "../services/APICalls";

function Login() {
    const navigate = useNavigate()

    const [phone, setPhone] = useState("")
    const [hospitals, setHospitals] = useState([])
    const [hospitalId, setHospitalId] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handlePreLogin = async () => {
        try {
            const res = await preLogin(phone)

            console.log(res.data);

            setHospitals(res.data.Hospital || [])
        } catch (err) {
            console.error(err);

            setHospitals([])

            alert("Unable to fetch hospitals")
        }
    }

    const handleLogin = async () => {
        try {

            if (!phone || !hospitalId || !password) {
                alert("Please fill all fields.")
            } else {
                const res = await userLogin({
                    PhoneNumber: phone,
                    HospitalID: hospitalId,
                    Password: password,
                })

                console.log(res.data);

                sessionStorage.setItem("token", res.data.Token)

                navigate("/dashboard")

                alert("Successfully Logged in")
            }
        } catch (err) {
            console.error(err);
            alert("Invalid credentials")
        }
    }

    return (
        <div className="min-h-screen flex">


            <div className="w-1/2 bg-gray-50 p-10 flex flex-col items-center justify-center text-center">
                <img src={logo} alt="logo" className="w-40 mb-8" />

                <h1 className="text-3xl font-semibold mb-6">
                    Welcome, to <span className="text-purple-600">Grapes HMS</span>
                </h1>

                <img src='https://media.istockphoto.com/id/1318134046/photo/black-stethoscope-isolated-on-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=i_n4JrCWXlIQ75J80838h7YxRO0kMwTqizFm0U554gc=' alt="Stethoscope" className="w-80 mb-6"/>

                <div className="text-sm text-gray-500">Grapes IDMR</div>
            </div>


            <div className="w-1/2 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <div className="bg-white rounded-xl p-8 w-96 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Sign in to your account</h2>

                    <input type="text" placeholder="Mobile Number" className="w-full border p-2 rounded mb-4" value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={handlePreLogin} />

                    <select className="w-full border p-2 rounded mb-4" value={hospitalId} onChange={(e) => setHospitalId(e.target.value)}>
                        <option value="">Select Hospital</option>
                        {hospitals.map((h) => (
                            <option key={h.hospital_id} value={h.hospital_id}>
                                {h.hospital_name}
                            </option>
                        ))}
                    </select>

                    <div className="relative mb-4">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full border p-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="absolute right-2 top-2 text-sm text-purple-600" onClick={() => setShowPassword(!showPassword)} type="button">{showPassword ? "Hide" : "Show"}</button>
                    </div>

                    <button onClick={handleLogin} className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;