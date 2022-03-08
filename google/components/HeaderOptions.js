import HeaderOption from "./HeaderOption";
import { SearchIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/outline";
import { PhotographIcon } from "@heroicons/react/outline";
import { MapIcon } from "@heroicons/react/outline";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { NewspaperIcon } from "@heroicons/react/outline";
function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-32 lg:pl-52 pt-3 border-b">
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images"/>
                <HeaderOption Icon={PlayIcon} title="Videos"/>
                <HeaderOption Icon={NewspaperIcon} title="News"/>
                <HeaderOption Icon={MapIcon} title="Maps"/>
                <HeaderOption Icon={DotsVerticalIcon} title="More"/>
            </div>
            <div className="flex items-center space-x-4">
                <p className="hover:underline">Setting</p>
                <p className="hover:underline">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
