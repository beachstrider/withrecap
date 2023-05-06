import React from 'react'

import arrowLeft from '../../assets/img/arrowLeft.svg'
import back from '../../assets/img/back.svg'
import close from '../../assets/img/close.svg'
import forward from '../../assets/img/forward.svg'
import google from '../../assets/img/google.svg'
import googleOutline from '../../assets/img/googleOutline.svg'
import home from '../../assets/img/home.svg'
import jessica from '../../assets/img/josh.png'
import lindsey from '../../assets/img/lindsey.png'
import listInCircle from '../../assets/img/listInCircle.svg'
import lock_14x17 from '../../assets/img/lock_14x17.svg'
import logo from '../../assets/img/logo.svg'
import maxwell from '../../assets/img/matt.png'
import navRightUser3dots from '../../assets/img/nav-right-user-3dots.png'
import outboundLinkWhite from '../../assets/img/outboundLinkWhite.svg'
import plus from '../../assets/img/plus.svg'
import purpleMessage from '../../assets/img/purpleMessage.svg'
import recapLogoWhite from '../../assets/img/recapLogoWhite.svg'
import refresh from '../../assets/img/refresh.svg'
import rightExtensionUser3Dots from '../../assets/img/rightExtensionUser3Dots.svg'
import star from '../../assets/img/star.svg'
import welcomeBlock from '../../assets/img/welcomeBlock.svg'

