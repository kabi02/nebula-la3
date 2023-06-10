import Button from "./components/Button";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    return (
        <nav className="grid-cols-3 w-full py-4 px-32 font-open-sans font-bold">
            <div className="flex gap-3 items-center">
                <div className="order-1 w-[12rem]"><img src="./assets/logo.png" className="w-[40%]"></img></div>
                <div className="flex order-2 gap-14 grow items-center justify-center">
                    <a href="#features"><ul>Features</ul></a>
                    <a href="#pricing"><ul>Pricing</ul></a>
                    <a href="#learnmore"><ul>Learn More</ul></a>
                </div>
                <div className="flex items-center gap-7 order-3 w-[12rem]">
                    <a href=""><ul>About</ul></a>
                    <Button /> 
                </div>
                <div className="hidden order-2">
                    <RxHamburgerMenu size={28}/>
                </div>
            </div>
        </nav>
    );
}