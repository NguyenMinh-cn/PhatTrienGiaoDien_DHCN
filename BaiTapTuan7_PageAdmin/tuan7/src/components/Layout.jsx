import React, { useEffect, useState } from 'react';
import axios from 'axios';

import GroupImage from '../assets/img/Group.png';
import Bell1 from '../assets/img/Bell 1.png';
import Button1509 from '../assets/img/Button 1509.png';
import Button1529 from '../assets/img/Button 1529.png';
import Button1530 from '../assets/img/Button 1530.png';
import Code from '../assets/img/Code.png';
import Create from '../assets/img/create.png';
import Chat from '../assets/img/Chat.png';
import ExportIcon from '../assets/img/Download.png';
import File_text_1 from '../assets/img/File text 1.png';
import Folder from '../assets/img/Folder.png';
import Groups from '../assets/img/Groups.png';
import Logo from '../assets/img/Image 1858.png';
import Pie_chart from '../assets/img/Pie chart.png';
import ImportIcon from '../assets/img/Move up.png';
import Question_1 from '../assets/img/Question 1.png';
import Search from '../assets/img/Search.png';
import Squares from '../assets/img/Squares four 1.png';
import Avatar1 from '../assets/img/Avatar (1).png';
import DataTableCustom from './DataTableCustom';
function Layout() {
    const [data, setData] = useState({
        turnover: null,
        profit: null,
        newCustomer: null,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [turnoverRes, profitRes, newCustomerRes] =
                    await Promise.all([
                        axios.get('http://localhost:5000/Turnover'),
                        axios.get('http://localhost:5000/Profit'),
                        axios.get('http://localhost:5000/New_customer'),
                    ]);
                console.log('Turnover data:', turnoverRes.data);
                console.log('Profit data:', profitRes.data);
                console.log('New customer data:', newCustomerRes.data);
                setData({
                    turnover: turnoverRes.data[0] || null,
                    profit: profitRes.data[0] || null,
                    newCustomer: newCustomerRes.data[0] || null,
                });
                setLoading(false);
            } catch (err) {
                console.error('Lỗi xảy ra khi gọi API:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
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
                        {data.turnover ? (
                            <>
                                <h3>{data.turnover.title}</h3>
                                <p>
                                    {new Intl.NumberFormat().format(
                                        data.turnover.amount
                                    )}{' '}
                                    USD
                                </p>

                                <p>
                                    {data.turnover.changeDirection === 'up'
                                        ? 'up'
                                        : 'down'}{' '}
                                    {data.turnover.changePercentage}%
                                </p>
                            </>
                        ) : (
                            <div>No data available</div>
                        )}
                    </div>
                    <div className=" col-span-1 row-span-2 bg-slate-400">
                        {data.profit ? (
                            <>
                                <h3>{data.profit.title}</h3>
                                <p>
                                    {new Intl.NumberFormat().format(
                                        data.profit.amount
                                    )}{' '}
                                    USD
                                </p>
                                <p>
                                    {data.profit.changeDirection === 'up'
                                        ? 'up'
                                        : 'down'}{' '}
                                    {data.profit.changePercentage}%{' '}
                                </p>
                            </>
                        ) : (
                            <div>No data available</div>
                        )}
                    </div>
                    <div className=" col-span-1 row-span-2 bg-slate-400">
                        {data.newCustomer ? (
                            <>
                                <h3>{data.newCustomer.title}</h3>
                                <p>{data.newCustomer.count} customers</p>
                                <p>
                                    {data.newCustomer.changeDirection === 'up'
                                        ? 'up'
                                        : 'down'}{' '}
                                    {data.newCustomer.changePercentage}%
                                </p>
                            </>
                        ) : (
                            <div>No data available</div>
                        )}
                    </div>
                </div>
                <div className="col-span-3 row-span-6 border-b p-4">
                    <div
                        href="#"
                        className=" col-span-3 flex items-center justify-between py-2 font-bold">
                        <div className="flex items-center">
                            <img
                                src={File_text_1}
                                alt="Group"
                                className="max-w-20 mr-2"
                            />
                            <span>Detailed report</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="flex items-center px-2 py-2 border border-pink-500 rounded-lg hover:bg-pink-300 hover:text-white transition-colors">
                                <img src={ImportIcon} alt="" className="pr-2" />
                                <span className="text-pink-500 text-sm font-normal ">
                                    Import
                                </span>
                            </button>
                            <button className=" flex items-center px-2 py-2 border border-pink-500 rounded-lg hover:bg-pink-300 hover:text-white transition-colors">
                                <img src={ExportIcon} alt="" className="pr-2" />
                                <span className="text-pink-500 text-sm font-normal ">
                                    Export
                                </span>
                            </button>
                        </div>
                    </div>
                    <DataTableCustom />
                </div>
            </div>
        </div>
    );
}

export default Layout;
