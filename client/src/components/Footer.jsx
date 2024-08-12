import { FaFacebookMessenger, FaGithub, FaMailBulk, FaVoicemail } from "react-icons/fa";

export default function Footer(){
    return (
      <div className="bg-[#116633] fixed bottom-0 w-[100%] z-10">
        <nav className="flex justify-between gap-10  items-center py-4 px-3 max-w-6xl  mx-auto">
          <div className="flex flex-col gap-1">
            <div>
              <span className="text-bolder font-bold text-xl text-white">
                Hostel
              </span>
              <span className="text-bolder font-bold text-xl text-black">
                Hunt
              </span>
            </div>
              <div className="text-md font-bold text-white">
                ©2024 HostelHunt - By Anupam, Arindom and Tanbir
                All rights Reserved.
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <FaGithub className="text-4xl" />
            <FaMailBulk className="text-4xl" />
          </div>
        </nav>
      </div>
    );
}