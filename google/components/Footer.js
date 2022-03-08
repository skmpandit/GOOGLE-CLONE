import { GlobeIcon } from "@heroicons/react/solid"
function Footer() {
    return (
        <footer className="bg-gray-100 text-sm text-gray-500 pt-200">
           <div className="px-8 py-3">
            <p>India</p>   
           </div> 
           <div className="flex items-center justify-between px-8 py-3">
               <div className="flex items-center space-x-4">
                   <p className="hover:underline">About</p>
                   <p className="hover:underline">Advertising</p>
                   <p className="hover:underline">Business</p>
                   <p className="hover:underline">How Search Works</p>
               </div>
               <div className="flex items-center space-x-4 ">
                   <p className="hover:underline">Privacy</p>
                   <p className="hover:underline">Terms</p>
                   <p className="hover:underline">Settings</p>
               </div>
           </div>
        </footer>
    )
}

export default Footer
