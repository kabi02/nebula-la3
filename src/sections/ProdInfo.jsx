import Button from "../components/Button";

export default function ProdInfo({name, price, storage, ram, battLife, screen, gpu}) {
    return (
        <div className="flex font-open-sans flex-col bg-[#d7d9dd] rounded-2xl items-center justify-center h-[400px] w-[340px] text-center px-10 py-3">
            <h1 className='font-bold text-[26px]'>{name}</h1>
            <p>Price: <span className="font-bold">{price}</span></p>
            <div className="flex flex-col text-start pl-7 py-5">
                <ul className="font-fira-sans list-disc">
                    <li>Storage: {storage}</li>
                    <li>RAM: {ram}</li>
                    <li>Battery Life: {battLife}</li>
                    <li>Screen: {screen}</li>
                    <li>Graphics Card: {gpu}</li>
                </ul>
            </div>
            <Button />
        </div>
    );
}