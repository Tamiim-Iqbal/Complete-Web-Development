import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen]= useState(false)

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];
      
    return (
        <nav className="text-black bg-yellow-200">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true? <IoMdClose />: <RiMenu3Line/>
                }
            </div>
            <ul className={`md:flex duration-1000 gap-10 absolute md:static ${open? 'top-5' : `-top-52`} bg-yellow-200 px-4 py-1 ml-6 justify-center rounded`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default Navbar;