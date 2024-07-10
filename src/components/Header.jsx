import { LuMenu } from "react-icons/lu";


const Header = () => {
  return (
<nav className="flex gap-5 justify-between items-center">
    <div>
        Startup
    </div>
    <div className=" hidden lg:flex items-center justify-center   gap-8">
        <ul className=" lg:flex gap-5 ">
            <li><a href="/Suscribe"> Suscribe</a></li>
            <li><a href="/Features">Features</a></li>
            
        </ul>


        <button className="bg-[#482BE7] px-6 py-2 rounded-full">
            signup
        </button>

    </div>
    <div className="lg:hidden" >
    <LuMenu  size={40}/>
    </div>
</nav>  )
}

export default Header