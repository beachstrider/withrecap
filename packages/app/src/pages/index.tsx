import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Badge from '../components/display/Badge'
import Layout from '../components/layouts'
import Footer from '../components/layouts/Footer'
import Loading from '../components/layouts/Loading'

import add from '../assets/img/Add.png'
import bgGrad from '../assets/img/bg-grad.png'
import bgGlad1 from '../assets/img/bgGrad1.png'
import browserLeft from '../assets/img/browserLeft.png'
import BrowserMiddle from '../assets/img/browserMiddle.png'
import browserRight from '../assets/img/browserRight.png'
import cara from '../assets/img/cara_mini.png'
import google from '../assets/img/google.png'
import greenCheck from '../assets/img/greenCheck.png'
import jeff from '../assets/img/jeff.png'
import jessica from '../assets/img/jessica.png'
import josh from '../assets/img/josh.png'
import lock from '../assets/img/lock.png'
import max from '../assets/img/max.png'
import summaryList from '../assets/img/summaryList.png'
import unchecked from '../assets/img/unchecked.png'

export default function Index() {
  const location = useLocation()

  return (
    <>
      {location.hash === '#signin' && <Loading />}
      <Layout isPublic>
        <div className="relative sm:mb-[160px] mb-[120px] sm:pt-[140px] pt-[100px] sm:pb-[200px] pb-[150px]">
          <div className="">
            <div className="absolute w-full h-full top-0 left-0 z-[-1]">
              <div className="sm:block hidden absolute bottom-0 left-[44px] mb-[132px]">
                <div className="flex rotate-[-14deg] mb-[12px]">
                  <div
                    className="p-[20px] flex flex-col sm:gap-[16px] gap-[12px] rounded-[16px] min-w-[306px] bg-white"
                    style={{
                      boxShadow:
                        '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div className="flex gap-[10px] text-gray-500 sm:text-[17px] text-[14px]">
                      <div className="rounded-[20px] bg-gray-100 w-[4px]"></div>
                      <div className="">
                        We should have <span className="font-semibold">fun</span> with the
                        <br />
                        design and <span className="font-semibold">make it pop</span>!
                      </div>
                    </div>
                    <div className="flex sm:gap-[16px] gap-[12px]">
                      <img src={max} alt="" className="w-[24px] h-[24px]" />
                      <div className="font-semibold">Maxwell</div>
                    </div>
                  </div>
                </div>
                <div className="flex rotate-[5deg]">
                  <div
                    className="p-[20px] flex flex-col sm:gap-[16px] gap-[12px] rounded-[16px] min-w-[306px] bg-white"
                    style={{
                      boxShadow:
                        '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <div className="flex gap-[10px] text-gray-500 sm:text-[17px] text-[14px]">
                      <div className="rounded-[20px] bg-gray-100 w-[4px]"></div>
                      <div className="">
                        We should have <span className="font-semibold">fun</span> with the
                        <br />
                        design and <span className="font-semibold">make it pop</span>!
                      </div>
                    </div>
                    <div className="flex sm:gap-[16px] gap-[12px]">
                      <img src={jeff} alt="" className="w-[24px] h-[24px]" />
                      <div className="font-semibold">Jeff</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:block hidden absolute right-[200px] bottom-[200px] flex flex-end">
                <div className="absolute right-0 bottom-[150px]">
                  <div
                    className="px-[14px] py-[10px] bg-white flex gap-[8px] rounded-[16px] rotate-[16deg]"
                    style={{
                      boxShadow:
                        '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <img src={cara} alt="" className="w-[32px] h-[32px]" />
                    <div className="font-semibold">Cara</div>
                    <div className="rounded-[6px] bg-gray-100 px-[4px] py-[2px] font-bold text-gray-500">50%</div>
                  </div>
                </div>
                <div className="absolute right-[10px] bottom-[56px]">
                  <div
                    className="px-[14px] py-[10px] bg-white flex gap-[8px] rounded-[16px]  rotate-[46deg]"
                    style={{
                      boxShadow:
                        '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <img src={max} alt="" className="w-[32px] h-[32px]" />
                    <div className="font-semibold">Maxwell</div>
                    <div className="rounded-[6px] bg-gray-100 px-[4px] py-[2px] font-bold text-gray-500">22%</div>
                  </div>
                </div>
                <div className="absolute right-[100px] bottom-0">
                  <div
                    className="px-[14px] py-[10px] bg-white flex gap-[8px] rounded-[16px] rotate-[76deg]"
                    style={{
                      boxShadow:
                        '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                    }}
                  >
                    <img src={jessica} alt="" className="w-[32px] h-[32px]" />
                    <div className="font-semibold">Jessica</div>
                    <div className="rounded-[6px] bg-gray-100 px-[4px] py-[2px] font-bold text-gray-500">28%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container xl:max-w-[1200px] text-center flex flex-col items-center">
              <div className="sm:text-[28px] text-[20px] sm:mb-[24px] mb-[18px] text-gray-500">
                Supercharge Google Meet
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-[8px] sm:text-[56px] text-[42px] leading-[67px] font-bold text-gray-800 sm:mb-[24px] mb-[18px]">
                Meeting notes, <span className="bg-gray-100 sm:rounded-[14px] rounded-[10px] ">on autopilot.</span>
                <div className="w-[4px] rounded-[3px] bg-purple-500"></div>
              </div>
              <div className="sm:text-[22px] text-[17px] text-gray-500 max-w-[645px] sm:mb-[62px] mb-[44px]">
                Recap automatically takes notes <br className="sm:hidden" />
                in Google Meet, so you can focus <br className="sm:hidden" />
                on getting things done.
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-[20px]">
                <Link to="#">
                  <Badge className="!px-[16px] !py-[14px] !rounded-[14px]">
                    <img src={google} alt="" />
                    Add to Chrome
                  </Badge>
                </Link>
                <div className="text-gray-500">Unlimited meetings notes, for free!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-[60px] px-[20px] sm:mb-[140px] mb-[110px] ">
          <div className="relative sm:px-[112px] px-[20px] sm:py-[80px] py-[60px] sm:rounded-[60px] rounded-[45px] bg-black text-white overflow-hidden">
            <div className="flex flex-col sm:gap-[50px] gap-[36px]">
              <div className="sm:text-[53px] text-[30px] font-bold leading-[58px]">
                Recap in one,
                <br />
                two, three!
              </div>
              <div className="sm:text-[18px] text-[13px]">
                Add to Google Chrome
                <div className="leading-[26px] sm:text-[18px] text-[13px] opacity-[0.7] mt-[6px]">
                  Recap works with only with browsers running Chrome.
                  <br />
                  Yes, that includes support Arc!
                </div>
              </div>
              <div className="sm:text-[18px] text-[13px]">
                Connect your meeting apps
                <div className="leading-[26px] sm:text-[18px] text-[13px] opacity-[0.7] mt-[6px]">
                  We support Zoom, Google Meet, Microsoft Teams,
                  <br />
                  Webex, and much more!
                </div>
              </div>
              <div className="sm:text-[18px] text-[13px]">
                That’s really it!
                <div className="leading-[26px] sm:text-[18px] text-[13px] opacity-[0.7] mt-[6px]">
                  Next time you take your call using your browser, Recap
                  <br />
                  will be taking notes for you and your team.
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 hidden sm:block">
              <img src={bgGrad} alt="" />
            </div>
          </div>
        </div>
        <div className="sm:px-[60px] px-[20px] mb-[74px]">
          <div className="flex flex-col items-center text-center gap-[20px]">
            <div className="sm:text-[56px] text-[42px] font-bold text-gray-900">
              Meeting notes can be
              <br className="hidden sm:block" />
              smart, fun, and automated.
            </div>
            <div className="sm:text-[22px] text-[18px] text-gray-500">
              (at least that’s how we feel when we use Recap)
            </div>

            <Link to="#">
              <Badge className="!px-[16px] !py-[14px] !rounded-[14px]">
                <img src={google} alt="" />
                Add to Chrome
              </Badge>
            </Link>
          </div>
        </div>
        <div className="sm:px-[60px] px-[20px] sm:grid grid-cols-3 gap-[40px]">
          <div
            className="col-span-2 pt-[60px] pb-[100px] sm:rounded-[60px] rounded-[45px] flex flex-col items-center gap-[68px]"
            style={{ background: 'linear-gradient(180deg, #F2ECFF 0%, #F9FBFD 100%)' }}
          >
            <div className="sm:text-[30px] text-[22px] font-semibold">So, what's the next step?</div>
            <div
              className="sm:min-w-[724px] p-[26px] bg-white rounded-[30px]"
              style={{
                boxShadow:
                  '0px 2.7218px 10.8872px rgba(0, 0, 0, 0.01), 0px 0px 5.44361px rgba(0, 0, 0, 0.04), 0px 2.7218px 29.9398px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex sm:gap-[16px] gap-[12px] items-center sm:mb-[46px] mb-[35px]">
                <img src={greenCheck} alt="" className="w-[26px] h-[26px]" />
                <div className="sm:text-[21px] text-[15px] font-semibold">Todos</div>
                <div className="sm:text-[21px] text-[15px] font-semibold text-gray-500">3</div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[20px] text-gray-900">
                  <img src={unchecked} alt="" />
                  <div>Maxwell and Jessica to brainstorm marketing strategy</div>
                </div>
                <div className="flex items-center gap-[20px] text-gray-900">
                  <img src={unchecked} alt="" />
                  <div>Justin to present latest product updates to engineering team</div>
                </div>
                <div className="flex items-center gap-[20px] text-gray-900">
                  <img src={unchecked} alt="" />
                  <div>Jessica to walk through storyboard with design team</div>
                </div>
                <div className="flex items-center gap-[20px] text-gray-500 font-semibold">
                  <img src={add} alt="" className="w-[28px] h-[28px]" />
                  <div>Add</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pt-[60px] pb-[100px] sm:rounded-[60px] rounded-[45px] flex flex-col items-center gap-[112px]"
            style={{ background: 'linear-gradient(180deg, #F2ECFF 0%, #F9FBFD 100%)' }}
          >
            <div className="sm:text-[30px] text-[22px] font-semibold">Highlighted moments</div>
            <div
              className="min-w-[386px] p-[26px] bg-white rounded-[30px] flex flex-col sm:gap-[16px] gap-[12px]"
              style={{
                boxShadow:
                  '0px 2.7218px 10.8872px rgba(0, 0, 0, 0.01), 0px 0px 5.44361px rgba(0, 0, 0, 0.04), 0px 2.7218px 29.9398px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex gap-[10px] text-gray-500 sm:text-[17px] text-[14px]">
                <div className="rounded-[20px] bg-gray-100 w-[4px]"></div>
                <div className="">
                  We should have <span className="font-semibold">fun</span> with the
                  <br />
                  design and <span className="font-semibold">make it pop</span>!
                </div>
              </div>
              <div className="flex sm:gap-[16px] gap-[12px]">
                <img src={max} alt="" className="w-[24px] h-[24px]" />
                <div className="font-semibold">Maxwell</div>
              </div>
            </div>
          </div>
          <div
            className="pt-[42px] pb-[100px] sm:rounded-[60px] rounded-[45px] flex flex-col items-center gap-[70px] px-[20px]"
            style={{ background: 'linear-gradient(180deg, #F2ECFF 0%, #F9FBFD 100%)' }}
          >
            <div className="sm:text-[30px] text-[22px] font-semibold">
              See who lead the discussion
              <br />
              and who listened
            </div>
            <div className="">
              <div className="flex mb-[36px]">
                <div
                  className="px-[14px] py-[10px] bg-white flex items-center gap-[12px] rounded-[16px] rotate-[-6deg]"
                  style={{
                    boxShadow:
                      '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <img src={max} alt="" className="w-[55px] h-[55px]" />
                  <div className="font-semibold text-[27px]">Cara</div>
                  <div className="rounded-[6px] text-[20px] bg-gray-100 px-[7px] py-[4px] font-bold text-gray-500">
                    50%
                  </div>
                </div>
              </div>
              <div className="flex mb-[30px] ml-[60px]">
                <div
                  className="px-[14px] py-[10px] bg-white flex items-center gap-[12px] rounded-[16px]  rotate-[5deg]"
                  style={{
                    boxShadow:
                      '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <img src={jessica} alt="" className="w-[55px] h-[55px]" />
                  <div className="font-semibold text-[27px]">Jessica</div>
                  <div className="rounded-[6px] text-[20px] bg-gray-100 px-[7px] py-[4px] font-bold text-gray-500">
                    28%
                  </div>
                </div>
              </div>
              <div className="flex">
                <div
                  className="px-[14px] py-[10px] bg-white flex items-center gap-[12px] rounded-[16px] rotate-[-5deg]"
                  style={{
                    boxShadow:
                      '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <img src={josh} alt="" className="w-[55px] h-[55px]" />
                  <div className="font-semibold text-[27px]">Josh</div>
                  <div className="rounded-[6px] text-[20px] bg-gray-100 px-[7px] py-[4px] font-bold text-gray-500">
                    22%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-2 pt-[60px] pb-[100px] sm:rounded-[60px] rounded-[45px] flex flex-col items-center gap-[42px] px-[20px]"
            style={{ background: 'linear-gradient(180deg, #F2ECFF 0%, #F9FBFD 100%)' }}
          >
            <div className="sm:text-[30px] text-[22px] font-semibold">Missing a meeting shouldn’t be a problem</div>
            <div
              className="max-w-[601px] w-full p-[26px] bg-white rounded-[30px]"
              style={{
                boxShadow:
                  '0px 2.7218px 10.8872px rgba(0, 0, 0, 0.01), 0px 0px 5.44361px rgba(0, 0, 0, 0.04), 0px 2.7218px 29.9398px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex sm:gap-[16px] gap-[12px] items-center mb-[35px]">
                <img src={summaryList} alt="" className="w-[26px] h-[26px]" />
                <div className="sm:text-[21px] text-[15px] font-semibold">Summary</div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="">
                  <b>Introduction</b>
                  <div>
                    Maxwell opened the meeting by explaining the goal of designing a new meditation app that stands out
                    from the competition, focusing on innovative features and user experience. The team agreed on the
                    importance of understanding the target audience and their needs to ensure the app's success.
                  </div>
                </div>
                <div className="">
                  <b>Target Audience</b>
                  <div>
                    Lindsey presented market research data, identifying the primary target audience as individuals aged
                    18-45, with a secondary audience of people above 45 years old. The team acknowledged the need to
                    cater to users with varying meditation experience, from beginners to advanced practitioners.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:px-[60px] px-[20px] mb-[60px]">
          <div className="flex flex-col items-center gap-[20px] text-center">
            <img src={lock} alt="" />
            <div className="sm:text-[56px] text-[42px] font-bold">Secure, by design</div>
            <div className="text-[22px] text-gray-500 max-w-[645px]">
              Your meeting transcripts are never ready by anyone, and are securely encrypted within Google Chrome.
            </div>
          </div>
        </div>
        <div className="sm:px-[60px] px-[20px] sm:h-[440px] mb-[20px]">
          <div className="relative sm:rounded-[60px] rounded-[45px] bg-black overflow-hidden h-full">
            <img src={bgGlad1} alt="" className="w-full  sm:h-[440px] sm:block hidden" />
            <div className="sm:absolute left-0 top-0 w-full h-full flex justify-center pt-[84px]">
              <div className="relative max-w-[1288px] w-full mx-[20px] flex">
                <div className="">
                  <img src={browserLeft} alt="" />
                </div>
                <div className="grow">
                  <img src={BrowserMiddle} alt="" className="w-full sm:h-full" />
                </div>
                <div className="">
                  <img src={browserRight} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  )
}
