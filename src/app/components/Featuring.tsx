import Image from "next/image";
import Link from "next/link";


export default function Featuring() {
    return (
        <div className="mt-10 flex justify-center text-nowrap bg-gray-100 ">
            <div className="w-4/5 mb-20">

                <div className="flex justify-between my-10">
                    <h1 className="text-2xl font-serif">Featured New Cars</h1>
                    <p className="text-blue-400 font-serif">View All New Cars</p>
                </div>

                <ul className="flex justify-start font-serif gap-16 mt-6">
                    <li className="cursor-pointer text-xl hover:border-blue-400 border-b-4 hover:font-bold">Popular</li>
                    <li className="cursor-pointer text-xl hover:border-blue-400 border-b-4 hover:font-bold">Upcoming</li>
                    <li className="cursor-pointer text-xl hover:border-blue-400 border-b-4 hover:font-bold">Newly Launched</li>
                </ul>
                <hr className="border-gray-300 border-t w-full items-center" />

                <div className="flex justify-start font-serif gap-24 mt-10 ">
                    <Link href={"/Cars/Toyota-Corolla"}>
                        <div className=" bg-white rounded-md p-4 hover:cursor-pointer">
                            <Image
                                src="/Toyota-Corolla.jpg"
                                alt="Toyota Corolla"
                                width={200}
                                height={200}
                            ></Image>
                            <div className="text-center">

                                <h1 className="text-indigo-800 font-bold">Corolla Grande</h1>
                                <p className="text-green-500">PKR 65.50-75.50 lacs</p>
                                <p>1050 Reviews</p>
                            </div>

                        </div>
                    </Link>
                    <Link href={"/Cars/Suzuki-Alto"}>

                        <div className="bg-white rounded-md p-4 hover:cursor-pointer">
                            <Image
                                src="/Suzuki-Alto.jpg"
                                alt="Suzuki Alto"
                                width={200}
                                height={200}
                            ></Image>

                            <div className="text-center">
                                <h1 className="text-indigo-800 font-bold">Suzuki Alto VXR</h1>
                                <p className="text-green-500">PKR 21.50-28.50 lacs</p>
                                <p>225 Reviews</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/Cars/Honda-Civic"}>

                        <div className=" bg-white rounded-md p-4 hover:cursor-pointer">
                            <Image
                                src="/Honda-Civic.jpg"
                                alt="Honda Civic"
                                width={200}
                                height={200}
                            ></Image>
                            <div className="text-center">

                                <h1 className="text-indigo-800 font-bold">Honda Civic Turbo</h1>
                                <p className="text-green-500">PKR 65.50-75.50 lacs</p>
                                <p>2505 Reviews</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/Cars/Hyundai-Tucson"}>
                        <div className=" bg-white rounded-md p-4 hover:cursor-pointer">
                            <Image
                                src="/Hyundai-Tucson.jpg"
                                alt="Hyundai-Tucson"
                                width={200}
                                height={200}
                            ></Image>
                            <div className="text-center">

                                <h1 className="text-indigo-800 font-bold">Hyundai Tucson</h1>
                                <p className="text-green-500">PKR 86.50-99.50 lacs</p>
                                <p>2250 Reviews</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
