import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import profilePic from "../public/img.jpg";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search=(e)=>{
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`);
    }
    return (
        <header className="sticky top-0 bg-white">
             <div className="flex pt-6 items-center ">
                 <div className="flex items-center pl-6">
                 <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height={40} width={120} className="cursor-pointer" onClick={()=>router.push("/")} />
                 </div>
                <div className="flex flex-grow max-w-3xl items-center">
                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 border rounded-full items-center shadow-lg max-w-3xl ">
                    <input className="flex-grow w-full focus:outline-none" type="text" ref={searchInputRef} />
                    <XIcon className="h-6 pr-2 cursor-pointer text-gray-400 transition duration-100 transform hover:scale-125" onClick={()=>(useSearchRef.current.value="")} />
                    <MicrophoneIcon className="h-5 text-blue-500 border-l-2 pl-2 border-gray-300 " />
                    <SearchIcon className=" h-5 text-blue-500 pl-2 hidden sm:inline-flex"/>
                    <button className="hidden" type="submit" onClick={search}>Search</button>
                </form>
                </div>
                <div className=" flex items-center pl-60">
                    <Image src={profilePic} loading="lazy" alt="picture pic" className="rounded-full" />
                </div>
             </div>
             <HeaderOptions/>
        </header>
    )
}

export default Header
