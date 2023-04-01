import Button from "components/Button";
import Text from "components/Text";
import Tick from "components/Tick";
import Dots from "components/Dots";
import CursorPointer from "components/CursorPointer";
import Add from "components/Add";
import Star from "components/Star";
import Bubble from "components/Bubble";

export default function MeetingRecap(props: MeetingRecapProps) {
  return (
    <div className="relative bg-white w-[1728px] h-[2672px] overflow-clip">
      <div
        className={`px-5 absolute left-0 top-0 bg-white inline-flex justify-between items-center text-left font-semibold w-[1728px] h-[58px] font-['Inter'] text-[rgba(34,39,52,1)]`}
      >
        <div className="gap-4 flex items-center w-[282px]">
          <div className="gap-2.5 flex items-center w-[87px]">
            <p className="leading-5 m-0 text-[15px]">Recap</p>
          </div>
          <div className="w-px h-8 bg-[rgba(241,243,245,1)]" />
          <p className="leading-5 m-0 text-[15px]">
            Meditation App Kickoff
          </p>
        </div>
        <div className="gap-4 flex justify-end items-center w-[302px]">
          <Button type="SECONDARY_SMALL_ICON_TYPE" />
          <Button type="SECONDARY_SMALL_ICON_TYPE1" />
          <Button type="SECONDARY_SMALL_TEXT_ICON_TYPE1" />
          <div className="w-px h-8 bg-[rgba(241,243,245,1)]" />
          <div className="gap-3 flex items-center w-[90px]">
            <div
              className="w-8 h-8 rounded-[300px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/5db2a0f46f1eea0417332d23511b7181b9e96943.webp)_center_/_cover]"
             />
            <p className="leading-5 m-0 text-[15px]">Bobby</p>
          </div>
        </div>
      </div>
      <div
        className="absolute gap-20 inline-flex flex-col items-start w-[780px] left-[684px] top-[98px]"
      >
        <div
          className="w-full gap-8 flex flex-col items-start self-stretch text-left"
        >
          <div
            className={`gap-4 font-semibold font-['Inter'] text-[rgba(34,39,52,1)]`}
          >
            <div className="gap-3 flex items-center">
              <div
                className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(241,243,245,1)] rounded-[20px]"
              >
                <Text type="TYPE" text="􀌀" />
              </div>
              <p className="text-base leading-6 m-0">Summary</p>
            </div>
          </div>
          <div className="w-full gap-4">
            <div className="w-full leading-none relative">
              <p
                className={`text-base font-semibold inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                Introduction
                <br />
              </p>
              <p
                className={`text-base font-normal inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                Maxwell opened the meeting by explaining the goal of designing a new meditation app that stands out from the competition, focusing on innovative features and user experience. The team agreed on the importance of understanding the target audience and their needs to ensure the app's success.
                <br />
              </p>
              <p
                className={`text-base font-semibold inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                <br />
              </p>
              <p
                className={`text-base font-bold inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                Target Audience
              </p>
              <p
                className={`text-base font-normal inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                <br />
                Lindsey presented market research data, identifying the primary target audience as individuals aged 18-45, with a secondary audience of people above 45 years old. The team acknowledged the need to cater to users with varying meditation experience, from beginners to advanced practitioners.
                <br />
              </p>
              <p
                className={`text-base font-semibold inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                <br />
              </p>
              <p
                className={`text-base font-semibold inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                App Features
                <br />
              </p>
              <p
                className={`text-base font-normal inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                Jessica facilitated brainstorming on potential app features, with the team agreeing on the following key features:
                <br />
                <ol
                  className={`font-normal font-['Inter'] text-[rgba(34,39,52,1)] [padding-inline-start:1.5em]`}
                >
                  <li className="text-base m-0 list-decimal leading-[27px]">
                    <span
                      className="text-base m-0 list-decimal leading-[27px]"
                    >
                      Customizable meditation plans: Users can create personalized plans based on their goals, experience level, and available time.
                      <br />
                    </span>
                  </li>
                  <li className="text-base m-0 list-decimal leading-[27px]">
                    <span
                      className="text-base m-0 list-decimal leading-[27px]"
                    >
                      Guided meditation sessions: A variety of guided sessions led by experienced instructors, with options for different meditation styles and lengths.
                      <br />
                    </span>
                  </li>
                  <li className="text-base m-0 list-decimal leading-[27px]">
                    <span
                      className="text-base m-0 list-decimal leading-[27px]"
                    >
                      Progressive learning: Content designed to help users gradually advance in their practice and explore new techniques.
                      <br />
                    </span>
                  </li>
                  <li className="text-base m-0 list-decimal leading-[27px]">
                    <span
                      className="text-base m-0 list-decimal leading-[27px]"
                    >
                      In-app community: A feature allowing users to connect with other meditators, share experiences, and offer support.
                      <br />
                    </span>
                  </li>
                  <li className="text-base m-0 list-decimal leading-[27px]">
                    <span
                      className="text-base m-0 list-decimal leading-[27px]"
                    >
                      Gamification: Incorporating elements like streaks, badges, and challenges to motivate users and encourage daily practice.
                      <br />
                    </span>
                  </li>
                  <li className="text-base m-0 list-decimal leading-[27px]">
                    <span
                      className="text-base m-0 list-decimal leading-[27px]"
                    >
                      Analytics and tracking: Users can monitor their progress, view statistics, and set personal milestones.
                      <br />
                    </span>
                  </li>
                </ol>
              </p>
              <p
                className={`text-base font-normal inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                <br />
              </p>
              <p
                className={`text-base font-bold inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                Conclusion
                <br />
              </p>
              <p
                className={`text-base font-normal inline m-0 font-['Inter'] leading-[27px] text-[rgba(34,39,52,1)]`}
              >
                The meeting concluded with the team expressing enthusiasm for the project and a shared commitment to creating a unique and engaging meditation app.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`w-full gap-8 flex flex-col items-start self-stretch text-left font-['Inter']`}
        >
          <div className="gap-4 font-semibold">
            <div className="gap-3 flex items-center">
              <div
                className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(64,163,255,0.1)] rounded-[20px]"
              >
                <Tick type="TYPE" text="􀆅" />
              </div>
              <p className="text-base leading-6 m-0 text-[rgba(34,39,52,1)]">
                Todos
              </p>
              <p
                className="text-base leading-6 m-0 text-[rgba(105,112,122,1)]"
              >
                3
              </p>
            </div>
          </div>
          <div
            className="w-full gap-4 flex flex-col items-start self-stretch"
          >
            <div
              className="w-full relative flex justify-between items-center self-stretch font-normal text-[rgba(34,39,52,1)]"
            >
              <div className="w-full">
                <div className="relative gap-4 flex items-center w-[484px]">
                  <div
                    className="w-5 h-5 border-solid border-2 rounded-md border-[rgba(241,243,245,1)]"
                   />
                  <p className="text-base leading-6 m-0">
                    Maxwell and Jessica to brainstorm more on the app features
                  </p>
                </div>
              </div>
              <Dots type="TYPE2" />
              <CursorPointer type="TYPE1" />
            </div>
            <div
              className="w-full gap-4 flex items-center self-stretch font-normal text-[rgba(34,39,52,1)]"
            >
              <div className="gap-4 flex items-center w-[317px]">
                <div
                  className="w-5 h-5 border-solid border-2 rounded-md border-[rgba(241,243,245,1)]"
                 />
                <p className="text-base leading-6 m-0">
                  Justin to present latest to engineering
                </p>
              </div>
            </div>
            <div
              className="w-full gap-4 flex items-center self-stretch font-normal text-[rgba(34,39,52,1)]"
            >
              <div className="gap-4 flex items-center w-[668px]">
                <div
                  className="w-5 h-5 border-solid border-2 rounded-md border-[rgba(241,243,245,1)]"
                 />
                <p className="text-base leading-6 m-0">
                  Jessica to walk through storyboard with design team based on latest target audience
                </p>
              </div>
            </div>
            <div
              className="w-full gap-4 flex items-center self-stretch font-semibold text-[rgba(164,170,178,1)]"
            >
              <div className="gap-4 flex items-center w-[68px]">
                <div className="w-5 h-5 relative">
                  <Add type="TYPE" />
                </div>
                <p className="text-base leading-6 m-0">Add</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full gap-8 flex flex-col items-start self-stretch text-left font-['Inter']`}
        >
          <div className="gap-4 font-semibold">
            <div className="gap-3 flex items-center">
              <div
                className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(255,199,0,0.1)] rounded-[20px]"
              >
                <Star />
              </div>
              <p className="text-base leading-6 m-0 text-[rgba(34,39,52,1)]">
                Highlights
              </p>
              <p
                className="text-base leading-6 m-0 text-[rgba(105,112,122,1)]"
              >
                6
              </p>
            </div>
          </div>
          <div className="w-full gap-5 flex items-start self-stretch">
            <div className="flex-1 gap-5 flex flex-col items-start flex-grow">
              <div
                className="w-full bg-white gap-4 flex flex-col items-start self-stretch rounded-2xl p-5 drop-shadow-lg"
              >
                <div
                  className="w-full flex items-start self-stretch gap-[18px] text-[rgba(105,112,122,1)]"
                >
                  <div
                    className="w-1 h-[88px] bg-[rgba(241,243,245,1)] rounded-[20px]"
                   />
                  <div
                    className="py-2 flex-1 gap-2.5 flex items-start flex-grow"
                  >
                    <div className="flex-1 leading-none relative">
                      <p
                        className="font-normal leading-6 inline m-0 text-[17px]"
                      >
                        {"We should have "}
                      </p>
                      <p
                        className="font-semibold leading-6 inline m-0 text-[17px]"
                      >
                        fun
                      </p>
                      <p
                        className="font-normal leading-6 inline m-0 text-[17px]"
                      >
                        {" with the design and "}
                      </p>
                      <p
                        className="font-semibold leading-6 inline m-0 text-[17px]"
                      >
                        make it pop
                      </p>
                      <p
                        className="font-normal leading-6 inline m-0 text-[17px]"
                      >
                        !
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full gap-4 flex items-start self-stretch font-semibold text-[rgba(34,39,52,1)]"
                >
                  <div className="w-full">
                    <div
                      className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b059efc066cd2674f556187316c00c60addbe09.webp)_center_/_cover]"
                     />
                  </div>
                  <div className="w-full">
                    <div
                      className="h-6 gap-2.5 flex items-center self-stretch w-[221.33334350585938px]"
                    >
                      <p className="text-base leading-6 m-0">Maxwell</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full bg-white gap-4 flex flex-col items-start self-stretch rounded-2xl p-5 drop-shadow-lg"
              >
                <div
                  className="w-full flex items-start self-stretch gap-[18px] text-[rgba(105,112,122,1)]"
                >
                  <div
                    className="w-1 h-28 bg-[rgba(241,243,245,1)] rounded-[20px]"
                   />
                  <div
                    className="py-2 flex-1 gap-2.5 flex items-start flex-grow"
                  >
                    <div className="flex-1 leading-none relative">
                      <p
                        className="font-semibold leading-6 inline m-0 text-[17px]"
                      >
                        What if we removed the header
                      </p>
                      <p
                        className="font-normal leading-6 inline m-0 text-[17px]"
                      >
                        ? How would that look? Just something to consider!
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full gap-4 flex items-start self-stretch font-semibold text-[rgba(34,39,52,1)]"
                >
                  <div className="w-full">
                    <div
                      className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3da3eadf0f36abbc37f52bceec9a9139a75896e5.webp)_center_/_cover]"
                     />
                  </div>
                  <div className="w-full">
                    <div
                      className="gap-2.5 flex flex-col items-start w-[221.33334350585938px]"
                    >
                      <div className="h-6 gap-2.5">
                        <p className="text-base leading-6 m-0">Lindsey</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 gap-5 flex flex-col items-start flex-grow">
              <div
                className="w-full bg-white gap-4 flex flex-col items-start self-stretch rounded-2xl p-5 drop-shadow-lg"
              >
                <div
                  className="w-full flex items-start self-stretch gap-[18px] text-[rgba(105,112,122,1)]"
                >
                  <div
                    className="w-1 h-[136px] bg-[rgba(241,243,245,1)] rounded-[20px]"
                   />
                  <div
                    className="py-2 flex-1 gap-2.5 flex items-start flex-grow"
                  >
                    <div className="flex-1 leading-none relative">
                      <p
                        className="font-normal leading-6 inline m-0 text-[17px]"
                      >
                        {"this is a really "}
                      </p>
                      <p
                        className="font-semibold leading-6 inline m-0 text-[17px]"
                      >
                        long highlight
                      </p>
                      <p
                        className="font-normal leading-6 inline m-0 text-[17px]"
                      >
                        {
                          " that just to show that it could indeed go onto two lines!"
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full gap-4 flex items-start self-stretch font-semibold text-[rgba(34,39,52,1)]"
                >
                  <div className="w-full">
                    <div
                      className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b059efc066cd2674f556187316c00c60addbe09.webp)_center_/_cover]"
                     />
                  </div>
                  <div className="w-full">
                    <div
                      className="h-6 gap-2.5 flex items-center self-stretch w-[221.33334350585938px]"
                    >
                      <p className="text-base leading-6 m-0">Maxwell</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full bg-white gap-4 flex flex-col items-start self-stretch rounded-2xl p-5 drop-shadow-lg"
              >
                <div
                  className="w-full flex items-start self-stretch gap-[18px] text-[rgba(105,112,122,1)]"
                >
                  <div
                    className="w-1 h-[88px] bg-[rgba(241,243,245,1)] rounded-[20px]"
                   />
                  <div
                    className="py-2 flex-1 gap-2.5 flex items-start flex-grow"
                  >
                    <div className="flex-1 leading-none relative">
                      <p
                        className="font-normal leading-6 inline m-0 text-[17px]"
                      >
                        {"We shouldn’t forget to "}
                      </p>
                      <p
                        className="font-semibold leading-6 inline m-0 text-[17px]"
                      >
                        explore a more serious direction
                      </p>
                      <p
                        className="font-normal leading-6 inline m-0 text-[17px]"
                      >
                        !
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full gap-4 flex items-start self-stretch font-semibold text-[rgba(34,39,52,1)]"
                >
                  <div className="w-full">
                    <div
                      className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3da3eadf0f36abbc37f52bceec9a9139a75896e5.webp)_center_/_cover]"
                     />
                  </div>
                  <div className="w-full">
                    <div
                      className="gap-2.5 flex flex-col items-start w-[221.33334350585938px]"
                    >
                      <div className="h-6 gap-2.5">
                        <p className="text-base leading-6 m-0">Lindsey</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 gap-10">
              <div className="w-full gap-7">
                <div
                  className="flex-1 gap-5 flex flex-col items-start flex-grow"
                >
                  <div
                    className="w-full bg-white gap-4 flex flex-col items-start self-stretch rounded-2xl p-5 drop-shadow-lg"
                  >
                    <div
                      className="w-full flex items-start self-stretch gap-[18px] text-[rgba(105,112,122,1)]"
                    >
                      <div
                        className="w-1 h-[88px] bg-[rgba(241,243,245,1)] rounded-[20px]"
                       />
                      <div
                        className="py-2 flex-1 gap-2.5 flex items-start flex-grow"
                      >
                        <div className="flex-1 leading-none relative">
                          <p
                            className="font-normal leading-6 inline m-0 text-[17px]"
                          >
                            {"We should have "}
                          </p>
                          <p
                            className="font-semibold leading-6 inline m-0 text-[17px]"
                          >
                            fun
                          </p>
                          <p
                            className="font-normal leading-6 inline m-0 text-[17px]"
                          >
                            {" with the design and "}
                          </p>
                          <p
                            className="font-semibold leading-6 inline m-0 text-[17px]"
                          >
                            make it pop
                          </p>
                          <p
                            className="font-normal leading-6 inline m-0 text-[17px]"
                          >
                            !
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full gap-4 flex items-start self-stretch font-semibold text-[rgba(34,39,52,1)]"
                    >
                      <div className="w-full">
                        <div
                          className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b059efc066cd2674f556187316c00c60addbe09.webp)_center_/_cover]"
                         />
                      </div>
                      <div className="w-full">
                        <div
                          className="h-6 gap-2.5 flex items-center self-stretch w-[221.33334350585938px]"
                        >
                          <p className="text-base leading-6 m-0">
                            Maxwell
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="px-5 w-full pt-5 pb-0 relative bg-white gap-4 flex flex-col items-start self-stretch rounded-2xl drop-shadow-lg"
                  >
                    <div
                      className="w-full relative flex items-start self-stretch gap-[18px] text-[rgba(105,112,122,1)]"
                    >
                      <div
                        className="w-1 h-[136px] bg-[rgba(241,243,245,1)] rounded-[20px]"
                       />
                      <div
                        className="py-2 flex-1 gap-2.5 flex items-start flex-grow"
                      >
                        <div className="flex-1 leading-none relative">
                          <p
                            className="font-normal leading-6 inline m-0 text-[17px]"
                          >
                            {"this is a really "}
                          </p>
                          <p
                            className="font-semibold leading-6 inline m-0 text-[17px]"
                          >
                            long highlight
                          </p>
                          <p
                            className="font-normal leading-6 inline m-0 text-[17px]"
                          >
                            {
                              " that just to show that it could indeed go onto two lines!"
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="w-full relative gap-4 flex items-start self-stretch font-semibold text-[rgba(34,39,52,1)]"
                    >
                      <div
                        className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/eac7c5852322b87b30c87d265b7fbf9b94bcc15a.webp)_center_/_cover]"
                       />
                      <div className="flex-1 gap-2.5">
                        <div
                          className="w-full h-6 flex justify-between items-center self-stretch"
                        >
                          <p className="text-base leading-6 m-0">
                            Jessica
                          </p>
                          <Dots type="TYPE1" />
                        </div>
                      </div>
                    </div>
                    <CursorPointer type="TYPE2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-full gap-8 flex flex-col items-start self-stretch font-['Inter']`}
        >
          <div className="gap-4 text-left font-semibold">
            <div className="gap-3 flex items-center">
              <div
                className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(241,243,245,1)] rounded-[20px]"
              >
                <Text type="TYPE" text="􀌀" />
              </div>
              <p className="text-base leading-6 m-0 text-[rgba(34,39,52,1)]">
                Transcript
              </p>
              <p
                className="text-base leading-6 m-0 text-[rgba(105,112,122,1)]"
              >
                30 mins
              </p>
            </div>
          </div>
          <div
            className="w-full gap-10 flex flex-col items-start self-stretch"
          >
            <div
              className="w-full gap-4 flex items-start self-stretch text-left"
            >
              <div
                className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b059efc066cd2674f556187316c00c60addbe09.webp)_center_/_cover]"
               />
              <div
                className="flex-1 gap-2.5 flex flex-col items-start flex-grow"
              >
                <div
                  className="h-6 gap-2.5 font-semibold text-[rgba(34,39,52,1)]"
                >
                  <p className="text-base leading-6 m-0">Maxwell</p>
                </div>
                <p
                  className="w-full text-base font-normal leading-6 m-0 text-[rgba(105,112,122,1)]"
                >
                  Alright, everyone, let's get started. Thanks for joining today's meeting. Our main goal today is to discuss the design of a new meditation app that can really stand out from the competition. We want to focus on innovative features and user experience, and make sure our app caters to the needs of our target audience. Before we dive into the details, does anyone have any initial thoughts or ideas?
                </p>
              </div>
            </div>
            <div
              className="w-full gap-4 flex items-start self-stretch text-left"
            >
              <div
                className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/eac7c5852322b87b30c87d265b7fbf9b94bcc15a.webp)_center_/_cover]"
               />
              <div
                className="flex-1 gap-2.5 flex flex-col items-start flex-grow"
              >
                <div
                  className="h-6 gap-2.5 font-semibold text-[rgba(34,39,52,1)]"
                >
                  <p className="text-base leading-6 m-0">Jessica</p>
                </div>
                <p
                  className="w-full text-base font-normal leading-6 m-0 text-[rgba(105,112,122,1)]"
                >
                  I think it's important that we understand who our target audience is and what their specific needs are. That way, we can create an app that truly resonates with them and provides a solution to their problems.
                </p>
              </div>
            </div>
            <div className="w-full gap-4 flex items-start self-stretch">
              <div
                className="w-6 h-6 relative text-center font-bold bg-[rgba(241,243,245,1)] rounded-[40px] text-[rgba(164,170,178,1)]"
              >
                <div>
                  <p
                    className="h-8 w-8 absolute text-xs leading-4 uppercase m-0 left-[calc(50%_-_16px_+_0px)] top-[calc(50%_-_16px_+_0px)] tracking-[0.5px]"
                  >
                    J
                  </p>
                </div>
              </div>
              <div
                className="flex-1 gap-2.5 flex flex-col items-start flex-grow text-left"
              >
                <div
                  className="h-6 gap-2.5 font-semibold text-[rgba(34,39,52,1)]"
                >
                  <p className="text-base leading-6 m-0">Justin</p>
                </div>
                <p
                  className="w-full text-base font-normal leading-6 m-0 text-[rgba(105,112,122,1)]"
                >
                  Absolutely. And I believe that one of the key aspects we should focus on is creating an intuitive and visually appealing user interface, which will make the app more accessible and enjoyable to use.
                </p>
              </div>
            </div>
            <div
              className="w-full gap-4 flex items-start self-stretch text-left"
            >
              <div
                className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b059efc066cd2674f556187316c00c60addbe09.webp)_center_/_cover]"
               />
              <div
                className="flex-1 gap-2.5 flex flex-col items-start flex-grow"
              >
                <div
                  className="h-6 gap-2.5 font-semibold text-[rgba(34,39,52,1)]"
                >
                  <p className="text-base leading-6 m-0">Maxwell</p>
                </div>
                <p
                  className="w-full text-base font-normal leading-6 m-0 text-[rgba(105,112,122,1)]"
                >
                  Great points, everyone. Let's keep those in mind as we discuss the app features, user interface, and other aspects of the project. I'm excited to see what we can come up with!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute gap-6 left-[264px] top-[98px] font-['Inter']`}>
        <div
          className="bg-white gap-7 flex flex-col items-start p-6 w-[340px] drop-shadow-lg rounded-[20px]"
        >
          <div
            className="w-full gap-4 flex flex-col items-start self-stretch text-left"
          >
            <Button type="SECONDARY_SMALL_TEXT_ICON_TYPE3" />
            <div className="gap-6 flex flex-col items-start w-[292px]">
              <div className="gap-4 font-semibold text-[rgba(163,90,255,1)]">
                <div className="gap-3 flex items-center">
                  <div
                    className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(163,90,255,0.1)] rounded-[20px]"
                  >
                    <Bubble text="􀌫" />
                  </div>
                  <p className="text-base leading-6 m-0">Conference</p>
                </div>
              </div>
              <div className="w-full font-semibold gap-[17px]">
                <div className="flex-1 gap-5">
                  <div
                    className="w-full gap-3 flex flex-col items-start self-stretch"
                  >
                    <p
                      className="w-full text-xl leading-6 m-0 text-[rgba(34,39,52,1)]"
                    >
                      Meditation App Kickoff
                    </p>
                    <div
                      className="gap-4 flex items-start text-[rgba(105,112,122,1)]"
                    >
                      <p className="leading-5 m-0 text-[15px]">
                        Tue, Mar 23
                      </p>
                      <p className="leading-5 m-0 text-[15px]">
                        9:00 AM – 10:30 AM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p
                className="w-full font-normal leading-5 m-0 text-[15px] text-[rgba(34,39,52,1)]"
              >
                A single to two lined description of what this meeting is about.
              </p>
            </div>
          </div>
          <div
            className="w-full gap-6 flex flex-col items-start self-stretch"
          >
            <div
              className="w-full h-0.5 rounded-sm bg-[rgba(241,243,245,1)]"
             />
            <div className="gap-1.5 flex flex-col items-start text-left">
              <div className="gap-3 flex items-start font-semibold">
                <p
                  className="text-base leading-6 m-0 text-[rgba(34,39,52,1)]"
                >
                  Participants
                </p>
                <p
                  className="text-base leading-6 m-0 text-[rgba(105,112,122,1)]"
                >
                  3
                </p>
              </div>
              <p
                className="font-normal leading-5 m-0 w-[292px] text-[15px] text-[rgba(105,112,122,1)]"
              >
                Ranked in order of speaker.
              </p>
            </div>
            <div
              className="w-full gap-4 flex flex-col items-start self-stretch"
            >
              <div
                className="w-full flex justify-between items-center self-stretch text-left"
              >
                <div
                  className="gap-3 flex items-center font-semibold w-[107px] text-[rgba(34,39,52,1)]"
                >
                  <div
                    className="w-8 h-8 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b059efc066cd2674f556187316c00c60addbe09.webp)_center_/_cover]"
                   />
                  <p className="text-base leading-6 m-0">Maxwell</p>
                </div>
                <div
                  className="px-1.5 py-1 w-10 gap-2.5 flex flex-col justify-center items-center font-bold bg-[rgba(241,243,245,1)] rounded-[26px] text-[rgba(105,112,122,1)]"
                >
                  <p
                    className="text-xs leading-4 uppercase m-0 tracking-[0.5px]"
                  >
                    50%
                  </p>
                </div>
              </div>
              <div
                className="w-full flex justify-between items-center self-stretch text-left"
              >
                <div
                  className="gap-3 flex items-center font-semibold w-[104px] text-[rgba(34,39,52,1)]"
                >
                  <div
                    className="w-8 h-8 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3da3eadf0f36abbc37f52bceec9a9139a75896e5.webp)_center_/_cover]"
                   />
                  <p className="text-base leading-6 m-0">Lindsey</p>
                </div>
                <div
                  className="px-1.5 py-1 gap-2.5 flex flex-col justify-center items-center font-bold w-[39px] bg-[rgba(241,243,245,1)] rounded-[26px] text-[rgba(105,112,122,1)]"
                >
                  <p
                    className="text-xs leading-4 uppercase m-0 tracking-[0.5px]"
                  >
                    28%
                  </p>
                </div>
              </div>
              <div
                className="w-full flex justify-between items-center self-stretch text-left"
              >
                <div
                  className="gap-3 flex items-center font-semibold w-[102px] text-[rgba(34,39,52,1)]"
                >
                  <div
                    className="w-8 h-8 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/eac7c5852322b87b30c87d265b7fbf9b94bcc15a.webp)_center_/_cover]"
                   />
                  <p className="text-base leading-6 m-0">Jessica</p>
                </div>
                <div
                  className="px-1.5 py-1 gap-2.5 flex flex-col justify-center items-center font-bold w-[39px] bg-[rgba(241,243,245,1)] rounded-[26px] text-[rgba(105,112,122,1)]"
                >
                  <p
                    className="text-xs leading-4 uppercase m-0 tracking-[0.5px]"
                  >
                    22%
                  </p>
                </div>
              </div>
              <div
                className="w-full flex justify-between items-center self-stretch"
              >
                <div className="gap-3 flex items-center w-[91px]">
                  <div
                    className="w-8 h-8 relative text-center font-bold bg-[rgba(241,243,245,1)] rounded-[40px] text-[rgba(164,170,178,1)]"
                  >
                    <p
                      className="h-8 w-8 absolute text-xs leading-4 uppercase m-0 left-[calc(50%_-_16px_+_0px)] top-[calc(50%_-_16px_+_0px)] tracking-[0.5px]"
                    >
                      J
                    </p>
                  </div>
                  <p
                    className="text-base font-semibold leading-6 text-left m-0 text-[rgba(34,39,52,1)]"
                  >
                    Justin
                  </p>
                </div>
                <div
                  className="px-1.5 py-1 w-8 gap-2.5 flex flex-col justify-center items-center text-left font-bold bg-[rgba(241,243,245,1)] rounded-[26px] text-[rgba(105,112,122,1)]"
                >
                  <p
                    className="text-xs leading-4 uppercase m-0 tracking-[0.5px]"
                  >
                    0%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MeetingRecap.defaultProps = {
  className: "",
};

interface MeetingRecapProps {
  className: string;
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
