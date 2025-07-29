'use client';

import { useEffect, useState } from 'react';
import { Phone, MessageCircle, ChevronRight } from 'lucide-react';

export const ContactToggle = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsTouchDevice(window.matchMedia('(hover: none)').matches);
    }
  }, []);

  const toggleItem = (item: string) => {
    if (!isTouchDevice) return;
    setExpandedItem((prev) => (prev === item ? null : item));
  };

  const isExpanded = (item: string) =>
    !isTouchDevice || expandedItem === item;

  return (
    <div className="absolute bottom-12 right-0 bg-white rounded-l-lg shadow-md overflow-hidden group">
      <div
        className="flex items-center w-[3.5rem] group-hover:w-[10rem] transition-all duration-300 cursor-pointer px-4 py-3 hover:bg-gray-100"
        onClick={() => toggleItem('call')}
      >
        <Phone className="text-red shrink-0" size={20} />
        <div
          className={`
            flex items-center justify-between ml-2 overflow-hidden transition-all duration-300
            ${isExpanded('call') ? 'w-full opacity-100' : 'w-0 opacity-0'}
          `}
        >
          <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
            Call Us
          </span>
          <ChevronRight
            className="text-gray-400 shrink-0 ml-2"
            size={20}
          />
        </div>
      </div>

      <div
        className="flex items-center w-[3.5rem] group-hover:w-[10rem] transition-all duration-300 cursor-pointer px-4 py-3 hover:bg-gray-100"
        onClick={() => toggleItem('whatsapp')}
      >
        <MessageCircle className="text-green shrink-0" size={20} />
        <div
          className={`
            flex items-center justify-between ml-2 overflow-hidden transition-all duration-300
            ${isExpanded('whatsapp') ? 'w-full opacity-100' : 'w-0 opacity-0'}
          `}
        >
          <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
            WhatsApp
          </span>
          <ChevronRight
            className="text-gray-400 shrink-0 ml-2"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};
