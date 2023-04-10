import { Link } from 'react-router-dom'

import Layout from '../components/layouts'

import gift from '../assets/img/Gift.svg'
import exitArrow from '../assets/img/exit-arrow-right.svg'
import user from '../assets/img/profile-user.png'
import purpleMessage from '../assets/img/purple-message.png'
import Badge from '../components/display/Badge'

export default function Index() {
  return (
    <Layout>
      <div className="container xl:max-w-[1200px] sm:mb-[160px] mb-[120px] sm:py-[82px] py-[60px]">
        <div className="flex gap-[20px] sm:mb-[80px] mb-[60px]">
          <img src={user} alt="" className="w-[64px] h-[64px]" />
          <div className="">
            <div className="sm:text-[24px] text-[18px] font-semibold mb-[8px]">Afternoon, Sarah!</div>
            <div className="flex items-center gap-[24px]">
              <div className="text-[16px]">Recap saved you 8 hours of meeting notes this week!</div>
              <Badge>
                <img src={gift} alt="" className="w-[16px] h-[16px]" />
                Help a friend save time
              </Badge>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:gap-[52px] gap-[40px]">
          {/* Item */}
          <div className="">
            <div className="flex gap-[24px] sm:mb-[54px] mb-[40]">
              <div className="flex items-center gap-[8px] font-semibold">
                <div className="text-[15px]">Tue</div>
                <div className="text-[12px] px-[4px] py-[2px] bg-gray-100 text-gray-500 rounded-[6px]">21</div>
                <div className="text-gray-300">•</div>
                <div className="text-[15px]">Today</div>
              </div>
              <div className="flex grow items-center">
                <hr />
              </div>
            </div>
            <div className="flex flex-col sm:gap-[54px] gap-[40px]">
              {/* sub item */}
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                  <img src={purpleMessage} alt="" />
                  <div className="font-semibold text-purple-500">Conference</div>
                </div>
                <div className="flex justify-between">
                  <div className="sm:text-[20px] text-[15px] font-semibold">Meditation App Kickoff</div>
                  <Link className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gray-100">
                    <img src={exitArrow} alt="" />
                  </Link>
                </div>
                <div className="text-[15px] font-semibold flex items-center">
                  <div className="mr-[16px]">8:15 AM - 8:45 AM</div>
                  <div className="flex mr-[8px]">
                    <img
                      src={user}
                      alt=""
                      className="w-[28px] h-[28px] rounded-full border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                    />
                    <img
                      src={user}
                      alt=""
                      className="w-[28px] h-[28px] rounded-full border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                    />
                  </div>
                  <div>Jessica, Jeff</div>
                </div>
              </div>
              {/* sub item */}
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                  <img src={purpleMessage} alt="" />
                  <div className="font-semibold text-purple-500">1:1</div>
                </div>
                <div className="flex justify-between">
                  <div className="sm:text-[20px] text-[15px] font-semibold">1:1 Bobby/Jessica</div>
                  <Link className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gray-100">
                    <img src={exitArrow} alt="" />
                  </Link>
                </div>
                <div className="text-[15px] font-semibold flex items-center">
                  <div className="mr-[16px]">7:00 AM – 7:30 AM</div>
                  <div className="flex mr-[8px]">
                    <img
                      src={user}
                      alt=""
                      className="w-[28px] h-[28px] rounded-full border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                    />
                  </div>
                  <div>Max</div>
                </div>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="">
            <div className="flex gap-[24px] sm:mb-[54px] mb-[40]">
              <div className="flex items-center gap-[8px] font-semibold">
                <div className="text-[15px]">Tue</div>
                <div className="text-[12px] px-[4px] py-[2px] bg-gray-100 text-gray-500 rounded-[6px]">21</div>
                <div className="text-gray-300">•</div>
                <div className="text-[15px]">Today</div>
              </div>
              <div className="flex grow items-center">
                <hr />
              </div>
            </div>
            <div className="flex flex-col sm:gap-[54px] gap-[40px]">
              {/* sub item */}
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                  <img src={purpleMessage} alt="" />
                  <div className="font-semibold text-purple-500">1:1</div>
                </div>
                <div className="flex justify-between">
                  <div className="sm:text-[20px] text-[15px] font-semibold">Meeting Title</div>
                  <Link className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gray-100">
                    <img src={exitArrow} alt="" />
                  </Link>
                </div>
                <div className="text-[15px] font-semibold flex items-center">
                  <div className="mr-[16px]">8:30 AM – 9:00 AM</div>
                  <div className="flex mr-[8px]">
                    <img
                      src={user}
                      alt=""
                      className="w-[28px] h-[28px] rounded-full border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                    />
                  </div>
                  <div>Matt</div>
                </div>
              </div>
              {/* sub item */}
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                  <img src={purpleMessage} alt="" />
                  <div className="font-semibold text-purple-500">Conference</div>
                </div>
                <div className="flex justify-between">
                  <div className="sm:text-[20px] text-[15px] font-semibold">MT-S Brainstorm</div>
                  <Link className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gray-100">
                    <img src={exitArrow} alt="" />
                  </Link>
                </div>
                <div className="text-[15px] font-semibold flex items-center">
                  <div className="mr-[16px]">8:15 AM - 8:45 AM</div>
                  <div className="flex mr-[8px]">
                    <img
                      src={user}
                      alt=""
                      className="w-[28px] h-[28px] rounded-full border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                    />
                    <img
                      src={user}
                      alt=""
                      className="w-[28px] h-[28px] rounded-full border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                    />
                  </div>
                  <div>Tom, Sarah</div>
                </div>
              </div>
            </div>
          </div>
          {/* Item */}
          <div className="">
            <div className="flex gap-[24px] sm:mb-[54px] mb-[40]">
              <div className="flex items-center gap-[8px] font-semibold">
                <div className="text-[15px]">Tue</div>
                <div className="text-[12px] px-[4px] py-[2px] bg-gray-100 text-gray-500 rounded-[6px]">21</div>
                <div className="text-gray-300">•</div>
                <div className="text-[15px]">Today</div>
              </div>
              <div className="flex grow items-center">
                <hr />
              </div>
            </div>
            <div className="flex flex-col sm:gap-[54px] gap-[40px]">
              {/* sub item */}
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                  <img src={purpleMessage} alt="" />
                  <div className="font-semibold text-purple-500">1:1</div>
                </div>
                <div className="flex justify-between">
                  <div className="sm:text-[20px] text-[15px] font-semibold">Meeting Title</div>
                  <Link className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gray-100">
                    <img src={exitArrow} alt="" />
                  </Link>
                </div>
                <div className="text-[15px] font-semibold flex items-center">
                  <div className="mr-[16px]">8:30 AM – 9:00 AM</div>
                  <div className="flex mr-[8px]">
                    <img
                      src={user}
                      alt=""
                      className="w-[28px] h-[28px] rounded-full border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                    />
                  </div>
                  <div>Matt</div>
                </div>
              </div>
              {/* sub item */}
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                  <img src={purpleMessage} alt="" />
                  <div className="font-semibold text-purple-500">1:1</div>
                </div>
                <div className="flex justify-between">
                  <div className="sm:text-[20px] text-[15px] font-semibold">Meeting Title</div>
                  <Link className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-gray-100">
                    <img src={exitArrow} alt="" />
                  </Link>
                </div>
                <div className="text-[15px] font-semibold flex items-center">
                  <div className="mr-[16px]">8:30 AM – 9:00 AM</div>
                  <div className="flex mr-[8px]">
                    <img
                      src={user}
                      alt=""
                      className="w-[28px] h-[28px] rounded-full border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                    />
                  </div>
                  <div>Matt</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
