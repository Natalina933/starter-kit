import { Disclosure } from "@headlessui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
//import icons from react-icons
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
//import { MdEvent } from "react-icons/mb"

function SideNavbar() {
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            arial-hidden="true"
          />
        </Disclosure.Button>
        
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Saint-Mandé Accueil
            </h1>
            <div className="my-4 border-b border-gray-100 pb-4 w-full">
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                {/* need icons*/}
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">QUI SOMMES-NOUS ?</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                {/* need icons*/}
                <FaRegComments className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">NOS ACTIVITES</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                {/* need icons*/}
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">NOTRE ORGANISATION</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                {/* need icons*/}
                <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">COTISATIONS-ADHESIONS</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                {/* need icons*/}
                <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">NOUS CONTACTER</h3>
              </div>
            </div>

            {/* Settings & More Section*/}
            <div className="my-4 border-b border-gray-100 pb-4 w-full">
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                {/* need icons*/}
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Settings</h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                {/* need icons*/}
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">More</h3>
              </div>

            </div>
            {/*logOut Section*/}
            <div className="my-4 w-full">
              <div className="flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                {/* need icons*/}
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white" />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Logout</h3>
              </div>
            </div>

          </div>
        </div>


      </Disclosure>
    </div>
  );
}

export default SideNavbar;
