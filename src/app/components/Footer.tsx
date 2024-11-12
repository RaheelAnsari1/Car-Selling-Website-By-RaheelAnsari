import Link from "next/link";

export default function Footer(){
    return(
        <footer className=" bg-black text-white font-serif p-4">
            <div className="container max-auto flex justify-evenly items-center">
                <div className="text-left text-gray-500">
                    <p className="hover:text-white ">© 2023-2024 PakWheels (Pvt.) Ltd - All rights reserved.</p>
                    <div className="mt-1 space-x-5 text-gray-700 text-sm">
                        <a className="hover:text-white" href="/privacy-policy">Privacy-Policy</a>
                        <a className="hover:text-white" href="/terms-of-Services">Term of Service</a>
                        <a className="hover:text-white" href="/contact-us">Contact Us</a>
                        <h1 className="hover:text-white">Developed by Raheel Ansari</h1>
                        <p className="hover:text-white">raheelansaristi@gmail.com</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}
