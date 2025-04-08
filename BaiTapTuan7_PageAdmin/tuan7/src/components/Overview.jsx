import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Squares from '../assets/img/Squares four 1.png';
import File_text_1 from '../assets/img/File text 1.png';
import ImportIcon from '../assets/img/Move up.png';
import ExportIcon from '../assets/img/Download.png';
import DataTableCustom from './DataTableCustom';
import AddOrderModal from './AddOrderModal';
import Button1509 from '../assets/img/Button 1509.png';
import Button1529 from '../assets/img/Button 1529.png';
import Button1530 from '../assets/img/Button 1530.png';
import { calculateTurnoverAndProfit } from '../calculateTurnoverAndProfit';
function Overview() {
    const [data, setData] = useState({
        turnover: null,
        profit: null,
        newCustomer: null,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);
    const triggerReload = () => setReloadKey((prev) => prev + 1); //truyen reaload lại cho datatable
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [turnoverRes, profitRes, newCustomerRes, ordersRes] =
                    await Promise.all([
                        axios.get('http://localhost:5000/Turnover'),
                        axios.get('http://localhost:5000/Profit'),
                        axios.get('http://localhost:5000/New_customer'),
                        axios.get('http://localhost:5000/Orders'),
                    ]);

                const turnover = turnoverRes?.data ?? null;
                const profit = profitRes?.data ?? null;
                const newCustomer = newCustomerRes?.data ?? null;
                const orders = Array.isArray(ordersRes?.data)
                    ? ordersRes.data
                    : [];

                setData({ turnover, profit, newCustomer });
                updateTurnoverAndProfit(orders, 4, 2025, 0.4);
                // const stats = calculateTurnoverAndProfit(orders, 4, 2025, 0.4);
                // const turnoverVal = parseFloat(stats.turnover);
                // const profitVal = parseFloat(stats.profit);

                // console.log('Hiển thị:', stats.turnover, stats.profit);
                // console.log(
                //     'Tính toán:',
                //     (stats.turnover - turnover.amount) / turnover.amount,
                //     (stats.profit - profit.amount) / profit.amount
                // );

                setLoading(false);
            } catch (err) {
                console.error('Lỗi xảy ra khi gọi API:', err);
                setError(err.message || 'Đã xảy ra lỗi');
                setLoading(false);
            }
        };

        fetchData();
    }, [reloadKey]);

    // Hàm đếm khách hàng mới
    const countUniqueNewCustomers = (orders) => {
        const uniqueNames = new Set();
        orders.forEach((order) => {
            uniqueNames.add(order.customerName);
        });
        return uniqueNames.size;
    };

    const updateNewCustomer = async () => {
        try {
            const ordersRes = await axios.get('http://localhost:5000/Orders');
            const orders = ordersRes.data;
            const count = countUniqueNewCustomers(orders);

            const oldDataRes = await axios.get(
                'http://localhost:5000/New_customer'
            );
            const oldData = oldDataRes.data;
            const oldCount = oldData?.count || 0;

            let changePercentage = 0;
            let changeDirection = 'up';

            if (oldCount > 0) {
                changePercentage = ((count - oldCount) / oldCount) * 100;
                changeDirection = count >= oldCount ? 'up' : 'down';
            } else {
                changePercentage = 100;
            }

            const updatedData = {
                ...oldData,
                count: count,
                changePercentage: parseFloat(changePercentage.toFixed(2)),
                changeDirection,
                period: 'this month',
            };

            await axios.put('http://localhost:5000/New_customer', updatedData);

            // Cập nhật vào state để hiển thị
            setData((prev) => ({
                ...prev,
                newCustomer: updatedData,
            }));
        } catch (err) {
            console.error('Lỗi khi cập nhật số khách hàng mới:', err);
        }
    };

    const updateTurnoverAndProfit = async (orders, month, year, profitRate) => {
        try {
            // Bước 1: Tính toán mới từ đơn hàng
            const stats = calculateTurnoverAndProfit(
                orders,
                month,
                year,
                profitRate
            );
            const turnoverVal = stats.turnover;
            const profitVal = stats.profit;

            // Bước 2: Lấy dữ liệu cũ từ API
            const [oldTurnoverRes, oldProfitRes] = await Promise.all([
                axios.get('http://localhost:5000/Turnover'),
                axios.get('http://localhost:5000/Profit'),
            ]);
<<<<<<< HEAD

            const oldTurnover = {
                amount: parseFloat(oldTurnoverRes.data?.amount) || 0,
                changePercentage:
                    parseFloat(oldTurnoverRes.data?.changePercentage) || 0,
            };

=======
            const oldTurnover = {
                amount: parseFloat(oldTurnoverRes.data?.amount) || 0,
                changePercentage:
                    parseFloat(oldTurnoverRes.data?.changePercentage) || 0,
            };

>>>>>>> ece18dd (css va tao Minh chung)
            const oldProfit = {
                amount: parseFloat(oldProfitRes.data?.amount) || 0,
                changePercentage:
                    parseFloat(oldProfitRes.data?.changePercentage) || 0,
            };

            // Bước 3: Tính phần trăm thay đổi
            const calcChange = (newVal, oldVal, prevPercentage) => {
                // Trường hợp giá trị không đổi
                if (newVal === oldVal) {
                    return {
                        changePercentage: prevPercentage ?? 0,
                        changeDirection: 'none',
                    };
                }

                // Trường hợp cũ bằng 0
                if (oldVal === 0) {
                    return {
                        changePercentage: 100,
                        changeDirection: 'up',
                    };
                }

                // Trường hợp có sự thay đổi và oldVal khác 0
                const diff = newVal - oldVal;
                const percentageChange = parseFloat((diff / oldVal).toFixed(2));

                return {
                    changePercentage: percentageChange,
                    changeDirection: diff > 0 ? 'up' : 'down',
                };
            };

            const turnoverChange = calcChange(
                turnoverVal,
                oldTurnover.amount,
                oldTurnover.changePercentage
            );
            const profitChange = calcChange(
                profitVal,
                oldProfit.amount,
                oldProfit.changePercentage
            );
            console.log(turnoverVal);
            console.log(profitVal);
            // Bước 4: Dữ liệu cập nhật
            const updatedTurnover = {
                title: 'Turnover',
                amount: turnoverVal,
                changePercentage: turnoverChange.changePercentage,
                changeDirection: turnoverChange.changeDirection,
                period: 'this month',
            };
            const updatedProfit = {
                title: 'Profit',
                amount: profitVal,
                changePercentage: profitChange.changePercentage,
                changeDirection: profitChange.changeDirection,
                period: 'this month',
            };

            // Bước 5: PUT để cập nhật
            await Promise.all([
                axios.put('http://localhost:5000/Turnover', updatedTurnover),
                axios.put('http://localhost:5000/Profit', updatedProfit),
            ]);

            // Bước 6: Cập nhật state
            setData((prev) => ({
                ...prev,
                turnover: updatedTurnover,
                profit: updatedProfit,
            }));
        } catch (err) {
            console.error('Lỗi khi cập nhật Turnover và Profit:', err);
        }
    };

    return (
        <>
            <div className="col-span-3 row-span-3 grid grid-cols-3 grid-rows-3 gap-x-3 border-b p-4">
                <div
                    href="#"
                    className=" col-span-3 flex items-center font-bold">
                    <img src={Squares} alt="Group" className="max-w-20 mr-2" />
                    <span>Overview</span>
                </div>
                <div className=" col-span-1 row-span-2 bg-pink-100 rounded-md p-3">
                    {data.turnover ? (
                        <>
                            <div className=" flex justify-between">
                                <h3 className="text-sm font-bold">
                                    {data.turnover.title}
                                </h3>

                                <button>
                                    <img
                                        src={Button1509}
                                        alt=""
                                        srcset=""
                                        className="h-8 w-8"
                                    />
                                </button>
                            </div>

                            <p className="text-2xl font-bold">
                                $
                                {new Intl.NumberFormat().format(
                                    data.turnover.amount
                                )}{' '}
                            </p>

                            <p
                                className={`${
                                    data.turnover.changeDirection === 'up'
                                        ? 'text-green-700'
                                        : 'text-red-600'
                                } text-sm`}>
                                {data.turnover.changeDirection === 'up'
                                    ? '▲'
                                    : '▼'}{' '}
                                {data.turnover.changePercentage} period of
                                change
                            </p>
                        </>
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
                <div className=" col-span-1 row-span-2 bg-blue-100 rounded-md p-3">
                    {data.profit ? (
                        <>
                            <div className=" flex justify-between">
                                <h3 className="text-sm font-bold">
                                    {data.profit.title}
                                </h3>

                                <button>
                                    <img
                                        src={Button1529}
                                        alt=""
                                        srcset=""
                                        className="h-8 w-8"
                                    />
                                </button>
                            </div>

                            <p className="text-2xl font-bold">
                                $
                                {new Intl.NumberFormat().format(
                                    data.profit.amount
                                )}{' '}
                            </p>
                            <p
                                className={`${
                                    data.profit.changeDirection === 'up'
                                        ? 'text-green-700'
                                        : 'text-red-600'
                                } text-sm`}>
                                {data.profit.changeDirection === 'up'
                                    ? '▲'
                                    : '▼'}{' '}
                                {data.profit.changePercentage} period of change
                            </p>
                        </>
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
                <div className=" col-span-1 row-span-2 bg-blue-100 rounded-md p-3">
                    {data.newCustomer ? (
                        <>
                            <div className=" flex justify-between">
                                <h3 className="text-sm font-bold">
                                    {data.newCustomer.title}
                                </h3>

                                <button>
                                    <img
                                        src={Button1530}
                                        alt=""
                                        srcset=""
                                        className="h-8 w-8"
                                    />
                                </button>
                            </div>

                            <p className="text-2xl font-bold">
                                {data.newCustomer.count}{' '}
                            </p>

                            <p
                                className={`${
                                    data.newCustomer.changeDirection === 'up'
                                        ? 'text-green-700'
                                        : 'text-red-600'
                                } text-sm`}>
                                {data.newCustomer.changeDirection === 'up'
                                    ? '▲'
                                    : '▼'}{' '}
                                {data.newCustomer.changePercentage} period of
                                change
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
                        <AddOrderModal
                            triggerButton={
                                <button className="flex items-center px-2 py-2 border border-pink-500 rounded-lg hover:bg-pink-300 hover:text-white transition-colors">
                                    <img
                                        src={ImportIcon}
                                        alt=""
                                        className="pr-2"
                                    />
                                    <span className="text-pink-500 text-sm font-normal">
                                        Import
                                    </span>
                                </button>
                            }
                            onSuccess={() => {
                                setReloadKey((prev) => prev + 1);

                                updateNewCustomer(); // reload lại datatable
                            }}
                        />

                        <button className=" flex items-center px-2 py-2 border border-pink-500 rounded-lg hover:bg-pink-300 hover:text-white transition-colors">
                            <img src={ExportIcon} alt="" className="pr-2" />
                            <span className="text-pink-500 text-sm font-normal ">
                                Export
                            </span>
                        </button>
                    </div>
                </div>
                <DataTableCustom
                    key={reloadKey}
                    triggerReload={triggerReload}
                />
            </div>
        </>
    );
}

export default Overview;
