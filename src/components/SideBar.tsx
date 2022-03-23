import { CogIcon, DocumentTextIcon, ExclamationCircleIcon, LogoutIcon, ShoppingCartIcon, ViewGridIcon } from '@heroicons/react/solid';
import React from 'react';
import { FC } from 'react';

type SideBarProps = {}

const SideBar: FC<SideBarProps> = () => {
  const [hoverId, setHoverId] = React.useState<number>(0);
  
    return (
      <div className="fixed h-screen w-20 bg-white">
        <div className="flex justify-center mt-10">
          <ViewGridIcon
            className={`h-8 w-8 text-center text-gray-400 hover:text-blue-800`}
          />
        </div>
        <div className="flex justify-center mt-10">
          <ShoppingCartIcon
            className={`flex justify-center h-8 w-8 text-center text-gray-400 hover:text-blue-800`}
          />
        </div>
        <div className="flex justify-center mt-10">
          <DocumentTextIcon
            className={`flex justify-center h-8 w-8 text-center text-gray-400 hover:text-blue-800`}
          />
        </div>
        <div className="flex justify-center mt-10">
          <CogIcon
            className={`flex justify-center h-8 w-8 text-center text-gray-400 hover:text-blue-800`}
          />
        </div>
            <div className="flex justify-center mt-60">
              <ExclamationCircleIcon
                className={`flex justify-center h-8 w-8 text-center text-gray-400 hover:text-blue-800`}
              />
            </div>
            <div className="flex justify-center mt-10">
              <LogoutIcon
                className={`flex justify-center h-8 w-8 text-center text-gray-400 hover:text-blue-800`}
              />
            </div>
          </div>
    );
}

export default SideBar;
