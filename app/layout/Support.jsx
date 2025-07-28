'use client';
import { useState } from 'react';

export default function Support() {
  const [ShowTest, setTest] = useState(false);

  return (
    <div>
        <div className={`transition-all duration-300 ease-in-out ${ShowTest ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} sm:max-h-full sm:opacity-100`}>
              <nav className='flex flex-col gap-2 text-sm text-gray'>
              <div>Test Prepration</div>
                <div>Health Cover</div>
                <div>Visa Application</div>
                <div>Student Accomodation</div>
                <div>Tax and Auditing</div>
              </nav>
            </div>
    </div>
  )
}
