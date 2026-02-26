import { useState } from "react";
import logo from "../assets/grapeslogo.png"; 
import { HiOutlineMenu } from "react-icons/hi";

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 flex"> 


                    {/* sidebar */}

            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsSidebarOpen(false)}/>
            )}




            <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-purple-700 to-purple-900 text-white p-5 z-50
        transform transition-transform duration-200 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between">
                    <img src={logo} alt="Grapes" className="w-32" />
                    <button className="text-white text-xl px-2" onClick={() => setIsSidebarOpen(false)} type="button" aria-label="Close sidebar">
                        X
                    </button>
                </div>

                <div className="mt-8 space-y-2 text-sm">
                    {["Dashboard", "Patients", "Doctors", "Appointments", "Reports"].map(
                        (item) => (
                            <div key={item} className="px-4 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
                                {item}
                            </div>
                        )
                    )}
                </div>
            </div>





            <div className="flex-1 p-6 space-y-6 w-full">
                <div className="flex items-center gap-3">
                    <button className="bg-white border rounded-lg px-3 py-2 shadow-sm hover:bg-gray-50" onClick={() => setIsSidebarOpen(true)}type="button" aria-label="Open sidebar">
                        <HiOutlineMenu size={22} />
                    </button>

                    <h1 className="text-2xl font-semibold text-gray-800">Hospital Dashboard</h1>
                </div>


                        {/* summary cards */}


                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Summary Cards</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-5 rounded-xl shadow text-white">
                            <p className="text-sm text-white/80">Out Patients</p>
                            <p className="text-3xl font-semibold mt-2">124</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-5 rounded-xl shadow text-white">
                            <p className="text-sm text-white/80">In Patients</p>
                            <p className="text-3xl font-semibold mt-2">56</p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-5 rounded-xl shadow text-white">
                            <p className="text-sm text-white/80">Surgeries</p>
                            <p className="text-3xl font-semibold mt-2">18</p>
                        </div>
                    </div>
                </div>



                            {/* overview statistics */}



                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        Overview Statistics
                    </h2>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between bg-gray-50 border rounded-lg px-4 py-3">
                            <span className="text-gray-600">New Patients</span>
                            <span className="font-semibold text-gray-800">36</span>
                        </div>
                        <div className="flex justify-between bg-gray-50 border rounded-lg px-4 py-3">
                            <span className="text-gray-600">Lab Requests</span>
                            <span className="font-semibold text-gray-800">71</span>
                        </div>
                        <div className="flex justify-between bg-gray-50 border rounded-lg px-4 py-3">
                            <span className="text-gray-600">Discharges</span>
                            <span className="font-semibold text-gray-800">12</span>
                        </div>
                    </div>
                </div>




                            {/* doctors info */}


                <div className="bg-white p-6 rounded-xl shadow">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">
                        Doctor Information
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center font-semibold">
                            DS
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Dr. Sooraj</p>
                            <p className="text-sm text-gray-500">General Medicine</p>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div className="bg-gray-50 border rounded-lg px-4 py-2 flex justify-between">
                            <span className="text-gray-600">OP Queue</span>
                            <span className="font-semibold">18</span>
                        </div>
                        <div className="bg-gray-50 border rounded-lg px-4 py-2 flex justify-between">
                            <span className="text-gray-600">Next Slot</span>
                            <span className="font-semibold">11:30 AM</span>
                        </div>
                    </div>
                </div>


                        {/* calender and tasks */}



                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            Tasks / Meetings
                        </h2>
                        <div className="space-y-2 text-sm">
                            <div className="bg-gray-50 border rounded-lg px-4 py-3">
                                10:00 AM • Morning rounds - Ward B
                            </div>
                            <div className="bg-gray-50 border rounded-lg px-4 py-3">
                                12:30 PM • Surgery briefing - OT-2
                            </div>
                            <div className="bg-gray-50 border rounded-lg px-4 py-3">
                                03:00 PM • Management meeting - Admin block
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            Calendar - February 2026
                        </h2>

                        <table className="w-full text-sm border border-gray-200 text-center">
                            <thead className="bg-purple-100 text-purple-800">
                                <tr>
                                    <th className="py-2 border">Sun</th>
                                    <th className="py-2 border">Mon</th>
                                    <th className="py-2 border">Tue</th>
                                    <th className="py-2 border">Wed</th>
                                    <th className="py-2 border">Thu</th>
                                    <th className="py-2 border">Fri</th>
                                    <th className="py-2 border">Sat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 border">1</td>
                                    <td className="py-2 border">2</td>
                                    <td className="py-2 border">3</td>
                                    <td className="py-2 border">4</td>
                                    <td className="py-2 border">5</td>
                                    <td className="py-2 border">6</td>
                                    <td className="py-2 border">7</td>
                                </tr>
                                <tr>
                                    <td className="py-2 border">8</td>
                                    <td className="py-2 border">9</td>
                                    <td className="py-2 border">10</td>
                                    <td className="py-2 border">11</td>
                                    <td className="py-2 border">12</td>
                                    <td className="py-2 border">13</td>
                                    <td className="py-2 border">14</td>
                                </tr>
                                <tr>
                                    <td className="py-2 border">15</td>
                                    <td className="py-2 border">16</td>
                                    <td className="py-2 border">17</td>
                                    <td className="py-2 border">18</td>
                                    <td className="py-2 border">19</td>
                                    <td className="py-2 border">20</td>
                                    <td className="py-2 border">21</td>
                                </tr>
                                <tr>
                                    <td className="py-2 border">22</td>
                                    <td className="py-2 border">23</td>
                                    <td className="py-2 border">24</td>
                                    <td className="py-2 border">25</td>
                                    <td className="py-2 border bg-purple-200 font-semibold">
                                        26
                                    </td>
                                    <td className="py-2 border">27</td>
                                    <td className="py-2 border">28</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;