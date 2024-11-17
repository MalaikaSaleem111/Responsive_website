import Image from "next/image"
export default function HeroSection(){
    return(
        // <div className="w-full h-32 bg-slate-300 text-xl text-center pt-10 text-black font-extrabold">
        //     <h1>End of Season Sale</h1>
        // </div>
        <div className="flex flex-col md:flex-row items-center bg-slate-100  ">
            <p className="w-full md:w-1/2 md:block hidden text-center md:text-left text-5xl px-10 font-extrabold">Pick your <br/>perfect book!</p>
            <Image src="/book.jpg" alt="poster" height={500} width={500} className="w-full md:w-1/2 rounded-md"/>
        </div>
    )
}