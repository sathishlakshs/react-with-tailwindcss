import { CogIcon, DocumentTextIcon, ExclamationCircleIcon, LogoutIcon, ShoppingCartIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FC, useState } from 'react';

type SideBarProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const SideBar: FC<SideBarProps> = ({setIsOpen, isOpen}) => {

  const [hoverId, setHoverId] = useState<number>();
  
    return (
      <div className="fixed h-screen bg-white">
        <div className='flex'>
        <div className='w-20' onMouseEnter={()=>setIsOpen(true)} onMouseLeave={() =>setIsOpen(false)}>
        <div className="flex justify-center mt-10">
          <ViewGridIcon
            className={`h-8 w-8 text-center text-gray-400 ${hoverId === 1 && 'text-blue-800' }`}
            onMouseEnter={()=>setHoverId(1)} onMouseLeave={()=>setHoverId(0)}
          />
        </div>
        <div className="flex justify-center mt-10">
          <ShoppingCartIcon
            className={`flex justify-center h-8 w-8 text-center text-gray-400  ${hoverId === 2 && 'text-blue-800' }`}
            onMouseEnter={()=>setHoverId(2)} onMouseLeave={()=>setHoverId(0)}
          />
        </div>
        <div className="flex justify-center mt-10">
          <DocumentTextIcon
            className={`flex justify-center h-8 w-8 text-center text-gray-400  ${hoverId === 3 && 'text-blue-800' }`}
            onMouseEnter={()=>setHoverId(3)} onMouseLeave={()=>setHoverId(0)}
          />
        </div>
        <div className="flex justify-center mt-10">
          <CogIcon
            className={`flex justify-center h-8 w-8 text-center text-gray-400  ${hoverId === 4 && 'text-blue-800' }`}
            onMouseEnter={()=>setHoverId(4)} onMouseLeave={()=>setHoverId(0)}
          />
        </div>
            <div className="flex justify-center mt-60">
              <ExclamationCircleIcon
                className={`flex justify-center h-8 w-8 text-center text-gray-400  ${hoverId === 5 && 'text-blue-800' }`}
                onMouseEnter={()=>setHoverId(5)} onMouseLeave={()=>setHoverId(0)}
              />
            </div>
            <div className="flex justify-center mt-10">
              <LogoutIcon
                className={`flex justify-center h-8 w-8 text-center text-gray-400  ${hoverId === 6 && 'text-blue-800' }`}
                onMouseEnter={()=>setHoverId(6)} onMouseLeave={()=>setHoverId(0)}
              />
            </div>
            </div>
              <div className={(isOpen
                ? " transition-opacity opacity-100 duration-500 translate-x-0 w-48 "
                : " transition-all delay-500 opacity-0 -translate-x-full w-0 ")} onMouseEnter={()=>setIsOpen(true)} onMouseLeave={() =>setIsOpen(false)}>
                  <div className="flex mt-12">
                  <span className={`cursor-pointer h-8 text-gray-400  ${hoverId === 1 && 'text-blue-800' }`} onMouseEnter={()=>setHoverId(1)} onMouseLeave={()=>setHoverId(1)}>Dashboard</span>
        </div>
        <div className="flex mt-10">
        <span className={`cursor-pointer h-8 text-gray-400  ${hoverId === 2 && 'text-blue-800' }`} onMouseEnter={()=>setHoverId(2)} onMouseLeave={()=>setHoverId(0)}>Cart</span>
        </div>
        <div className="flex mt-10">
        <span className={`cursor-pointer h-8 text-gray-400  ${hoverId === 3 && 'text-blue-800' }`} onMouseEnter={()=>setHoverId(3)} onMouseLeave={()=>setHoverId(0)}>Document</span>
        </div>
        <div className="flex mt-10">
        <span className={`cursor-pointer h-8 text-gray-400  ${hoverId === 4 && 'text-blue-800' }`} onMouseEnter={()=>setHoverId(4)} onMouseLeave={()=>setHoverId(0)}>Settings</span>
        </div>
        <div className="flex mt-60">
        <span className={`cursor-pointer h-8 text-gray-400  ${hoverId === 5 && 'text-blue-800' }`} onMouseEnter={()=>setHoverId(5)} onMouseLeave={()=>setHoverId(0)}>Information</span>
            </div>
            <div className="flex mt-10">
              <span className={`cursor-pointer h-8 text-gray-400  ${hoverId === 6 && 'text-blue-800' }`} onMouseEnter={()=>setHoverId(6)} onMouseLeave={()=>setHoverId(0)}>Sign Out</span>
            </div>
                </div>
            </div>
          </div>
    );
}

export default SideBar;
