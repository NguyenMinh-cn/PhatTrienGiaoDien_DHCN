import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import CustomPagination from './CustomPagination';
import Status from './Status';

import axios from 'axios';
import DialogOrder from './DialogOrder';
function DataTableCustom({ triggerReload }) {
    const columns = [
        {
            name: 'CUSTOMER NAME',
            selector: (row) => (
                <div className="flex justify-center items-center space-x-1">
                    <img
                        src={row.avatar}
                        alt=""
                        style={{ width: 32, height: 32, borderRadius: '50%' }}
                    />
                    <span>{row.customerName}</span>
                </div>
            ),
        },
        {
            name: 'COMPANY',
            selector: (row) => row.company,
        },
        {
            name: 'ORDER VALUE',
            selector: (row) => row.orderValue,
        },
        {
            name: 'ORDER DATE',
            selector: (row) => row.orderDate,
        },
        {
            name: 'STATUS',
            selector: (row) => <Status status={row.status} />,
        },
        {
            name: '',
            cell: (row) => (
                <DialogOrder
                    row={row}
                    onUpdateStatus={handleStatusUpdate}
                    triggerReload={triggerReload}
                />
            ),
            width: '50px',
        },
    ];
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const ordersRes = await axios.get(
                    'http://localhost:5000/Orders'
                );
                setOrder(ordersRes.data || []); // Cập nhật lại 'setOrder'
                setLoading(false);
            } catch (err) {
                console.error('Lỗi xảy ra khi gọi API:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const [page, setPage] = useState(0); // bắt đầu từ trang đầu tiên
    const [rowsPerPage, setRowsPerPage] = useState(6); // 6 dòng 1 trang

    const pageCount = Math.ceil(order.length / rowsPerPage);
    const currentData = order.slice(
        page * rowsPerPage, //phần tử bắt đầu, vd 1*6 là phần tử thứ 6
        (page + 1) * rowsPerPage //phần tử kết thúc, vd (1+1)*6 là phần tử thứ 12 không bao gồm phần tử thứ 12
    ); // phân trang
    const handleStatusUpdate = (id, newStatus) => {
        const updatedOrders = order.map((order) =>
            order.id === id ? { ...order, status: newStatus } : order
        );
        setOrder(updatedOrders);
    };

    return (
        <DataTable
            columns={columns}
            data={currentData}
            selectableRows
            pagination
            paginationComponent={() => (
                <CustomPagination
                    rowCount={order.length}
                    page={page}
                    setPage={setPage}
                    pageCount={pageCount}
                />
            )}
            customStyles={{
                headRow: {
                    style: {
                        backgroundColor: '#f8f9fb',
                        color: 'black',
                        fontWeight: 'bold',
                    },
                },
            }}
        />
    );
}

export default DataTableCustom;
