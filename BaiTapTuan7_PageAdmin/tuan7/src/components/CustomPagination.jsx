import React from 'react';

const CustomPagination = ({ rowCount, page, setPage, pageCount }) => {
    const pages = [...Array(pageCount).keys()]; //Tạo một mảng số trang từ 0 -> pageCount - 1

    return (
        <div className="flex justify-between items-center">
            <span className=" text-xs font-normal ">{rowCount} results</span>
            <div className=" space-x-4">
                {/* Prev button */}
                <button
                    onClick={() => setPage(page > 0 ? page - 1 : 0)}
                    disabled={page === 0}>
                    &lt;
                </button>

                {/* Page buttons */}
                {pages.map((pageNum) => (
                    <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`px-2 border transition-colors ${
                            pageNum === page
                                ? 'bg-pink-500 text-white rounded-full'
                                : 'bg-white text-black border-0'
                        }`}>
                        {pageNum + 1}{' '}
                        {/* vì bắt đầu từ 0 nên phải cộng 1 để tô cho đúng màu trang đang ở */}
                    </button>
                ))}

                {/* Next button */}
                <button
                    onClick={() =>
                        setPage(page < pageCount - 1 ? page + 1 : pageCount - 1)
                    }
                    disabled={page === pageCount - 1}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default CustomPagination;
