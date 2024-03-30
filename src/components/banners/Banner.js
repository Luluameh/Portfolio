import React from 'react'
import Portfolio from '../../pages/Portfolio';
export const Banner = () => {
  return (
    <>
      <div className="flex items-center justify-center gap-2 pb-4 bg-red-500    ">
        <div className="p-20">
          <div className="text-white">
                      <p> get all you want or every dream of into reality</p>
                      <button>Get Started</button>
          </div>
        </div>
          </div>
          <div id='portfolio' className='pt-5'>
              <Portfolio/>
              
          </div>
    </>
  );
}
