export default function LearnMore (){

    return (
            <div id="learnmore" className="flex items-center justify-center py-4 px-[15rem] mb-10 max-sm:px-6 max-md:px-14 max-lg:px-36 max-xl:px-20 max-2xl:px-32">
                <div className="flex items-center justify-center max-lg:flex-wrap">
                    <div className="w-1/2 mr-14 relative max-lg:w-full max-lg:mr-0">
                        <div className="h-0 pb-[20rem]">
                            <iframe 
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/ij4IeOpSWRY"
                            title="NebulaBook Pro X1K Plus Promotion"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypt-media; gyroscope;
                            picture-in-picture; web-share"
                            allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="w-1/2 p-4 flex flex-col justify-center items-center max-lg:w-full">

                        <h2 className="font-open-sans text-[26px] text-2xl font-bold mb-4">Learn More</h2>
                        <p className="font-fira-sans text-justify">At Nebula, we are dedicated to creating laptops that are built to last. We employ advanced engineering techniques 
                            and use high-quality materials to ensure the durability and reliability of our laptops. 
                            From reinforced metal frames to rugged carbon fiber finishes, our laptops are designed to withstand the rigors of everyday 
                            use and provide long-lasting performance.</p><br />
                        
                        <p className="font-fira-sans text-justify"> Additionally, our laptops undergo extensive testing to ensure they can withstand various environmental conditions, 
                            such as temperature changes, humidity, and vibrations. We strive to deliver laptops 
                            that can handle the demands of your busy lifestyle without compromising on performance or durability.</p>

                    </div>
                </div>
            </div>

    );

}