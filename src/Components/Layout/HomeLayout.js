import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* 

      <Outlet></Outlet> */}

      <div className="drawer bg-white">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* <!-- Navbar --> */}
          <div className="w-full  border-t-2  shadow-md shadow-[#97969696] border-[#c5c1c1] py-2 items-center  md:flex justify-center bg-base-200">
            <div className="flex-none md:hidden text-end">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>

            {/* <!-- Navbar menu content here --> */}
            <div className="menu   px-10 w-full hidden md:flex justify-between   menu-horizontal">

              <Link to='/' class="text-gray-900" href="">HOME</Link>
              <Link class="text-gray-900" href="">ABOUT</Link>
              <Link class="text-gray-900" href="">MARKET DATA</Link>
              <Link class="text-gray-900" href="">INVEST</Link>
              <Link class="text-gray-900" href="">LIST</Link>
              <Link class="text-gray-900" href="">TRADE</Link>
              <Link class="text-gray-900" href="">REGULATION</Link>
              <Link class="text-gray-900" href="">LEARN</Link>
              <Link class="text-gray-900" href="">RESOURCES</Link>
            </div>
          </div>

          {/* <!-- Page content here -->
          Content */}
          <div>
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-white">
            {/* <!-- Sidebar content here --> */}
            <li> <Link to='/' class="text-gray-900" href="">HOME</Link></li>
            <li> <Link to='/' class="text-gray-900" href="">ABOUT</Link></li>
            <li> <Link to='/' class="text-gray-900" href="">MARKET DATA</Link></li>
            <li> <Link to='/' class="text-gray-900" href="">INVEST</Link></li>
            <li> <Link to='/' class="text-gray-900" href="">LIST</Link></li>
            <li> <Link to='/' class="text-gray-900" href="">TRADE</Link></li>
            <li> <Link to='/' class="text-gray-900" href="">REGULATION</Link></li>
            <li> <Link to='/' class="text-gray-900" href="">LEARN</Link></li>
            <li> <Link to='/' class="text-gray-900" href="">RESOURCES</Link></li>

          </ul>

        </div>
      </div>


    </div >
  );
};

export default HomeLayout;