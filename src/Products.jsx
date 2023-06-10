import ProdInfo from "./sections/ProdInfo";
import { useRef } from "react";

export default function Products() {
    const divRef = useRef(null);
    return (
        <div id="pricing" ref={divRef} className="flex items-center justify-center py-10 gap-16">
            <ProdInfo name="NebulaBook Pro X1K Basic"
            price="Php 32,000"
            storage="256GB SSD"
            ram="8GB"
            battLife="Up to 8 hours"
            screen="14-inch Full HD IPS Display"
            gpu="Intel Integrated UHD Graphics" /> 

            <ProdInfo name="NebulaBook Pro X1K Plus"
            price="Php 52,000"
            storage="512GB SSD"
            ram="16GB"
            battLife="Up to 10 hours"
            screen="15.6-inch Full HD IPS Display"
            gpu="NVIDIA GeForce MX350 with 2GB VRAM" /> 

            <ProdInfo name="NebulaBook Pro X1K Premium"
            price="Php 67,000"
            storage="1TB SSD"
            ram="16GB"
            battLife="Up to 12 hours"
            screen="13.3-inch Quad HD+ Touchscreen Display"
            gpu="NVIDIA GeForce GTX1650 with 4GB VRAM" /> 
        </div>
    );
}