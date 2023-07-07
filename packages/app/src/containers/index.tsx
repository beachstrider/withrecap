import React from 'react'

import { HomeBlock1, HomeBlock2 } from '../components/blocks'
import { Button } from '../components/buttons'
import { Layout } from '../components/layouts'

import cara from '../assets/img/cara.png'
import google from '../assets/img/google.svg'
import greenCheck from '../assets/img/greenCheck.png'
import jeff from '../assets/img/jeff.png'
import jessica from '../assets/img/jessica2x.png'
import josh from '../assets/img/josh2x.png'
import lock_76x52 from '../assets/img/lock_76x52.svg'
import max from '../assets/img/max.png'
import add from '../assets/img/plus.svg'
import summaryList from '../assets/img/summaryList.png'
import unchecked from '../assets/img/unchecked.png'

export default function Index() {
  return (
    <>
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
              <div className="sm:block right-[200px] bottom-[200px] flex flex-end">
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
                Meeting notes,{' '}
                <span
                  className="sm:rounded-[14px] rounded-[10px] px-[3px]"
                  style={{ background: 'linear-gradient(180deg, #F1F3F5 0%, rgba(241, 243, 245, 0.2) 100%)' }}
                >
                  on autopilot.
                </span>
                <div className="w-[4px] rounded-[3px] bg-purple-500"></div>
              </div>
              <div className="sm:text-[22px] text-[17px] text-gray-500 max-w-[645px] sm:mb-[62px] mb-[44px]">
                Recap automatically takes notes <br className="sm:hidden" />
                in Google Meet, so you can focus <br className="sm:hidden" />
                on getting things done.
              </div>
              <div className="flex sm:flex-row flex-col items-center gap-[20px]">
                <a href={process.env.EXTENSION_LINK} target="_blank" rel="noreferrer">
                  <Button className="!px-[16px] !py-[14px] !rounded-[14px]">
                    <img src={google} alt="" />
                    Add to Chrome
                  </Button>
                </a>
                <div className="text-gray-500">Unlimited meetings notes, for free!</div>
              </div>
            </div>
          </div>
        </div>
        <HomeBlock1 />
        <div className="sm:px-[60px] px-[20px] mb-[74px]">
          <div className="flex flex-col items-center text-center gap-[20px]">
            <h1 className="sm:text-[56px] text-[42px] font-bold text-gray-900">
              Meeting notes can be
              <br className="hidden sm:block" />
              smart, fun, and automated.
            </h1>
            <div className="sm:text-[22px] text-[18px] leading-tight text-gray-500">
              (at least that's how we feel when we use Recap)
            </div>

            <a href={process.env.EXTENSION_LINK} target="_blank" rel="noreferrer">
              <Button className="!px-[16px] !py-[14px] !rounded-[14px]">
                <img src={google} alt="" />
                Add to Chrome
              </Button>
            </a>
          </div>
        </div>
        <div className="sm:px-[60px] px-[20px] sm:grid grid-cols-3 gap-[40px] sm:mb-[16px] mb-[12px]">
          <div
            className="col-span-2 pt-[60px] pb-[100px] sm:rounded-[60px] rounded-[45px] flex flex-col items-center gap-[68px]"
            style={{ background: 'linear-gradient(180deg, #F2ECFF 0%, #F9FBFD 100%)' }}
          >
            <div className="sm:text-[30px] text-[22px] font-semibold">So, what's the next step?</div>
            <div
              className="sm:min-w-[724px] p-[26px] bg-white sm:rounded-[24px] rounded-[18px]"
              style={{
                boxShadow:
                  '0px 2.7218px 10.8872px rgba(0, 0, 0, 0.01), 0px 0px 5.44361px rgba(0, 0, 0, 0.04), 0px 2.7218px 29.9398px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div className="flex sm:gap-[16px] gap-[12px] items-center sm:mb-[46px] mb-[35px]">
                <img src={greenCheck} alt="" className="w-[26px] h-[26px]" />
                <div className="sm:text-[21px] text-[15px] font-semibold">To-do's</div>
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
                  <img src={add} alt="" className="ml-[4px] w-[20px] h-[20px]" />
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
              className="min-w-[386px] p-[26px] bg-white sm:rounded-[24px] rounded-[18px] flex flex-col sm:gap-[16px] gap-[12px]"
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
              See who led the discussion
              <br />
              and who listened
            </div>
            <div className="">
              <div className="flex mb-[36px]">
                <div
                  className="sm:px-[24px] sm:py-[14px] px-[18px] py-[10px] bg-white flex items-center gap-[12px] sm:rounded-[28] rounded-[21px] rotate-[-6deg]"
                  style={{
                    boxShadow:
                      '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <img src={cara} alt="" className="w-[55px] h-[55px]" />
                  <div className="font-semibold text-[27px]">Cara</div>
                  <div className="sm:rounded-[10px] rounded-[6px] text-[20px] bg-gray-100 px-[7px] py-[4px] font-bold text-gray-500">
                    50%
                  </div>
                </div>
              </div>
              <div className="flex mb-[30px] ml-[60px]">
                <div
                  className="sm:px-[24px] sm:py-[14px] px-[18px] py-[10px] bg-white flex items-center gap-[12px] sm:rounded-[28] rounded-[21px]  rotate-[5deg]"
                  style={{
                    boxShadow:
                      '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <img src={jessica} alt="" className="w-[55px] h-[55px]" />
                  <div className="font-semibold text-[27px]">Jessica</div>
                  <div className="sm:rounded-[10px] rounded-[6px] text-[20px] bg-gray-100 px-[7px] py-[4px] font-bold text-gray-500">
                    28%
                  </div>
                </div>
              </div>
              <div className="flex">
                <div
                  className="sm:px-[24px] sm:py-[14px] px-[18px] py-[10px] bg-white flex items-center gap-[12px] sm:rounded-[28] rounded-[21px] rotate-[-5deg]"
                  style={{
                    boxShadow:
                      '0px 2px 8px rgba(0, 0, 0, 0.01), 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 2px 22px rgba(0, 0, 0, 0.04)'
                  }}
                >
                  <img src={josh} alt="" className="w-[55px] h-[55px]" />
                  <div className="font-semibold text-[27px]">Josh</div>
                  <div className="sm:rounded-[10px] rounded-[6px] text-[20px] bg-gray-100 px-[7px] py-[4px] font-bold text-gray-500">
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
            <div className="opacity-gradient-box-shadow max-w-[601px] w-full p-[26px] bg-white sm:rounded-[24px] rounded-[18px]">
              <div className="sh"></div>
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
          <div className="flex flex-col items-center sm:gap-[20px] gap-[15px] text-center">
            <img src={lock_76x52} alt="" />
            <h1 className="font-bold sm:mb-[8px] mb-[6px]">Secure, by design</h1>
            <div className="sm:text-[22px] text-[18px] leading-tight text-gray-500 max-w-[645px]">
              Your meeting transcripts are never read by anyone, and are securely encrypted within Google Chrome.
            </div>
          </div>
        </div>
        <HomeBlock2 />
      </Layout>
    </>
  )
}
