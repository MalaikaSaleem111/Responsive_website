import Image from "next/image"
export default function HeroSection(){
    return(
    
        <div className="flex flex-col md:flex-row items-center bg-slate-100  ">
           <div>
            <p className="w-1/2 md:block hidden text-center md:text-left text-5xl px-14 font-extrabold">Pick your <br/>perfect book!</p>
            <button className="bg-slate-400 w-28 text-center text-xl font-bold rounded-lg mx-14 my-4 px-4 h-14">Explore</button>
            </div>
            
            <Image src="/book.jpg" alt="poster" height={500} width={500} className="w-full md:w-1/2 rounded-md"/>
        </div>
    )
}
