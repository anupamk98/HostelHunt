import { FaFacebookMessenger, FaGithub, FaMailBulk, FaVoicemail } from "react-icons/fa";

export default function Footer(){
    return (
      <div className="bg-transparent">
        <div className="w-[100%] h-[1px] bg-gray-600"></div>
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
            <div>
              <div className="text-md font-bold text-[#116633]">
                ©2024 HostelHunt - By Anupam, Arindom and Tanbir
              </div>
              <div className="text-md font-bold text-[#116633]">
                All rights Reserved.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <FaGithub className="text-4xl" />
            <FaMailBulk className="text-4xl" />
          </div>
        </nav>
        {/* <section class="container mx-auto bg-transparent ">
          <div class="pt-20 sm:pt-30 pb-8 mt-20  border-secondary-dark">
            <hr class=" mx-auto border-t-2 border-primary-light rounded-2xl" />
            <div class="mt-2 flex w-full flex-col text-center ">
              <div class="my-4 grid grid-cols-2 sm:grid-cols-2  ">
                <div>
                  <h2 class="font-header uppercase tracking-tight text-2xl font-extrabold  text-[#0e0f10]">
                    Made By
                  </h2>
                  <ul class="font-medium tracking-tight text-slate-200">
                    <span class="my-2 font-medium tracking-tight text-[#101010] decoration-wavy decoration-2 underline-offset-4 transition-all text-xl hover:underline hover:text-[#13c4a5] ">
                      Anupam, Tanbir & Arindom
                    </span>
                  </ul>
                </div>

                <div>
                  <h2 class="font-header uppercase tracking-tight text-2xl font-extrabold  text-[#101010]">
                    Contact Us
                  </h2>

                  <ul class="font-medium tracking-tight text-[#101010]">
                    <li class="my-2">
                      <a
                        href="HostelHunt@gmail.com"
                        target="a_blank"
                        class="text- decoration-wavy decoration-2 underline-offset-4 transition-all text-xl hover:underline hover:text-[#13c4a5] "
                      >
                        Email
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr class=" mx-auto border-t-2 border-primary-light rounded-2xl" />
          </div>
        </section> */}
      </div>
    );
}
