import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { MdOutlineEmojiPeople } from 'react-icons/md';
import { GrCopy } from 'react-icons/gr';
import { RiLoginBoxLine } from 'react-icons/ri';


const Home = () => {
  return (
    <div>
      <div className="mt-4 px-10 py-3 grid relative gap-3 grid-cols-5 w-full bg-base-100 shadow-xl">
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div>
              <div className='flex place-items-end'>
                <p>NIFTY 50 <br /> <span className='text-lg'> 18,614.10</span> </p>
                <p><BsFillCaretDownFill className='text-red-700 text-2xl' /></p>
              </div>
              <p className='text-red-600'>-86.95 (-0.46%)</p>
            </div>
          </div>
        </div>

        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div>
              <div className='flex place-items-end'>
                <p>NIFTY 50 <br /> <span className='text-lg'> 18,614.10</span> </p>
                <p><BsFillCaretDownFill className='text-red-700 text-2xl' /></p>
              </div>
              <p className='text-red-600'>-86.95 (-0.46%)</p>
            </div>
          </div>
        </div> <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div>
              <div className='flex place-items-end'>
                <p>NIFTY 50 <br /> <span className='text-lg'> 18,614.10</span> </p>
                <p><BsFillCaretDownFill className='text-red-700 text-2xl' /></p>
              </div>
              <p className='text-red-600'>-86.95 (-0.46%)</p>
            </div>
          </div>
        </div> <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div>
              <div className='flex place-items-end'>
                <p>NIFTY 50 <br /> <span className='text-lg'> 18,614.10</span> </p>
                <p><BsFillCaretDownFill className='text-red-700 text-2xl' /></p>
              </div>
              <p className='text-red-600'>-86.95 (-0.46%)</p>
            </div>
          </div>
        </div> <div className="card bg-white shadow-xl">
          <div className="card-body">
            <div>
              <div className='flex place-items-end'>
                <p>NIFTY 50 <br /> <span className='text-lg'> 18,614.10</span> </p>
                <p><BsFillCaretDownFill className='text-red-700 text-2xl' /></p>
              </div>
              <p className='text-red-600'>-86.95 (-0.46%)</p>
            </div>
          </div>
        </div>
        <div className='absolute right-0 mt-2 flex gap-3 flex-col '>

          <MdOutlineEmojiPeople className='text-3xl' />
          <GrCopy className='text-3xl' />
          <RiLoginBoxLine className='text-3xl' />
        </div>
      </div>


    </div>
  );
};

export default Home;