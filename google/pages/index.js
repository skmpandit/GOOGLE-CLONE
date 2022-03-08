import Head from 'next/head'
import Image from "next/image";
import profilePic from "../public/img.jpg";
import {MicrophoneIcon} from "@heroicons/react/solid";
import { SearchIcon } from '@heroicons/react/outline';
import AppsIcon from '@material-ui/icons/Apps';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RoomIcon from '@material-ui/icons/Room';
import ViewListIcon from '@material-ui/icons/ViewList';
import Footer from '../components/Footer';
import { useRef } from 'react';
import {useRouter} from "next/router"


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e)=>{
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`)
  };
  return (
    <div className="w-full">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div>
        {/* Header */}
        <header className="flex pt-0 pl-2 items-center justify-between pr-2 border-b-[1px] border-gray-300">
          {/* Left */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 rounded-full hover:bg-gray-200 p-1 cursor-pointer">
              <AppsIcon className="text-green-300" fontSize="small" />
              <p className="text-sm">Apps</p>
            </div>
            <div className="flex items-center space-x-1 rounded-full hover:bg-gray-200 p-1 cursor-pointer">
              <MailOutlineIcon className="text-blue-700" fontSize="small" />
              <p className="text-sm">Gmail</p>
            </div>
            <div className="flex items-center space-x-1 rounded-full hover:bg-gray-200 p-1 cursor-pointer" >
              <YouTubeIcon fontSize="small" className="text-red-600" />
              <p className="text-sm">YouTube</p>
            </div>
            <div className="flex items-center space-x-1 rounded-full hover:bg-gray-200 p-1 cursor-pointer">
              <RoomIcon className="text-green-700" fontSize="small" />
              <p className="text-sm">Maps</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer space-x-1 hover:bg-gray-200 rounded-full p-1">
              <ViewListIcon className="text-gray-400" />
              <p className="text-[12px]">Reading list</p>
            </div>
          </div>
          
        </header>
        {/* Right */}
          <div className="flex space-x-4 items-center pt-4 pl-[1150px] mb-20">
            <p className="text-sm cursor-pointer hover:underline">Gmail</p>
            <p className="text-sm cursor-pointer hover:underline">Images</p>
            <div className="flex hover:bg-gray-200 rounded-full p-2">
              <AppsIcon className="text-gray-500" />
            </div>
            <div className="flex items-center cursor-pointer transition duration-150 transform hover:scale-110">
              <Image src={profilePic} loading="lazy" alt="picture pic" className="rounded-full" />
            </div>

          </div>

        {/* Body */}
        <form className="flex flex-col items-center h-full mt-30 flex-grow mb-40">
          <Image src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" height={100} width={300} />
          <div className="flex items-center w-full hover:shadow-lg focus-within:shadow-lg max-w-lg rounded-full border-gray-300 px-5 py-3 border-[1px] sm:max-w-xl lg:max-w-2xl " >
            <SearchIcon className="h-5 pr-2 text-gray-400" />
            <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
            <MicrophoneIcon className="h-5 " />
          </div>
          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button onClick={search} className="bg-gray-50 py-2 px-5 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 ">Google Search</button>
            <button onClick={search} className="bg-gray-50 py-2 px-5 rounded-md ring-gray-200 text-sm text-gray-800 hover:ring-1 focus:outline-none active:ring-gray-300 ">I'm Feeling Lucky</button>
          </div>
        </form>
        </div>
        <Footer/>
    </div>
  )
}
