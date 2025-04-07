import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import CustomPagination from './CustomPagination';
import Status from './Status';
import Create from '../assets/img/create.png';
function DataTableCustom() {
    const columns = [
        {
            name: 'CUSTOMER NAME',
            selector: (row) => row.customerName,
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
            cell: () => (
                <button>
                    <img src={Create} alt="" className="h-4 w-4" />
                </button>
            ),
            width: '50px',
        },
    ];

    const data = [
        {
            customerName: 'Elizabeth Lee',
            company: 'AvatarSystems',
            orderValue: '$359',
            orderDate: '10/07/2023',
            status: 'New',
        },
        {
            customerName: 'Carlos Garcia',
            company: 'SmoozeShift',
            orderValue: '$747',
            orderDate: '24/07/2023',
            status: 'New',
        },
        {
            customerName: 'Elizabeth Bailey',
            company: 'Prime Time Telecom',
            orderValue: '$564',
            orderDate: '08/08/2023',
            status: 'In-progress',
        },
        {
            customerName: 'Ryan Brown',
            company: 'OmniTech Corporation',
            orderValue: '$541',
            orderDate: '31/08/2023',
            status: 'In-progress',
        },
        {
            customerName: 'Ryan Young',
            company: 'DataStream Inc.',
            orderValue: '$769',
            orderDate: '01/05/2023',
            status: 'Completed',
        },
        {
            customerName: 'Hailey Adams',
            company: 'FlowRush',
            orderValue: '$922',
            orderDate: '10/06/2023',
            status: 'Completed',
        },
        {
            customerName: 'Elizabeth Lee',
            company: 'AvatarSystems',
            orderValue: '$359',
            orderDate: '10/07/2023',
            status: 'New',
        },
        {
            customerName: 'Carlos Garcia',
            company: 'SmoozeShift',
            orderValue: '$747',
            orderDate: '24/07/2023',
            status: 'New',
        },
        {
            customerName: 'Elizabeth Bailey',
            company: 'Prime Time Telecom',
            orderValue: '$564',
            orderDate: '08/08/2023',
            status: 'In-progress',
        },
        {
            customerName: 'Ryan Brown',
            company: 'OmniTech Corporation',
            orderValue: '$541',
            orderDate: '31/08/2023',
            status: 'In-progress',
        },
        {
            customerName: 'Ryan Young',
            company: 'DataStream Inc.',
            orderValue: '$769',
            orderDate: '01/05/2023',
            status: 'Completed',
        },
        {
            customerName: 'Hailey Adams',
            company: 'FlowRush',
            orderValue: '$922',
            orderDate: '10/06/2023',
            status: 'Completed',
        },
    ];

    const [page, setPage] = useState(0); // bắt đầu từ trang đầu tiên
    const [rowsPerPage, setRowsPerPage] = useState(6); // 6 dòng 1 trang

    const pageCount = Math.ceil(data.length / rowsPerPage); // tính tổng số trang
    const currentData = data.slice(
        page * rowsPerPage, //phần tử bắt đầu, vd 1*6 là phần tử thứ 6
        (page + 1) * rowsPerPage //phần tử kết thúc, vd (1+1)*6 là phần tử thứ 12 không bao gồm phần tử thứ 12
    ); // phân trang

    return (
        <DataTable
            columns={columns}
            data={currentData}
            selectableRows
            pagination
            paginationComponent={() => (
                <CustomPagination
                    rowCount={data.length}
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
