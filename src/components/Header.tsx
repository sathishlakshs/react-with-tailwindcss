import { BellIcon, ChatIcon, UserCircleIcon } from "@heroicons/react/outline";
import { MenuIcon } from "@heroicons/react/solid";
import { FC } from "react";

type HeaderProps = {
    setIsOpen: (isOpen: boolean) => void;
}

const Header: FC <HeaderProps> = (props) => {
    const { setIsOpen } = props;
  return (
    <header className="divide-y divide-blue-200 p-4">
      <div className="flex w-full items=-center">
        <div className="w-4/5 flex">
          <button
            className="hover:bg-blue-600 hover:text-white text-gray-800 font-bold px-2 rounded inline-flex items-center"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <div className="flex ml-6">
            <div className="xl:w-96 2xl:w-96">
              <div className="input-group relative flex items-stretch w-full">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon3"
                />
                <button
                  className="btn inline-block px-6 py-2 border-2 border-blue-600 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  type="button"
                  id="button-addon3"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div  className="w-1/5 flex flex-row-reverse">
          <UserCircleIcon className={`h-8 w-8 ml-4 text-gray-400 hover:text-blue-800`}></UserCircleIcon>
          <BellIcon className={`h-8 w-8 ml-4 text-gray-400 hover:text-blue-800`}></BellIcon>
          <ChatIcon className={`h-8 w-8 ml-4 text-gray-400 hover:text-blue-800`}></ChatIcon>
        </div>
      </div>
    </header>
  );
}

export default Header;