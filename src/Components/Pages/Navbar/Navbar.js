import React from 'react';

const Navbar = () => {

  return (
    <div>
      <header aria-label="Site Header" class="shadow-sm">
        <div
          class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4"
        >
          <div class="flex w-0 flex-1 lg:hidden">
            <button class="rounded-full bg-gray-100 p-2 text-gray-600" type="button">
              <span class="sr-only">Account</span>
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </button>
          </div>

          <div class="flex items-center gap-4">
            {/* <span class=""></span> */}
            <span class=" text-primary text-2xl font-bold">NSE</span>
          </div>

          {/* <div class="flex w-0 flex-1 justify-end lg:hidden">
            <button class="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
              <span class="sr-only">Menu</span>
              <svg
                class="h-5 w-5"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div> */}

          <div className='w-1/3 '>

            <form class="mb-0 hidden lg:flex items-center justify-center ">
              <div class="relative w-full ">
                <input type="text" placeholder="Search by Company Name, symbol or keyboards" className="input input-bordered input-info  w-full rounded-full  placeholder:text-black" />

                <button
                  type="submit"
                  class="absolute inset-y-0 top-2 right-0 mr-px rounded-r-lg p-2 text-gray-600"
                >
                  <span class="sr-only">Submit Search</span>
                  <svg
                    class="h-5 w-5"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className='flex items-center gap-2'>
            <div>
              <div className='flex justify-center gap-1 items-center'>
                <h1 className='text-2xl font-bold text-primary'>NSE</h1>
                <hr className='border-r-2  border-primary py-3 border' />
                <p className='text-primary text-xs font-bold'>Currency <br />Derivatives</p>
              </div>
              <div className='text-sm text-success'>
                <p>Currency Market is Open</p>
              </div>
            </div>
            <hr className='border-r border-[#333] py-3' />
            <div>
              <p>Current Trading Date - 07-Dec-2022</p>
            </div>

          </div>
        </div >

        {/* <div class="border-t border-gray-100 lg:hidden">
          <nav
            class="flex items-center justify-center overflow-x-auto p-4 text-sm font-medium"
          >
            <a class="flex-shrink-0 pl-4 text-gray-900" href="">About</a>
            <a class="flex-shrink-0 pl-4 text-gray-900" href="">Blog</a>
            <a class="flex-shrink-0 pl-4 text-gray-900" href="">Projects</a>
            <a class="flex-shrink-0 pl-4 text-gray-900" href="">Contact</a>
          </nav>
        </div> */}

        <div className='w-full bg-slate-400 py-2'>

          <div className='flex w-11/12  mx-auto justify-center'>
            <nav
              class="flex  w-full  justify-between  gap-2"
            >


              <a class="text-gray-900" href="">HOME</a>
              <a class="text-gray-900" href="">ABOUT</a>
              <a class="text-gray-900" href="">MARKET DATA</a>
              <a class="text-gray-900" href="">INVEST</a>
              <a class="text-gray-900" href="">LIST</a>
              <a class="text-gray-900" href="">TRADE</a>
              <a class="text-gray-900" href="">REGULATION</a>
              <a class="text-gray-900" href="">LEARN</a>
              <a class="text-gray-900" href="">RESOURCES</a>
            </nav>
          </div>
        </div>

      </header >


    </div >
  );
};

export default Navbar;