import GroupImage from '../assets/img/Group.png';
import Bell1 from '../assets/img/Bell 1.png';
import Button1509 from '../assets/img/Button 1509.png';
import Button1529 from '../assets/img/Button 1529.png';
import Button1530 from '../assets/img/Button 1530.png';
import Code from '../assets/img/Code.png';
import Create from '../assets/img/create.png';
import Chat from '../assets/img/Chat.png';
import Download from '../assets/img/Download.png';
import File_text_1 from '../assets/img/File text 1.png';
import Folder from '../assets/img/Folder.png';
import Groups from '../assets/img/Groups.png';
import Logo from '../assets/img/Image 1858.png';
import Pie_chart from '../assets/img/Pie chart.png';
import Move_up from '../assets/img/Move up.png';
import Question_1 from '../assets/img/Question 1.png';
import Search from '../assets/img/Search.png';
import Squares from '../assets/img/Squares four 1.png';
import Avatar1 from '../assets/img/Avatar (1).png';
function Layout() {
    return (
        <div className="grid grid-cols-4 gap-4 p-4 h-screen ">
            {/* Menu (1 cột) */}
            <div className="col-span-1 p-4 flex flex-col border border-gray-400 min-w-40">
                <img src={Logo} alt="Group" className="max-w-20" />

                <div href="#" className="flex items-center py-2 border-b ">
                    <img src={Squares} alt="Group" className="max-w-20 mr-2" />
                    <span>Dashboard</span>
                </div>
                <div href="#" className="flex items-center py-2 border-b ">
                    <img src={Folder} alt="Group" className="max-w-20 mr-2" />
                    <span>Projects</span>
                </div>
                <div href="#" className="flex items-center py-2 border-b ">
                    <img src={Groups} alt="Group" className="max-w-20 mr-2" />
                    <span>Teams</span>
                </div>
                <div href="#" className="flex items-center py-2 border-b ">
                    <img
                        src={Pie_chart}
                        alt="Group"
                        className="max-w-20 mr-2"
                    />
                    <span>Analytics</span>
                </div>
                <div href="#" className="flex items-center py-2 border-b ">
                    <img src={Chat} alt="Group" className="max-w-20 mr-2" />
                    <span>Messages</span>
                </div>
                <div href="#" className="flex items-center py-2 border-b ">
                    <img src={Code} alt="Group" className="max-w-20 mr-2" />
                    <span>Integrations</span>
                </div>

                {/* Ảnh bắt đầu từ hàng 3 */}
                <div className="mt-auto border-t  pt-4">
                    <img src={GroupImage} alt="Group" />
                </div>
            </div>

            {/* Content (3 cột) */}
            <div className="col-span-3 border grid grid-cols-3 grid-rows-10">
                <div className="col-span-3 row-span-1 grid grid-cols-3 border-b p-4">
                    <span className="col-span-1 font-bold">Dashboard</span>
                    <div className="col-start-3 flex items-center relative">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-7 border rounded-md "
                            />
                            <img
                                src={Search}
                                alt=""
                                className="absolute pl-2 top-1/2 -translate-y-1/2"
                            />
                        </div>
                        <img src={Bell1} alt="" className="ml-4" />
                        <img src={Question_1} alt="" className="ml-4" />
                        <img src={Avatar1} alt="" className="ml-4" />
                    </div>
                </div>
                <div className="col-span-3 row-span-3 grid grid-cols-3 grid-rows-3 gap-x-3 border-b p-4">
                    <div
                        href="#"
                        className=" col-span-3 flex items-center font-bold">
                        <img
                            src={Squares}
                            alt="Group"
                            className="max-w-20 mr-2"
                        />
                        <span>Overview</span>
                    </div>
                    <div className=" col-span-1 row-span-2 bg-slate-400">
                        cột 1 2 dòng
                    </div>
                    <div className=" col-span-1 row-span-2 bg-slate-400">
                        cột 2 2 dòng
                    </div>
                    <div className=" col-span-1 row-span-2 bg-slate-400">
                        cột 3 2 dòng
                    </div>
                </div>
                <div className="col-span-3 row-span-6 border-b p-4">
                    <div
                        href="#"
                        className=" col-span-3 flex items-center py-2 font-bold">
                        <img
                            src={File_text_1}
                            alt="Group"
                            className="max-w-20 mr-2"
                        />
                        <span>Detailed report</span>
                    </div>
                    <table className="w-full border-collapse ">
                        <thead>
                            <tr>
                                <th className="border  px-4 py-2">
                                    <input type="checkbox" />
                                </th>
                                <th className="border">CUSTOMER NAME</th>
                                <th className="border">COMPANY</th>
                                <th className="border">ORDER VALUE</th>
                                <th className="border">ORDER DATE</th>
                                <th className="border">STATUS</th>
                            </tr>
                        </thead>

                        <tbody>
                            {[...Array(6)].map((_, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2 text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="border px-4 py-2">
                                        John Doe
                                    </td>
                                    <td className="border px-4 py-2">
                                        ABC Corp
                                    </td>
                                    <td className="border px-4 py-2">$1000</td>
                                    <td className="border px-4 py-2">
                                        2024-04-04
                                    </td>
                                    <td className="border px-4 py-2 text-green-500">
                                        Completed
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Layout;
