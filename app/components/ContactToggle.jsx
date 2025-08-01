'use client';

import { useEffect, useState } from 'react';
import { PhoneIcon, ChatBubbleLeftEllipsisIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export const ContactToggle = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice(window.matchMedia('(hover: none)').matches);
    }
  }, []);

  const toggleItem = (item) => {
    if (!isTouchDevice) return;
    setExpandedItem((prev) => (prev === item ? null : item));
  };

  const isExpanded = (item) =>
    !isTouchDevice || expandedItem === item;

  return (
    <div className="absolute bottom-12 right-0 bg-white rounded-l-lg shadow-md overflow-hidden group">
      <div
        className="flex items-center w-[3.5rem] group-hover:w-[10rem] transition-all duration-300 cursor-pointer px-4 py-3 hover:bg-gray-100"
        onClick={() => toggleItem('call')}
      >
        <PhoneIcon className="text-red shrink-0" width={20} />
        <div
          className={`
            flex items-center justify-between ml-2 overflow-hidden transition-all duration-300
            ${isExpanded('call') ? 'w-full opacity-100' : 'w-0 opacity-0'}
          `}
        >
          <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
            Call Us
          </span>
          <ChevronRightIcon
            className="text-gray-400 shrink-0 ml-2"
            width={20}
          />
        </div>
      </div>

      <div
        className="flex items-center w-[3.5rem] group-hover:w-[10rem] transition-all duration-300 cursor-pointer px-4 py-3 hover:bg-gray-100"
        onClick={() => toggleItem('whatsapp')}
      >
        <ChatBubbleLeftEllipsisIcon className="text-green shrink-0" width={20} />
        <div
          className={`
            flex items-center justify-between ml-2 overflow-hidden transition-all duration-300
            ${isExpanded('whatsapp') ? 'w-full opacity-100' : 'w-0 opacity-0'}
          `}
        >
          <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
            WhatsApp
          </span>
          <ChevronRightIcon
            className="text-gray-400 shrink-0 ml-2"
            width={20}
          />
        </div>
      </div>
    </div>
  );
};
