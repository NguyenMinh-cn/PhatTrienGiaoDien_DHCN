import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Squares from '../assets/img/Squares four 1.png';
import File_text_1 from '../assets/img/File text 1.png';
import ImportIcon from '../assets/img/Move up.png';
import ExportIcon from '../assets/img/Download.png';
import DataTableCustom from './DataTableCustom';
function Overview() {
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
        <>
            <div className="col-span-3 row-span-3 grid grid-cols-3 grid-rows-3 gap-x-3 border-b p-4">
                <div
                    href="#"
                    className=" col-span-3 flex items-center font-bold">
                    <img src={Squares} alt="Group" className="max-w-20 mr-2" />
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
        </>
    );
}

export default Overview;