export const HomeBlock1 = () => (
  <div className="sm:px-[60px] px-[20px] sm:mb-[140px] mb-[110px]">
    <div className="relative sm:px-[112px] px-[20px] sm:py-[80px] py-[60px] sm:rounded-[60px] rounded-[45px] overflow-hidden">
      {/* gradient circles */}
      <div className="z-[-2] absolute top-0 right-0 w-full h-full flex sm:justify-end justify-center items-center bg-black">
        <div className="sm:rotate-0 rotate-[90deg] relative w-[1433px] h-[1433px] sm:mr-[-16%] mr-0 sm:mt-0 mt-[2600px]">
          <div
            className="absolute sm:scale-100 scale-[0.5] top-[50%] right-0 bg-[#6700FF] w-[1443px] h-[1443px] rounded-full"
            style={{
              filter: 'blur(92px)',
              transform: 'rotate(-180deg) translate(0, 50%)'
            }}
          />
          <div
            className="absolute top-[50%] right-0 bg-[#B265E1] w-[1326px] h-[1326px] rounded-full"
            style={{
              filter: 'blur(37px)',
              transform: 'rotate(-180deg) translate(0, 50%)'
            }}
          />
          <div
            className="absolute top-[50%] right-0 bg-[#DFAFF0] w-[1060px] h-[1060px] rounded-full"
            style={{
              filter: 'blur(37px)',
              transform: 'rotate(-180deg) translate(0, 50%)'
            }}
          />
          <div
            className="absolute top-[50%] right-0 bg-[#F8E3FF] w-[868px] h-[868px] rounded-full"
            style={{
              filter: 'blur(37px)',
              transform: 'rotate(-180deg) translate(0, 50%)'
            }}
          />
        </div>
      </div>
      {/* recap thumbnail */}
      <div className="z-[-1] absolute sm:top-[4%] top-[46%] sm:right-[-31%] right-[-40%] sm:w-full w-[150%] h-full">
        <div className="scale-[0.8] absolute w-full top-0 right-0 rounded-[20px] bg-white ">
          <div className="flex px-[15px] py-[13px]">
            <img src={logo} alt="" className="w-[26px]" />
            <div className="mx-[11px] w-[1px] bg-gray-200"></div>
            <p className="font-bold text-gray-950">Meditation App Kickoff</p>
          </div>
          <div className="container-sm sm:flex gap-[80px]">
            <div className="card sm:max-w-[340px] w-full grow-0 sm:p-[24px] p-[18px]">
              <div className="flex gap-[6px] mb-[24px]">
                <img src={arrowLeft} alt="" />
                <p className="font-semibold text-gray-500">Back</p>
              </div>
              <div className="flex gap-[12px] mb-[26px]">
                <img src={purpleMessage} alt="" />
                <div className="font-semibold text-purple-700">Conference</div>
              </div>
              <h5 className="font-semibold mb-[12px]">Meditation App Kickoff</h5>
              <p className="font-semibold text-gray-500 mb-[24px]">Tue, Mar 23&nbsp;&nbsp;9:00 AM - 10:30 AM</p>
              <p>A single to two lined description of what this meeting is about.</p>
              <div className="my-[28px] h-[2px] bg-[#F1F3F5]"></div>
              <div className="font-semibold mb-[6px]">
                Participants&nbsp;&nbsp;<span className="text-gray-500">3</span>
              </div>
              <p className="text-gray-500 mb-[24px]">Ranked in order of speaker.</p>
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-[12px] items-center">
                    <img src={maxwell} alt="" className="w-[32px] h-[32px]" />
                    <div className="font-semibold">Maxwell</div>
                  </div>
                  <div className="px-[6px] py-[4px] rounded-[26px] bg-gray-100 text-[12px] font-semibold text-gray-500">
                    50%
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[12px] items-center">
                    <img src={lindsey} alt="" className="w-[32px] h-[32px]" />
                    <div className="font-semibold">Lindsey</div>
                  </div>
                  <div className="px-[6px] py-[4px] rounded-[26px] bg-gray-100 text-[12px] font-semibold text-gray-500">
                    28%
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[12px] items-center">
                    <img src={jessica} alt="" className="w-[32px] h-[32px]" />
                    <div className="font-semibold">Jessica</div>
                  </div>
                  <div className="px-[6px] py-[4px] rounded-[26px] bg-gray-100 text-[12px] font-semibold text-gray-500">
                    22%
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-[12px] items-center">
                    <div className="w-[32px] h-[32px] bg-gray-100 flex justify-center items-center font-semibold text-[12px] text-gray-400 rounded-full">
                      J
                    </div>
                    <div className="font-semibold">Justin</div>
                  </div>
                  <div className="px-[6px] py-[4px] rounded-[26px] bg-gray-100 text-[12px] font-semibold text-gray-500">
                    0%
                  </div>
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="flex justify-between mb-[34px]">
                <div className="flex gap-[12px]">
                  <img src={listInCircle} alt="" />
                  <div className="font-semibold">Summary</div>
                </div>
              </div>
              <div className="flex flex-col flex-wrap gap-[34px]">
                <div>
                  <div className="font-semibold">Introduction</div>
                  <div>
                    Maxwell opened the meeting by explaining the goal of designing a new meditation app that stands out
                    from the competition, focusing on innovative features and user experience. The team agreed on the
                    importance of understanding the target audience and their needs to ensure the app's success.
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Target Audience</div>
                  <div>
                    Lindsey presented market research data, identifying the primary target audience as individuals aged
                    18-45, with a secondary audience of people above 45 years old. The team acknowledged the need to
                    cater to users with varying meditation experience, from beginners to advanced practitioners.
                  </div>
                </div>
                <div>
                  <div className="font-semibold">App Features</div>
                  <div>
                    Jessica facilitated brainstorming on potential app features, with the team agreeing on the following
                    key features:
                    <br />
                    1. Customizable meditation plans: Users can create personalized plans based on their goals,
                    experience level, and available time.
                    <br />
                    2. Guided meditation sessions: A variety of guided sessions led by experienced instructors, with
                    options for different meditation styles and lengths.
                    <br />
                    3. Progressive learning: Content designed to help users gradually advance in their practice and
                    explore new techniques.
                    <br />
                    4. In-app community: A feature allowing users to connect with other meditators, share experiences,
                    and offer support.
                    <br />
                    5. Gamification: Incorporating elements like streaks, badges, and challenges to motivate users and
                    encourage daily practice.
                    <br />
                    6. Analytics and tracking: Users can monitor their progress, view statistics, and set personal
                    milestones.
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Conclusion</div>
                  <div>
                    The meeting concluded with the team expressing enthusiasm for the project and a shared commitment to
                    creating a unique and engaging meditation app.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* overlay text */}
      <div className="flex flex-col sm:gap-[50px] gap-[36px] sm:mb-0 mb-[400px] text-white">
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
          That's really it!
          <div className="leading-[26px] sm:text-[18px] text-[13px] opacity-[0.7] mt-[6px]">
            Next time you take your call using your browser, Recap
            <br />
            will be taking notes for you and your team.
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const HomeBlock2 = () => (
  <div className="relative sm:px-[60px] px-[20px] sm:h-[440px] h-[360px] mb-[20px]">
    <div className="relative sm:rounded-[60px] sm:bg-black overflow-hidden h-full">
      {/* gradient banner */}
      <div className="sm:block hidden absolute w-full h-full top-[107px]">
        <div
          className="absolute sm:scale-100 scale-[0.3] left-[50%] top-0 bg-[#6700FF] w-[2450px] h-[2450px] rounded-full"
          style={{
            filter: 'blur(92px)',
            transform: 'rotate(-180deg) translate(50%, 0)'
          }}
        />
        <div
          className="absolute left-[50%] top-0 bg-[#B265E1] w-[2252px] h-[2252px] rounded-full"
          style={{
            filter: 'blur(37px)',
            transform: 'rotate(-180deg) translate(50%, 0)'
          }}
        />
        <div
          className="absolute left-[50%] top-0 bg-[#DFAFF0] w-[1800px] h-[1800px] rounded-full"
          style={{
            filter: 'blur(37px)',
            transform: 'rotate(-180deg) translate(50%, 0)'
          }}
        />
        <div
          className="absolute left-[50%] top-0 bg-[#F8E3FF] w-[1474px] h-[1474px] rounded-full"
          style={{
            filter: 'blur(37px)',
            transform: 'rotate(-180deg) translate(50%, 0)'
          }}
        />
      </div>
      {/* thumbnail window */}
      <div className="sm:absolute left-0 top-0 w-full h-full flex justify-center sm:pt-[84px] pt-0">
        <div className="relative max-w-[1288px] w-[125%] sm:scale-100 scale-[0.8]">
          <div className="">
            <div className="bg-[#35363A] rounded-t-[13px] overflow-hidden flex">
              <div className="bg-[#202124] pl-[21px] pr-[25px] pt-[26px] pb-[24px] flex gap-[13.5px] rounded-br-[13px]">
                <div className="rounded-full w-[20px] h-[20px] bg-[#FF6058] border-solid border-[#E14942]"></div>
                <div className="rounded-full w-[20px] h-[20px] bg-[#FFC130] border-solid border-[#E1A325]"></div>
                <div className="rounded-full w-[20px] h-[20px] bg-[#27CA40] border-solid border-[#3EAF3F]"></div>
              </div>
              <div className="flex items-center bg-[#202124] pt-[13.5px]">
                <div className="bg-[#35363A] rounded-t-[13px] pl-[13px] pr-[22px] py-[15px] flex items-center gap-[15px] text-[20px] text-white">
                  <img src={googleOutline} alt="" className="w-[27px] h-[27px]" />
                  <div className="truncate">Meditation App Kickoff Call</div>
                  <img src={close} alt="" className="ml-[8px]" />
                </div>
              </div>
              <div className="bg-[#202124] px-[29px] flex items-center rounded-bl-[13px] grow">
                <img src={plus} alt="" className="pt-[10px]" />
              </div>
            </div>
            <div className="bg-[#35363A] px-[22px] py-[18.5px] flex items-center">
              <img src={back} alt="" className="mr-[32px]" />
              <img src={forward} alt="" className="mr-[26px]" />
              <img src={refresh} alt="" className="mr-[28px]" />
              <img src={home} alt="" className="mr-[25px]" />
              <div className="bg-[#202124] rounded-[24px] grow flex items-center h-[47px]">
                <div className="flex justify-center items-center w-[56px]">
                  <img src={lock_14x17} alt="" />
                </div>
                <div className="grow text-[23px] text-white">meet.google.com/</div>
                <div className="flex justify-center items-center w-[56px]">
                  <img src={star} alt="" />
                </div>
              </div>
              <div className="flex items-center ml-[26px] mr-[23px]">
                <img src={navRightUser3dots} alt="" />
              </div>
            </div>
          </div>
          <div className="h-full bg-gray-100 sm:bg-white"></div>
        </div>
      </div>
    </div>
  </div>
)

