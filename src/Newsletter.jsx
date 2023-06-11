export default function Newsletter() {
    return (
        <div className="flex bg-[#6B7280] w-full items-center justify-center py-10 gap-12 max-md:flex-col">
           <div className="order-1 w-[30%] flex justify-end"><img src="./assets/email.png"></img></div> 
            <div className="flex flex-col justify-center gap-2 order-2 font-open-sans text-white w-[60%] max-sm:w-[80%]">
                <h3 className="font-bold text-2xl">Subscribe to Our Newsletter</h3> 
                <small className="font-light">Stay up-to-date with the latest news, product launches, and exclusive offers by subscribing to our newsletter.</small>
                <form action="#" className="flex w-[70%] max-md:w-full max-md:flex-col">
                    <input className="font-open-sans text-gray-900 font-light w-[65%] rounded-xl px-5 mr-5 bg-gray-100 max-[924px]:w-max max-md:w-full max-md:h-10 max-md:mb-5" type="text" name="email" id="email" placeholder="Enter your Email..." required />
                    <input type="submit" className="py-3 px-7 cursor-pointer bg-black text-white font-bold rounded-full hover:bg-gray-800" value="Subscribe Now"/>
                </form>
           </div>
        </div>
    );
}