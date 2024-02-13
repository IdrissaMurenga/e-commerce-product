import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import profile from "../images/image-avatar.png";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";


const Navbar = ({ toggleModal, openMenu, closeMenu, openList, handleClick}) => {
    
    return (
        <header className="sm:max-w-[1100px] sm:mx-auto sm:border-b-2 sm:pb-5">
            <nav className="flex justify-between items-center p-4">
                <section className="flex gap-10">
                    <div className="flex gap-2">
                        <div>
                            <img className={`sm:hidden ${openList ? "hidden" : ""} cursor-pointer pt-1`} onClick={openMenu} src={menu} alt="open-menu-icon" />
                        </div>
                        <div>
                            <img className="sm:pt-1" src={logo} alt="logo" />
                        </div>
                    </div>
                    <ul className={`${openList ? "block" : "hidden"} bg-white h-screen fixed z-40 bottom-0 left-0 p-4 w-60 sm:flex gap-4 sm:bg-transparent sm:static sm:w-0 sm:p-0 sm:h-0 `}>
                        <img onClick={closeMenu} className="pb-10 sm:hidden  cursor-pointer" src={close} alt="close-menu-icon" />
                        <li className="font-bold sm:font-light py-2 sm:p-0 cursor-pointer">Collection</li>
                        <li className="font-bold sm:font-light py-2 sm:p-0 ">Men</li>
                        <li className="font-bold sm:font-light py-2 sm:p-0 ">Women</li>
                        <li className="font-bold sm:font-light py-2 sm:p-0 ">About</li>
                        <li className="font-bold sm:font-light py-2 sm:p-0 ">Contact</li>
                    </ul>
                </section>
                <section className="flex items-center gap-4">
                    <img className=" cursor-pointer" src={cart} onClick={() => { handleClick() }} width={27} height={24} alt="cart-icon" />
                    <img className=" cursor-pointer hover:border-2 border-orange-500 rounded-full" src={profile} width={50} height={24} alt="profile" />
                </section>
            </nav>
        </header>
    )
}

export default Navbar