export const ExtensionInstallationAlert = () => (
  <div className="sm:mb-[102] mb-[75] pt-[42] rounded-[16] bg-[#F1F3F5] sm:h-[237] h-[474] relative overflow-hidden sm:grid sm:grid-cols-2 flex flex-col">
    <div className="w-full">
      <div className="relative sm:max-w-[450] max-w-[340] w-full">
        <div className="">
          <div className="bg-[#DEE1E6] rounded-tr-[8] overflow-hidden flex h-[42]"></div>
          <div className="bg-white py-[5] flex items-center">
            <div className="bg-[#F1F3F4] rounded-r-[14] grow flex items-center h-[28] text-[14]"></div>
            <div className="flex items-center mx-[8]">
              <img src={rightExtensionUser3Dots} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-[#202124] pl-[24] pr-[69] pt-[24] h-[115] overflow-hidden">
          <div className="bg-[#333437]" style={{ boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.35)' }}>
            <div className="flex justify-between p-[20] border-solid border-b border-gray-600">
              <img src={recapLogoWhite} alt="" />
              <button className="px-[10] py-[6] bg-[#3F4043] rounded-[12] text-[15] text-white font-semibold">
                <div className="flex items-center gap-[7]">
                  <span>Open Recap</span>
                  <img src={outboundLinkWhite} alt="" />
                </div>
              </button>
            </div>
            <div className="p-[20]"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="grow px-[22] sm:py-[22px] py-[66px] flex flex-col sm:items-start items-center text-center sm:gap-0 gap-[10]">
      <h5 className="font-semibold sm:mb-[12] mb-[8]">Don't forget the Recap Chrome extension</h5>
      <div className="text-gray-500 sm:mb-[12] mb-[8]">Recap only take notes in Chrome with our extension added.</div>
      <div className="flex justify-start">
        <a
          href={process.env.CHROME_WEBSTORE_LINK}
          className="px-[10] py-[6] text-[15] font-semibold flex items-center gap-[4] rounded-[12] bg-white"
        >
          <img src={google} alt="" />
          <span className="leading-[20px]">Add to Chrome</span>
        </a>
      </div>
    </div>
  </div>
)

export const Welcome = () => (
  <div className="sm:mb-[102] mb-[75] rounded-[16px] bg-[#F1F3F5] relative overflow-hidden sm:grid sm:grid-cols-2 flex flex-col">
    <div className="relative w-full sm:h-auto h-[330px]">
      <img src={welcomeBlock} alt="" className="absolute bottom-0" />
    </div>
    <div className="grow px-[22] sm:py-[145px] py-[100px] flex flex-col sm:items-start items-center sm:gap-[24px] gap-[18px]">
      <div className="font-semibold">Welcome to Recap</div>
      <h2 className="font-semibold">Recap will automatically take notes in your next Google Meeting</h2>
      <div className="text-gray-500">Take your next meeting like usual, Recap does the rest.</div>
      <div className="flex justify-start">
        <a
          href={process.env.CHROME_WEBSTORE_LINK}
          target="_blank"
          className="px-[10] py-[6] text-[15] font-semibold flex items-center gap-[4] rounded-[12] bg-white"
          rel="noreferrer"
        >
          <img src={google} alt="" />
          <span className="leading-[20px]">Add to Chrome</span>
        </a>
      </div>
    </div>
  </div>
)
