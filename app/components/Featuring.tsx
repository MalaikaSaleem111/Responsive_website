import Image from "next/image"
export default function Featuring(){
    return(
        <div>
          <h2 className="text-2xl font-extrabold mt-6 px-5 text-center">Shop By Category</h2>
          <div className="w-full flex flex-wrap justify-evenly px-4 my-6 gap-y-6 border-2 border-gray-200 p-4">
              <div className="w-1/2 lg:w-1/4 text-center">
              <Image src="/self-help.jpg" alt="self-help" width={500} height={500} className="w-auto mx-auto" />
              <p className="text-center font-bold text-lg mb-2">Self Help</p>
              <button className="w-28 h-14 font-bold p-4  text-white bg-slate-600 rounded-full">See More</button>
              </div>

              <div className="w-1/2 lg:w-1/4 text-center">
              <Image src="/Philosophy.jpg" alt="Philosophy" width={500} height={500} className="w-auto mx-auto" />
              <p className="text-center font-bold text-lg mb-2">Philosophy</p>
              <button className="w-28 h-14 font-bold p-4 text-white bg-slate-600 rounded-full">See More</button>
              </div>
          
            
              <div className="w-1/2 lg:w-1/4 text-center">
              <Image src="/Poetry.jpg" alt="poetry" width={500} height={500} className="w-36 h-60 mx-auto" />
              <p className="text-center font-bold text-lg mb-2">Poetry</p>
              <button className="w-28 h-14 font-bold p-4 text-white bg-slate-600 rounded-full">See More</button>
              </div>

              <div className="w-1/2 lg:w-1/4 text-center">
              <Image src="/children.jpg" alt="children" width={500} height={500} className="w-36 h-60 mx-auto" />
              <p className="text-center font-bold text-lg mb-2">Children</p>
              <button className="w-28 h-14 font-bold p-4 text-white bg-slate-600 rounded-full">See More</button>
              </div>
          </div>

          <h2 className="font-extrabold text-2xl m-5 text-center">New Arrivals</h2>
          <div className="w-full flex flex-wrap justify-evenly px-4 my-6 gap-y- border-2 border-gray-200 p-4">
              <div className="w-1/2 lg:w-1/4 text-center">
              <Image src="/new1.jpg" alt="book1" width={500} height={500} className="w-36 h-60 mx-auto" />
              <p className="text-center font-semibold text-base mb-2">Surrounded by Liars <br/>By: Thomas Erikson</p>
              <p className="text-red-600">Rs 1,236.00</p>
              <button className="w-36 h-14 font-bold p-4 text-white bg-slate-700 rounded-md m-2">Add to Cart</button>
              </div>

              <div className="w-1/2 lg:w-1/4 text-center">
              <Image src="/new2.jpg" alt="book2" width={500} height={500} className="w-auto mx-auto" />
              <p className="text-center font-semibold text-base mb-2">Unlearning Silence <br/>
              By: Elaine Lin Hering</p>
              <p className="text-red-600">Rs 2,996.00</p>
              <button className="w-36 h-14 font-bold p-4 text-white bg-slate-700 rounded-md m-2">Add to Cart</button>
              </div>
          
            
              <div className="w-1/2 lg:w-1/4 text-center">
              <Image src="/new3.jpg" alt="book3" width={500} height={500} className="w-auto mx-auto" />
              <p className="text-center font-semibold text-base mb-2">7 Rules of Power<br/>
              By: Jeffrey Pfeffer</p>
              <p className="text-red-600">Rs 1,636.00</p>
              <button className="w-36 h-14 font-bold p-4 text-white bg-slate-700 rounded-md m-2">Add to Cart</button>
              </div>

              <div className="w-1/2 lg:w-1/4 text-center">
              <Image src="/new4.jpg" alt="book4" width={500} height={500} className="w-auto mx-auto" />
              <p className="text-center font-semibold text-base mb-2">Forgiving What You Can't Forget<br/>
              By: Lysa TerKeurst</p>
              <p className="text-red-600">Rs 1,476.00</p>
              <button className="w-36 h-14 font-bold p-4 text-white bg-slate-700 rounded-md m-2">Add to Cart</button>
              </div>
          </div>
        </div>
    )
}




