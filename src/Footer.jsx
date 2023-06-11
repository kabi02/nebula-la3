import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="flex flex-col bg-[#292929] font-open-sans text-white justify-center items-center py-10">
            <div className="text-center w-[50%] max-lg:w-[80%]">
                <h3 className="font-semibold">Nebula</h3>
                <p className="font-light text-center py-3">Thank you to our loyal customers for placing your trust in Nebula. Your support has been instrumental in our journey to deliver exceptional and long-lasting laptops. Connect with us on social media for the latest updates, promotions, and tech news.</p>
                <p className="font-light">Follow us on</p>
                <div className="flex gap-5 items-center justify-center pt-5">
                   <FaFacebookSquare size={28}/> 
                   <FaInstagram size={28}/>
                   <FaTwitter size={28}/>
                </div>
            </div>
        </footer>
    );
}
