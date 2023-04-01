import Button from "components/Button";
import Tick from "components/Tick";
import Add from "components/Add";
import Text from "components/Text";
import BrowserChromeDark from "components/BrowserChromeDark";

export default function Landing(props: LandingProps) {
  return (
    <div
      className="relative bg-white w-[1728px] h-[4715px] overflow-clip"
      style={props.style}
    >
      <div
        className="absolute left-36 top-0 bg-white inline-flex justify-between items-center font-semibold w-[1440px] h-[58px]"
      >
        <div className="gap-2.5 flex items-center w-[120px]">
          <div
            className={`w-8 h-8 relative text-center drop-shadow-lg bg-gradient-to-b from-[rgba(84,172,254,1)] to-[rgba(64,140,255,1)] overflow-clip rounded-[30px] font-['SF_Pro_Rounded'] text-[rgba(255,255,255,0.9)]`}
          >
            <p
              className="absolute leading-5 m-0 left-[calc(50%_-_10.5px_+_0.5px)] top-[calc(50%_-_10px_+_0px)] text-[13px]"
            >
              􀊊
            </p>
          </div>
          <p
            className={`leading-5 text-left m-0 font-['Inter'] text-[15px] text-[rgba(34,39,52,1)]`}
          >
            Recap
          </p>
        </div>
        <div
          className={`gap-5 flex items-center text-left w-[216px] font-['Inter'] text-[rgba(105,112,122,1)]`}
        >
          <p className="leading-5 m-0 text-[15px]">Sign in</p>
          <Button type="SECONDARY_SMALL_TEXT_ICON_TYPE" />
        </div>
      </div>
      <div
        className={`absolute inline-flex flex-col items-center text-center left-[489px] top-[198px] gap-[50px] font-['Inter']`}
      >
        <div className="gap-6 flex flex-col items-center">
          <p
            className="font-normal m-0 text-[28px] tracking-[-1px] leading-[normal] text-[rgba(105,112,122,1)]"
          >
            Supercharge your meetings.
          </p>
          <div
            className="relative font-bold w-[726px] h-[68px] text-[rgba(34,39,52,1)]"
          >
            <div
              className="right-0 absolute top-[1.47%] bottom-[1.47%] w-[331px] left-[54.41%] bg-[rgba(241,243,245,1)] rounded-[14px]"
             />
            <p
              className="inset-0 absolute inline m-0 text-[56px] tracking-[-1.5px] leading-[normal]"
            >
              Meeting notes, on autopilot.
            </p>
          </div>
          <p
            className="font-normal leading-9 m-0 w-[645px] text-[22px] text-[rgba(105,112,122,1)]"
          >
            With Recap’s real-time transcription of Google Meet, Zoom, MS Teams and Webex you'll never miss a word.
          </p>
        </div>
        <div
          className="gap-5 flex justify-center items-center font-normal text-[rgba(105,112,122,1)]"
        >
          <Button type="SECONDARY_MEDIUM_TEXT_ICON_TYPE" />
          <p className="text-base leading-6 m-0">
            Unlimited meetings, for free!
          </p>
        </div>
      </div>
      <div
        className="w-1 absolute h-[66px] left-[1223px] top-[258px] bg-[rgba(64,163,255,1)] rounded-[3px]"
       />
      <div
        className={`w-8 h-8 absolute text-center font-semibold left-[calc(50%_-_16px_+_361px)] top-[calc(50%_-_16px_+_-2123.5px)] drop-shadow-lg bg-gradient-to-b from-[rgba(84,172,254,1)] to-[rgba(64,140,255,1)] overflow-clip rounded-[30px] font-['SF_Pro_Rounded'] text-[rgba(255,255,255,0.9)]`}
      >
        <p
          className="absolute leading-5 m-0 left-[calc(50%_-_10.5px_+_0.5px)] top-[calc(50%_-_10px_+_0px)] text-[13px]"
        >
          􀊊
        </p>
      </div>
      <div
        className={`px-3.5 py-2.5 origin-top-left absolute bg-white gap-2 inline-flex items-center rounded-2xl text-left left-[1395.17px] top-[346.71px] drop-shadow-lg font-['Inter'] [rotate:3.43deg]`}
      >
        <div
          className="w-8 h-8 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/4e57764010afe423444a771467e7e2441072c542.webp)_center_/_cover]"
         />
        <p
          className="text-base font-semibold leading-6 m-0 text-[rgba(34,39,52,1)]"
        >
          Cara
        </p>
        <div
          className="px-1 py-0.5 w-9 gap-2.5 flex flex-col items-start rounded-md font-bold bg-[rgba(241,243,245,1)] text-[rgba(105,112,122,1)]"
        >
          <p className="text-xs leading-4 uppercase m-0 tracking-[0.5px]">
            50%
          </p>
        </div>
      </div>
      <div
        className={`px-3.5 py-2.5 origin-top-left absolute bg-white gap-2 inline-flex items-center rounded-2xl text-left left-[1357.3px] top-[467.9px] drop-shadow-lg font-['Inter'] [rotate:63.43deg]`}
      >
        <div
          className="w-8 h-8 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3da3eadf0f36abbc37f52bceec9a9139a75896e5.webp)_center_/_cover]"
         />
        <p
          className="text-base font-semibold leading-6 m-0 text-[rgba(34,39,52,1)]"
        >
          Jessica
        </p>
        <div
          className="px-1 py-0.5 gap-2.5 flex flex-col items-start rounded-md font-bold w-[35px] bg-[rgba(241,243,245,1)] text-[rgba(105,112,122,1)]"
        >
          <p className="text-xs leading-4 uppercase m-0 tracking-[0.5px]">
            28%
          </p>
        </div>
      </div>
      <div
        className={`px-3.5 py-2.5 origin-top-left absolute bg-white gap-2 inline-flex items-center rounded-2xl text-left left-[1393.74px] top-[412.87px] drop-shadow-lg font-['Inter'] [rotate:33.43deg]`}
      >
        <div
          className="origin-center w-8 h-8 rounded-[50px] [rotate:-3.43deg] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b059efc066cd2674f556187316c00c60addbe09.webp)_center_/_cover]"
         />
        <p
          className="text-base font-semibold leading-6 m-0 text-[rgba(34,39,52,1)]"
        >
          Maxwell
        </p>
        <div
          className="px-1 py-0.5 gap-2.5 flex flex-col items-start rounded-md font-bold w-[35px] bg-[rgba(241,243,245,1)] text-[rgba(105,112,122,1)]"
        >
          <p className="text-xs leading-4 uppercase m-0 tracking-[0.5px]">
            22%
          </p>
        </div>
      </div>
      <div
        className={`origin-top-left absolute left-5 bg-white gap-4 inline-flex flex-col items-start self-stretch rounded-2xl p-5 text-left w-[306.67px] top-[354.11px] drop-shadow-lg font-['Inter'] [rotate:-13.41deg]`}
      >
        <div
          className="w-full gap-2.5 flex items-start self-stretch text-[rgba(105,112,122,1)]"
        >
          <div
            className="w-1 h-16 bg-[rgba(241,243,245,1)] rounded-[20px]"
           />
          <div className="py-2 flex-1 gap-2.5 flex items-start flex-grow">
            <div className="flex-1 leading-none relative">
              <p className="font-normal leading-6 inline m-0 text-[17px]">
                {"We should have "}
              </p>
              <p className="font-semibold leading-6 inline m-0 text-[17px]">
                fun
              </p>
              <p className="font-normal leading-6 inline m-0 text-[17px]">
                {" with the design and "}
              </p>
              <p className="font-semibold leading-6 inline m-0 text-[17px]">
                make it pop
              </p>
              <p className="font-normal leading-6 inline m-0 text-[17px]">
                !
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full gap-4 flex items-start self-stretch font-semibold text-[rgba(34,39,52,1)]"
        >
          <div
            className="origin-center w-6 h-6 rounded-[50px] [rotate:-1.59deg] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b059efc066cd2674f556187316c00c60addbe09.webp)_center_/_cover]"
           />
          <div
            className="gap-2.5 flex items-center self-stretch w-[221.33334350585938px] h-[24.66px]"
          >
            <p className="text-base leading-6 m-0">Maxwell</p>
          </div>
        </div>
      </div>
      <div
        className={`origin-top-left absolute bg-white gap-4 inline-flex flex-col items-start self-stretch rounded-2xl p-5 text-left w-[306.67px] left-[38.73px] top-[456px] drop-shadow-lg font-['Inter'] [rotate:4.67deg]`}
      >
        <div
          className="w-full gap-2.5 flex items-start self-stretch text-[rgba(105,112,122,1)]"
        >
          <div
            className="w-1 h-16 bg-[rgba(241,243,245,1)] rounded-[20px]"
           />
          <div className="py-2 flex-1 gap-2.5 flex items-start flex-grow">
            <div className="flex-1 leading-none relative">
              <p className="font-normal leading-6 inline m-0 text-[17px]">
                {"We should have "}
              </p>
              <p className="font-semibold leading-6 inline m-0 text-[17px]">
                fun
              </p>
              <p className="font-normal leading-6 inline m-0 text-[17px]">
                {" with the design and "}
              </p>
              <p className="font-semibold leading-6 inline m-0 text-[17px]">
                make it pop
              </p>
              <p className="font-normal leading-6 inline m-0 text-[17px]">
                !
              </p>
            </div>
          </div>
        </div>
        <div
          className="w-full gap-4 flex items-start self-stretch font-semibold text-[rgba(34,39,52,1)]"
        >
          <div
            className="w-6 h-6 border-solid border-4 border-white rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/c23f144cd9a091e61a62c85cf9554db4af5103f3.webp)_center_/_cover]"
           />
          <div
            className="gap-2.5 flex items-center self-stretch w-[221.33334350585938px] h-[24.06px]"
          >
            <p className="text-base leading-6 m-0">Jeff</p>
          </div>
        </div>
      </div>
      <div
        className="absolute inline-flex flex-col items-center left-[60px] top-[1590px] gap-[60px]"
      >
        <div
          className={`gap-5 flex flex-col items-center text-center font-['Inter']`}
        >
          <p
            className="font-bold m-0 w-[713px] text-[56px] tracking-[-1.5px] leading-[normal] text-[rgba(34,39,52,1)]"
          >
            Meeting notes can be smart, fun, and automated.
          </p>
          <p
            className="font-normal leading-9 m-0 w-[645px] text-[22px] text-[rgba(105,112,122,1)]"
          >
            (At least that’s how we feel when we use Recap)
          </p>
          <Button type="SECONDARY_MEDIUM_TEXT_ICON_TYPE1" />
        </div>
        <div className="relative w-[1608px] h-[1560px]">
          <div
            className={`absolute left-0 w-[1051px] right-[34.64%] top-[20.51%] bottom-[41.03%] bg-gradient-to-b from-[rgba(222,239,255,1)] to-[rgba(245,250,254,1)] overflow-clip h-[600px] rounded-[60px] font-['Inter']`}
          >
            <p
              className="absolute text-3xl font-semibold leading-9 text-center inline m-0 left-[346px] top-[60px] text-[rgba(34,39,52,1)]"
            >
              So, what’s the next step?
            </p>
            <div
              className="absolute bg-white inline-flex flex-col items-start self-stretch text-left w-[724px] left-[163px] top-[165px] drop-shadow-lg gap-[43.55px] rounded-[29.94px] p-[27px]"
            >
              <div className="font-semibold gap-[21.77px]">
                <div className="flex items-center gap-[16.33px]">
                  <div
                    className="flex items-start p-2 w-[38.105262756347656px] bg-[rgba(64,163,255,0.1)] gap-[13.61px] rounded-[27.22px]"
                  >
                    <Tick type="TYPE1" text="􀆅" />
                  </div>
                  <p
                    className="m-0 text-[21.77px] leading-[32.66165542602539px] text-[rgba(34,39,52,1)]"
                  >
                    Todos
                  </p>
                  <p
                    className="m-0 text-[21.77px] leading-[32.66165542602539px] text-[rgba(105,112,122,1)]"
                  >
                    3
                  </p>
                </div>
              </div>
              <div
                className="w-full flex flex-col items-start self-stretch gap-[21.77px]"
              >
                <div
                  className="w-full flex items-center self-stretch font-normal gap-[21.77px] text-[rgba(34,39,52,1)]"
                >
                  <div
                    className="flex items-center w-[593.9924926757812px] gap-[21.77px]"
                  >
                    <div
                      className="border-solid w-[27.21804428100586px] h-[27.22px] border-[2.72px] border-[rgba(241,243,245,1)] rounded-[8.17px]"
                     />
                    <p
                      className="m-0 text-[21.77px] leading-[32.66165542602539px]"
                    >
                      Maxwell and Jessica to brainstorm marketing strategy
                    </p>
                  </div>
                </div>
                <div
                  className="w-full flex items-center self-stretch font-normal gap-[21.77px] text-[rgba(34,39,52,1)]"
                >
                  <div
                    className="flex items-center w-[660.9924926757812px] gap-[21.77px]"
                  >
                    <div
                      className="border-solid w-[27.21804428100586px] h-[27.22px] border-[2.72px] border-[rgba(241,243,245,1)] rounded-[8.17px]"
                     />
                    <p
                      className="m-0 text-[21.77px] leading-[32.66165542602539px]"
                    >
                      Justin to present latest product updates to engineering team
                    </p>
                  </div>
                </div>
                <div
                  className="w-full flex items-center self-stretch font-normal gap-[21.77px] text-[rgba(34,39,52,1)]"
                >
                  <div
                    className="flex items-center w-[583.9924926757812px] gap-[21.77px]"
                  >
                    <div
                      className="border-solid w-[27.21804428100586px] h-[27.22px] border-[2.72px] border-[rgba(241,243,245,1)] rounded-[8.17px]"
                     />
                    <p
                      className="m-0 text-[21.77px] leading-[32.66165542602539px]"
                    >
                      Jessica to walk through storyboard with design team
                    </p>
                  </div>
                </div>
                <div
                  className="w-full flex items-center self-stretch font-semibold gap-[21.77px] text-[rgba(164,170,178,1)]"
                >
                  <div
                    className="flex items-center w-[91.99247741699219px] gap-[21.77px]"
                  >
                    <div className="relative w-[27.22px] h-[27.22px]">
                      <Add type="TYPE1" />
                    </div>
                    <p
                      className="m-0 text-[21.77px] leading-[32.66165542602539px]"
                    >
                      Add
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute right-0 bottom-0 w-[1051px] left-[34.64%] top-[61.54%] bg-gradient-to-b from-[rgba(218,250,227,1)] to-[rgba(240,253,244,1)] overflow-clip h-[600px] rounded-[60px]"
          >
            <div
              className={`text-center font-semibold font-['Inter'] text-[rgba(34,39,52,1)]`}
            >
              <p
                className="absolute text-3xl leading-9 m-0 left-[227px] top-[60px]"
              >
                Missing a meeting shouldn’t be a problem
              </p>
            </div>
            <div className="text-left">
              <div
                className="absolute bg-white flex flex-col items-start self-stretch w-[599px] left-[226px] top-[139px] drop-shadow-lg gap-[33.22px] h-[1105.176025390625px] rounded-[23.92px] p-[30px]"
              >
                <div
                  className={`font-semibold gap-[16.61px] font-['Inter'] text-[rgba(34,39,52,1)]`}
                >
                  <div className="flex items-center gap-[12.46px]">
                    <div
                      className="flex items-start p-1.5 w-[29.067604064941406px] bg-[rgba(241,243,245,1)] gap-[10.38px] rounded-[20.76px]"
                    >
                      <Text type="TYPE1" text="􀌀" />
                    </div>
                    <p
                      className="m-0 text-[16.61px] leading-[24.915090560913086px]"
                    >
                      Summary
                    </p>
                  </div>
                </div>
                <div className="w-full gap-[16.61px]">
                  <div className="w-full leading-none relative">
                    <p
                      className={`font-semibold inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      Introduction
                      <br />
                    </p>
                    <p
                      className={`font-normal inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      Maxwell opened the meeting by explaining the goal of designing a new meditation app that stands out from the competition, focusing on innovative features and user experience. The team agreed on the importance of understanding the target audience and their needs to ensure the app's success.
                      <br />
                    </p>
                    <p
                      className={`font-semibold inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      <br />
                    </p>
                    <p
                      className={`font-bold inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      Target Audience
                    </p>
                    <p
                      className={`font-normal inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      <br />
                      Lindsey presented market research data, identifying the primary target audience as individuals aged 18-45, with a secondary audience of people above 45 years old. The team acknowledged the need to cater to users with varying meditation experience, from beginners to advanced practitioners.
                      <br />
                    </p>
                    <p
                      className={`font-semibold inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      <br />
                    </p>
                    <p
                      className={`font-semibold inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      App Features
                      <br />
                    </p>
                    <p
                      className={`font-normal inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      Jessica facilitated brainstorming on potential app features, with the team agreeing on the following key features:
                      <br />
                      <ol
                        className={`font-normal font-['Inter'] text-[rgba(34,39,52,1)] [padding-inline-start:1.5em]`}
                      >
                        <li
                          className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                        >
                          <span
                            className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                          >
                            Customizable meditation plans: Users can create personalized plans based on their goals, experience level, and available time.
                            <br />
                          </span>
                        </li>
                        <li
                          className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                        >
                          <span
                            className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                          >
                            Guided meditation sessions: A variety of guided sessions led by experienced instructors, with options for different meditation styles and lengths.
                            <br />
                          </span>
                        </li>
                        <li
                          className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                        >
                          <span
                            className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                          >
                            Progressive learning: Content designed to help users gradually advance in their practice and explore new techniques.
                            <br />
                          </span>
                        </li>
                        <li
                          className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                        >
                          <span
                            className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                          >
                            In-app community: A feature allowing users to connect with other meditators, share experiences, and offer support.
                            <br />
                          </span>
                        </li>
                        <li
                          className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                        >
                          <span
                            className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                          >
                            Gamification: Incorporating elements like streaks, badges, and challenges to motivate users and encourage daily practice.
                            <br />
                          </span>
                        </li>
                        <li
                          className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                        >
                          <span
                            className="m-0 list-decimal text-[16.61px] leading-[28.029478073120117px]"
                          >
                            Analytics and tracking: Users can monitor their progress, view statistics, and set personal milestones.
                            <br />
                          </span>
                        </li>
                      </ol>
                    </p>
                    <p
                      className={`font-normal inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      <br />
                    </p>
                    <p
                      className={`font-bold inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      Conclusion
                      <br />
                    </p>
                    <p
                      className={`font-normal inline m-0 font-['Inter'] text-[16.61px] leading-[28.029478073120117px] text-[rgba(34,39,52,1)]`}
                    >
                      The meeting concluded with the team expressing enthusiasm for the project and a shared commitment to creating a unique and engaging meditation app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`absolute right-0 w-[517px] left-[67.85%] top-[20.51%] bottom-[41.03%] bg-gradient-to-b from-[rgba(255,246,219,1)] to-[rgba(255,249,234,1)] overflow-clip h-[600px] rounded-[60px] font-['Inter']`}
          >
            <p
              className="absolute text-3xl font-semibold leading-9 text-center inline m-0 left-[103px] top-[60px] text-[rgba(34,39,52,1)]"
            >
              Highlighted moments
            </p>
            <div
              className="absolute bg-white inline-flex flex-col items-start self-stretch text-left w-[386.34px] left-[66px] top-[209px] drop-shadow-lg gap-[20.16px] rounded-[20.16px] p-[25px]"
            >
              <div
                className="w-full flex items-start self-stretch gap-[12.6px] text-[rgba(105,112,122,1)]"
              >
                <div
                  className="w-[5.039247035980225px] h-[81.16px] bg-[rgba(241,243,245,1)] rounded-[25.2px]"
                 />
                <div
                  className="py-2.5 flex-1 flex items-start flex-grow w-[0] gap-[12.6px]"
                >
                  <div className="flex-1">
                    <div
                      className="flex-1 leading-none relative w-[318.31243896484375px]"
                    >
                      <p
                        className="font-normal inline m-0 text-[21.42px] leading-[30.23548126220703px]"
                      >
                        {"We should have "}
                      </p>
                      <p
                        className="font-semibold inline m-0 text-[21.42px] leading-[30.23548126220703px]"
                      >
                        fun
                      </p>
                      <p
                        className="font-normal inline m-0 text-[21.42px] leading-[30.23548126220703px]"
                      >
                        {" with the design and "}
                      </p>
                      <p
                        className="font-semibold inline m-0 text-[21.42px] leading-[30.23548126220703px]"
                      >
                        make it pop
                      </p>
                      <p
                        className="font-normal inline m-0 text-[21.42px] leading-[30.23548126220703px]"
                      >
                        !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full flex items-start self-stretch font-semibold gap-[20.16px] text-[rgba(34,39,52,1)]"
              >
                <div
                  className="origin-center w-[30.235483169555664px] h-[30.24px] rounded-[62.99px] [rotate:-1.59deg] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b059efc066cd2674f556187316c00c60addbe09.webp)_center_/_cover]"
                 />
                <div
                  className="flex items-center self-stretch w-[278.8383483886719px] h-[31.06px] gap-[12.6px]"
                >
                  <p
                    className="m-0 text-[20.16px] leading-[30.23548126220703px]"
                  >
                    Maxwell
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`absolute left-0 bottom-0 w-[517px] right-[67.85%] top-[61.54%] bg-gradient-to-b from-[rgba(241,243,245,1)] to-[rgba(249,251,253,1)] overflow-clip h-[600px] rounded-[60px] font-['Inter']`}
          >
            <p
              className="absolute text-3xl font-semibold leading-9 text-center inline m-0 w-[433px] left-[42px] top-[42px] text-[rgba(34,39,52,1)]"
            >
              See who lead the discussion and who listened
            </p>
            <div
              className="absolute left-0 top-0 text-left w-[337.92px] h-[331.09px]"
            >
              <div
                className="px-6 origin-top-left absolute bg-white inline-flex items-center pt-[17px] pb-[17px] w-[256.5601806640625px] left-[35.38%] right-[-11.3%] top-[63.14%] bottom-[9.64%] drop-shadow-lg gap-[13.86px] rounded-[27.73px] [rotate:-5.69deg]"
              >
                <div
                  className="w-[55.45149612426758px] h-[55.45px] rounded-[86.64px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/4e57764010afe423444a771467e7e2441072c542.webp)_center_/_cover]"
                 />
                <p
                  className="font-semibold m-0 text-[27.73px] leading-[41.588623046875px] text-[rgba(34,39,52,1)]"
                >
                  Cara
                </p>
                <div
                  className="flex flex-col items-start font-bold pl-[7px] pr-[7px] pt-[3px] pb-[3px] w-[61.86287307739258px] bg-[rgba(241,243,245,1)] gap-[17.33px] rounded-[10.4px] text-[rgba(105,112,122,1)]"
                >
                  <p
                    className="uppercase m-0 text-[20.79px] tracking-[0.87px] leading-[27.725746154785156px]"
                  >
                    50%
                  </p>
                </div>
              </div>
              <div
                className="px-5 py-3.5 origin-top-left absolute bg-white inline-flex items-center w-[236.88768005371094px] left-[57.71%] right-[-27.81%] top-[94.06%] bottom-[-16.1%] drop-shadow-lg gap-[11.23px] rounded-[22.45px] [rotate:4.69deg]"
              >
                <div
                  className="w-[44.90959548950195px] h-[44.91px] rounded-[70.17px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3da3eadf0f36abbc37f52bceec9a9139a75896e5.webp)_center_/_cover]"
                 />
                <p
                  className="font-semibold m-0 text-[22.45px] leading-[33.682193756103516px] text-[rgba(34,39,52,1)]"
                >
                  Jessica
                </p>
                <div
                  className="px-1.5 flex flex-col items-start font-bold pt-[3px] pb-[3px] w-[49.22739791870117px] bg-[rgba(241,243,245,1)] gap-[14.03px] rounded-[8.42px] text-[rgba(105,112,122,1)]"
                >
                  <p
                    className="uppercase m-0 text-[16.84px] tracking-[0.7px] leading-[22.45479393005371px]"
                  >
                    28%
                  </p>
                </div>
              </div>
              <div
                className="origin-top-left absolute bg-white inline-flex items-center pl-[21px] pr-[21px] pt-[15px] pb-[15px] w-[220.2861328125px] left-[36.19%] right-[-1.38%] top-[131.02%] bottom-[-54.44%] drop-shadow-lg gap-[11.93px] rounded-[23.86px] [rotate:-5.37deg]"
              >
                <div
                  className="w-[47.72805404663086px] h-[47.73px] rounded-[74.58px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/65721004e6ed5d12f13c5e821f3c168d8e150f5f.webp)_center_/_cover]"
                 />
                <p
                  className="font-semibold m-0 text-[23.86px] leading-[35.79603958129883px] text-[rgba(34,39,52,1)]"
                >
                  Josh
                </p>
                <div
                  className="px-1.5 flex flex-col items-start font-bold pt-[3px] pb-[3px] w-[51.93201446533203px] bg-[rgba(241,243,245,1)] gap-[14.92px] rounded-[8.95px] text-[rgba(105,112,122,1)]"
                >
                  <p
                    className="uppercase m-0 text-[17.9px] tracking-[0.75px] leading-[23.86402702331543px]"
                  >
                    22%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute text-left w-[1608px] h-[732px] left-[60px] top-[718px] [background-image:linear-gradient(127deg,_rgba(235,_246,_255,_1),_rgba(255,_251,_239,_1)_35%,_rgba(240,_248,_255,_1)_68%,_rgba(239,_255,_243,_1))] overflow-clip rounded-[60px] font-['Inter'] text-[rgba(34,39,52,1)]`}
      >
        <div>
          <div
            className="absolute w-[1019px] h-[867px] left-[683px] top-[60px] drop-shadow-lg rounded-[22px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/859379ce53204c86d0801c1de8a1616c811cac1b.webp)_center_/_cover]"
           />
        </div>
        <div>
          <div
            className="absolute flex flex-col items-start left-[100px] top-[118px] gap-[50px]"
          >
            <p
              className="font-bold m-0 w-[455px] text-[44px] tracking-[-1.5px] leading-[normal]"
            >
              Recap in one, two, three!
            </p>
            <div className="gap-1.5 flex flex-col items-start">
              <p className="text-lg font-semibold m-0 leading-[normal]">
                Add to Google Chrome
              </p>
              <p
                className="opacity-80 text-lg font-normal m-0 w-[455px] leading-[26px]"
              >
                Recap works with only with browsers running Chrome. Yes, that includes support Arc!
              </p>
            </div>
            <div className="gap-1.5 flex flex-col items-start">
              <p className="text-lg font-semibold m-0 leading-[normal]">
                Connect your meeting apps
              </p>
              <p
                className="opacity-80 text-lg font-normal m-0 w-[455px] leading-[26px]"
              >
                We support Zoom, Google Meet, Microsoft Teams, Webex, and much more!
              </p>
            </div>
            <div className="gap-1.5 flex flex-col items-start">
              <p className="text-lg font-semibold m-0 leading-[normal]">
                That’s really it!
              </p>
              <p
                className="opacity-80 text-lg font-normal m-0 w-[455px] leading-[26px]"
              >
                Next time you take your call using your browser, Recap will be taking notes for you and your team.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute inline-flex flex-col items-center text-center w-[1608px] left-[60px] top-[3273px] gap-[60px] font-['Inter']`}
      >
        <div className="gap-5 flex flex-col items-center">
          <p
            className="font-bold m-0 w-[713px] text-[56px] tracking-[-1.5px] leading-[normal] text-[rgba(34,39,52,1)]"
          >
            Secure, by design
          </p>
          <p
            className="font-normal leading-9 m-0 w-[645px] text-[22px] text-[rgba(105,112,122,1)]"
          >
            Your meeting transcripts are never ready by anyone, and are securely encrypted within Google Chrome.
          </p>
        </div>
        <div
          className="flex flex-col items-center pl-[226px] pr-[226px] pt-[60px] pb-[60px] w-[1605px] bg-gradient-to-b from-[rgba(54,44,77,1)] to-[rgba(9,7,29,1)] overflow-clip gap-[43px] rounded-[60px]"
        >
          <BrowserChromeDark />
        </div>
      </div>
    </div>
  );
}

Landing.defaultProps = {
  className: "",
  style: {},
};

interface LandingProps {
  className: string;
  style: Object;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
