import Image from "next/image";


export default function Navbar() {
    return (
        <div>

        <div className="flex bg-black justify-between px-32  items-center font-serif text-gray-500">
           <div className="text">
                <p className="hover:text-white">Download App via SMS</p>
           </div>
                <ul className="flex  justify-evenly  font-serif w-56">
                    <li className="hover:text-red-700">اردو</li>
                    <li className="hover:text-white">SignUp</li>
                    <li className="hover:text-white">SignIn</li>

                </ul>
        </div>
        <hr className="border-gray-600 border-t w-full items-center font-serif" />
        <div className="bg-black w-full h-14 px-10 py-2 flex justify-evenly items-center">
        <div >
                <Image
                    src="/Pak-Wheels-Logo.png"
                    alt="pakwheel logo"
                    width={160}
                    height={160}
                ></Image>
            </div>
            <ul className="text-gray-500 flex justify-evenly font-serif w-3/5">
                <li className="hover:text-white">Used Cars</li>
                <li className="hover:text-white">New Cars</li>
                <li className="hover:text-white">Bikes</li>
                <li className="hover:text-white">Auto Store</li>
                <li className="hover:text-white">Videos</li>
                <li className="hover:text-white">Forums</li>
                <li className="hover:text-white">Blogs</li>
                <li className="hover:text-white">More</li>
            </ul>
            <div>
                <button className="bg-red-800 hover:bg-red-600 rounded-md font-serif-bold text-white x-1 p-2">Post an Add</button>
            </div>
        </div>

    </div>

    )
}