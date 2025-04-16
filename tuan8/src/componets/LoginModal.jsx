import React from 'react';
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
} from '@material-tailwind/react';

function LoginModal({ open, onClose }) {
    return (
        <Dialog
            size="lg"
            open={open}
            handler={onClose}
            className="bg-transparent shadow-none">
            <Card className="mx-auto w-full max-w-[48rem] relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="bg-white absolute top-2 right-2 text-pink-500 hover:text-pink-700 border-none">
                    &times;
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Left Side: Image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://res.cloudinary.com/dqlzcgear/image/upload/v1744775776/f45d4e67-0304-43c7-9810-49d224f885ea.png" // Replace with your image URL
                            alt="Login Illustration"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Right Side: Login Form */}
                    <div className="w-full md:w-1/2">
                        <CardBody className="flex flex-col gap-4">
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="font-bold">
                                Login
                            </Typography>
                            <Typography
                                className="mb-3 font-normal"
                                variant="paragraph"
                                color="gray">
                                Enter your email and password to Sign In.
                            </Typography>

                            <input
                                type="email"
                                className="w-full p-3 border border-gray-300 bg-gray-100 placeholder-gray-500 focus:bg-gray-200 focus:outline-none rounded-lg"
                                placeholder="Enter your email"
                            />
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                className="bg-pink-500 hover:bg-pink-600 text-white "
                                onClick={onClose}
                                fullWidth>
                                Continue
                            </Button>
                            <div className="flex items-center justify-center my-4">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="mx-2 text-xs text-gray-400">
                                    OR
                                </span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>
                            <p className="text-xs text-gray-500 text-center mb-4">
                                By continuing, you agree to the updated{' '}
                                <a href="#" className="underline">
                                    Terms of Sale
                                </a>
                                ,{' '}
                                <a href="#" className="underline">
                                    Terms of Service
                                </a>
                                , and{' '}
                                <a href="#" className="underline">
                                    Privacy Policy
                                </a>
                                .
                            </p>
                            <div className="flex flex-col gap-2 mt-4">
                                <Button
                                    className="font-extralight bg-gray-200 hover:bg-pink-300 text-red-600"
                                    fullWidth>
                                    Continue with Google
                                </Button>
                                <Button
                                    className="font-extralight bg-gray-200 hover:bg-pink-300 text-blue-600"
                                    fullWidth>
                                    Continue with Facebook
                                </Button>
                                <Button
                                    className="font-extralight bg-gray-200 hover:bg-pink-300 text-black"
                                    fullWidth>
                                    Continue with Apple
                                </Button>
                            </div>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </Dialog>
    );
}

export default LoginModal;
