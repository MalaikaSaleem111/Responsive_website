
export default function Navber(){
    return(
        <nav className="flex justify-between items-center px-4 bg-black text-white w-full h-12">
            <div className="text-xl font-bold text-slate-400">
                ReadScape
            </div>
            <ul className="flex items-center gap-8">
                <li>Home</li>
                <li>Cart</li>
                <li>Signin</li>
               

            </ul>
        </nav>
    )
}