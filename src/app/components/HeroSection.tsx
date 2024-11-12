
export default function HeroSection(){
    return(
        <>
        <h1 className="text-center text-3xl font-serif m-10"> Sell your Car on PakWheels and Get the Best Price</h1>
        <div className="flex justify-evenly items-center">

        <div>
        <h2 className="text-xl m-2 justify-left font-serif text-left text-indigo-900 font-semi">Post your Ad on PakWheels</h2>
        <ul className="m-7 font-sans text-left">
            <li>Post your Ad for Free in 3 Easy Steps</li>
            <li>Get Genuine offers from Verified Buyers</li>
            <li>Sell your car Fast at the Best Price</li>
        </ul>
        <button className="bg-red-800 hover:bg-red-600 rounded-md font-serif text-white p-3 w-40">Post an Add</button>
        </div>
        <div><p className="text-xl text-indigo-700">OR</p></div>
        <div>   
        <h2 className="text-xl m-2 text-indigo-700 font-serif">Try PakWheels Sell It For Me</h2>
        <ul className="m-6 font-sans text-left">
            <li>Dedicated Sales Experts to Sell your Car</li>
            <li>We Bargain for you and share the Best Offer</li>
            <li>We ensure Safe & Secure Transaction</li>
        </ul>
        <button className="bg-blue-800 hover:bg-blue-600 rounded-md font-serif text-white p-2 w-40">Register your Car</button>
        </div>
        </div>

        </>
    )
}