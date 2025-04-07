import React from 'react';

function Status({ status }) {
    let statusClass = '';

    if (status === 'Completed') {
        statusClass = 'bg-green-100 text-green-700';
    } else if (status === 'In-progress') {
        statusClass = 'bg-yellow-100 text-yellow-700';
    } else if (status === 'New') {
        statusClass = 'bg-blue-100 text-blue-700';
    }

    return (
        <div className={`px-2 py-1 border rounded-lg ${statusClass}`}>
            {status}
        </div>
    );
}

export default Status;
