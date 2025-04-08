import React, { useState } from 'react';
import {
    Input,
    Option,
    Select,
    Button,
    Dialog,
    Textarea,
    IconButton,
    Typography,
    DialogBody,
    DialogHeader,
    DialogFooter,
} from '@material-tailwind/react';
import Create from '../assets/img/create.png';
import axios from 'axios';

function DialogOrder({ row, onUpdateStatus, triggerReload }) {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(row.status);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (e) => {
        setStatus(e.target.value);
    };
    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:5000/Orders/${row.id}`, {
                ...row,
                status: status,
            });
            onUpdateStatus?.(row.id, status);
            if (status === 'Completed') {
                console.log('Reload triggered!');
                triggerReload?.(); // Gọi lại useEffect ở Overview
            }
            setOpen(false);
        } catch (err) {
            console.error('Lỗi cập nhật trạng thái đơn hàng:', err);
            alert('Đã có lỗi xảy ra khi cập nhật trạng thái!');
        }
    };
    return (
        <>
            <Button onClick={handleOpen} variant="gradient">
                <img src={Create} alt="Close" className="h-4 w-4" />
            </Button>

            <Dialog
                open={open}
                handler={handleClose}
                dismiss={{ enabled: false }}
                className="p-4 max-w-[400px] w-[90%] h-[80%] m-auto border-4 rounded-xl">
                <DialogHeader className="flex">
                    <strong color="blue-gray">Order Detail</strong>

                    <Button
                        className="ml-auto text-pink-500"
                        onClick={handleClose}>
                        X
                    </Button>
                </DialogHeader>

                <DialogBody className="space-y-4 pb-6">
                    <Typography>
                        <strong>Customer:</strong> {row.customerName}
                    </Typography>
                    <Typography>
                        <strong>Company:</strong> {row.company}
                    </Typography>
                    <Typography>
                        <strong>Order Value:</strong> {row.orderValue}
                    </Typography>
                    <Typography>
                        <strong>Order Date:</strong> {row.orderDate}
                    </Typography>
                    <Typography>
                        <strong>Status:</strong>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="status"
                                value="New"
                                checked={status === 'New'}
                                onChange={handleChange}
                                disabled={row.status === 'Completed'}
                            />
                            <span>New</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="status"
                                value="In-progress"
                                checked={status === 'In-progress'}
                                onChange={handleChange}
                                disabled={row.status === 'Completed'}
                            />
                            <span>In-progress</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                name="status"
                                value="Completed"
                                checked={status === 'Completed'}
                                onChange={handleChange}
                                disabled={row.status === 'Completed'}
                            />
                            <span>Completed</span>
                        </label>
                    </Typography>
                </DialogBody>
                <DialogFooter>
                    <Button
                        className="ml-auto bg-pink-500 border rounded-sm-s p-2 "
                        onClick={handleSave}>
                        Apply
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default DialogOrder;
