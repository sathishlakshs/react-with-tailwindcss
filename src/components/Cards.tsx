
import React, { FC } from 'react';
import { TrendingUpIcon, EyeIcon, ShoppingCartIcon, UsersIcon, ShoppingBagIcon } from '@heroicons/react/solid';
import { TrendingDownIcon} from '@heroicons/react/outline';
import { ICON_NAMES } from '../constants/iconName';
import CardDetailsInfo from '../models/CardDetailsInfo';

type CardsProps = {
  data: CardDetailsInfo;
};

const Cards: FC<CardsProps> = (props) => {
    const { data } = props;
    const [hoverId, setHoverId] = React.useState<number>(0);

    const selectIcons = (name: string, currentHoverCardId: number) => {
      switch (name) {
        case ICON_NAMES[0].name:
          return <div className="flex justify-between items-center bg-blue-200 p-2">
              <EyeIcon className={`h-5 w-5 ${hoverId === currentHoverCardId? 'text-white': 'text-blue-500' }`} />
            </div>;
        case ICON_NAMES[1].name:
          return <div className="flex justify-between items-center bg-green-200 p-2"><ShoppingBagIcon className={`h-5 w-5 ${hoverId === currentHoverCardId? 'text-white': 'text-green-500' }`} /></div>;
        case ICON_NAMES[2].name:
          return (
            <div className="flex justify-between items-center bg-blue-200 p-2">
              <UsersIcon
                className={`h-5 w-5 ${
                  hoverId === currentHoverCardId
                    ? "text-white"
                    : "text-blue-500"
                }`}
              />
            </div>
          );
        case ICON_NAMES[3].name:
          return (
            <div className="flex justify-between items-center bg-green-200 p-2">
              <ShoppingCartIcon
                className={`h-5 w-5 ${
                  hoverId === currentHoverCardId
                    ? "text-white"
                    : "text-emerald-500"
                }`}
              />
            </div>
          );
        case ICON_NAMES[4].name:
          return (
            <div className="flex justify-between items-center p-2">
              <TrendingUpIcon
                className={`h-8 w-8 ${
                  hoverId === currentHoverCardId
                    ? "text-white"
                    : "text-green-500"
                }`}
              />
            </div>
          );
        case ICON_NAMES[5].name:
          return (
            <div className="flex justify-between items-center p-2">
              <TrendingDownIcon
                className={`h-8 w-8 ${
                  hoverId === currentHoverCardId ? "text-white" : "text-red-500"
                }`}
              />
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <ul className='flex flex-wrap justify-between items-center'>
        {data.map((c) => (
          <li key={c.id} className="space-x-0.5 bg-white mt-2">
            <div className="max-w-sm lg:w-80 rounded overflow-hidden shadow-lg text-gray-500 hover:bg-blue-500 hover: text-white" onMouseEnter={()=>setHoverId(c.id)} onMouseLeave={()=>setHoverId(0)}>
            <div className="header-2">
              <nav className="py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">
                  { selectIcons(c.profileIcon, c.id) }
                  <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                    <a href="#" className="p-2 lg:px-4 md:mx-2">{ selectIcons(c.rightIcon, c.id) }</a>
                  </div>
                </div>
              </nav>
              </div>
              <div className="px-6 py-4">
                <p className={`text-base ${hoverId === c.id ? 'text-white': 'text-gray-700'}`}>
                  {c.totalLabel}
                </p>
                <div className={`font-bold text-xl mb-2 ${hoverId === c.id && 'text-white'}`}>{c.total}</div>
              </div>
              <hr/>
              <div className={`${hoverId === c.id && 'text-white'} px-6 pt-4 pb-2`}>
              { c.isFooterClickable?<a href="#" className={`${hoverId === c.id ? 'text-white': 'text-blue-500'} p-2 lg:px-4 md:mx-2`}>{c.footerLabel}</a>:c.footerLabel }
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  };

  export default Cards;