export default function Footer(){
    return(
        <footer className="flex flex-col md:flex-row md:justify-evenly bg-black h-auto p-4 text-white">
            <div className="p-4 w-full md:w-4/12">
                <h3 className="py-4 font-bold text-lg text-slate-400">COMPANY INFO</h3>
                <ul>
                    <li>Shop</li>
                    <li>About Us</li>
                    <li>Payment Policy</li>
                    <li>Request A Book</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="p-4 w-full md:w-4/12">
                <h3 className="py-4 font-bold text-lg text-slate-400">PRODUCT CATEGORIES</h3>
                <ul>
                    <li>Best Sellers</li>
                    <li>Kids Collection</li>
                    <li>Non-Fiction</li>
                    <li>Fiction</li>
                    <li>Philosophy</li>
                </ul>
            </div>
            <div className="p-4 w-full md:w-4/12">
                <h2 className="py-4 font-bold text-lg text-slate-400">CONTACT DETAILS</h2>
                <p className="text-justify">We value your feedback! Don't Hesitate to get in touch with us if you have any questions, comments, or concerns. You can reach us via email or phone. We love hearing from our customers!</p>
                <p>
                    info@abc.pk
                </p>

            </div>
        </footer>
    )
}