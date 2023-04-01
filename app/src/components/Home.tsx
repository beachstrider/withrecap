import Button from "components/Button";
import MeetingBrainstorm from "components/MeetingBrainstorm";
import Bubble from "components/Bubble";
import CursorPointer from "components/CursorPointer";

export default function Home(props: HomeProps) {
  return (
    <div
      className={`relative bg-white w-[1728px] h-[1672px] overflow-clip font-['Inter']`}
    >
      <div
        className="px-5 absolute left-0 top-0 bg-white inline-flex justify-between items-center text-left font-semibold w-[1728px] h-[58px]"
      >
        <div
          className="gap-2.5 flex items-center w-[120px] text-[rgba(34,39,52,1)]"
        >
          <p className="leading-5 m-0 text-[15px]">Recap</p>
        </div>
        <div
          className="w-64 gap-2.5 flex items-start text-[rgba(105,112,122,1)]"
        >
          <Button type="SECONDARY_SMALL_TEXT_TYPE" />
          <div
            className="px-2.5 py-1.5 h-8 gap-1.5 flex justify-center items-center w-[121px]"
          >
            <p className="leading-5 m-0 text-[15px]">Past Meetings</p>
          </div>
        </div>
        <div
          className="gap-3 flex justify-end items-center w-[120px] text-[rgba(34,39,52,1)]"
        >
          <div
            className="w-8 h-8 rounded-[300px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/5db2a0f46f1eea0417332d23511b7181b9e96943.webp)_center_/_cover]"
           />
          <p className="leading-5 m-0 text-[15px]">Bobby</p>
        </div>
      </div>
      <div
        className="absolute gap-5 inline-flex items-start left-[264px] top-[138px]"
      >
        <div
          className="w-16 h-16 rounded-[300px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/5db2a0f46f1eea0417332d23511b7181b9e96943.webp)_center_/_cover]"
         />
        <div
          className="py-1 gap-1 flex flex-col justify-center items-start w-[396px]"
        >
          <p
            className="text-2xl font-semibold leading-7 text-left m-0 text-[rgba(34,39,52,1)]"
          >
            Afternoon, Sarah!
          </p>
          <div
            className="gap-3.5 flex flex-col justify-center items-start text-right font-normal text-[rgba(105,112,122,1)]"
          >
            <p className="text-base leading-6 m-0">
              Recap saved you 8 hours of meeting notes this week!
            </p>
            <Button type="SECONDARY_SMALL_TEXT_ICON_TYPE2" />
          </div>
        </div>
      </div>
      <div
        className="absolute inline-flex flex-col items-start text-left w-[1200px] left-[264px] top-[328px] gap-[52px]"
      >
        <div className="w-full gap-6 flex items-center self-stretch">
          <div className="gap-1 flex items-start w-[114px]">
            <div className="gap-1 flex items-start w-[53px]">
              <p
                className="font-semibold leading-5 m-0 text-[15px] text-[rgba(34,39,52,1)]"
              >
                Tue
              </p>
              <div
                className="px-1 py-0.5 gap-2.5 flex flex-col items-start rounded-md font-bold w-[22px] bg-[rgba(241,243,245,1)] text-[rgba(105,112,122,1)]"
              >
                <p
                  className="text-xs leading-4 uppercase m-0 tracking-[0.5px]"
                >
                  21
                </p>
              </div>
            </div>
            <p
              className="opacity-60 font-normal leading-5 m-0 text-[15px] text-[rgba(164,170,178,1)]"
            >
              •
            </p>
            <p
              className="font-semibold leading-5 m-0 text-[15px] text-[rgba(34,39,52,1)]"
            >
              Today
            </p>
          </div>
          <div
            className="flex-1 h-0.5 rounded-sm bg-[rgba(241,243,245,1)]"
           />
        </div>
        <div
          className="w-full flex justify-between items-center self-stretch font-semibold"
        >
          <div className="gap-3 flex flex-col items-start w-[390px]">
            <MeetingBrainstorm />
            <p className="text-xl leading-6 m-0 text-[rgba(34,39,52,1)]">
              🌞 Design Sync
            </p>
            <div
              className="gap-5 flex items-center text-[rgba(105,112,122,1)]"
            >
              <div className="gap-2 w-[142px]">
                <p className="leading-5 m-0 text-[15px]">
                  9:00 AM – 10:30 AM
                </p>
              </div>
              <div className="gap-2 flex items-start w-[228px]">
                <div
                  className="flex justify-center items-center w-[46px] gap-[-2px]"
                >
                  <div
                    className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/eac7c5852322b87b30c87d265b7fbf9b94bcc15a.webp)_center_/_cover]"
                   />
                  <div
                    className="w-6 h-6 border-solid border-4 border-white rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/0078366e89877dae5f30ce129e51c8c0617c81c7.webp)_center_/_cover]"
                   />
                </div>
                <p className="text-base leading-6 m-0">
                  Jessica, Cara, 3 others
                </p>
              </div>
            </div>
          </div>
          <Button type="PRIMARY_NORMAL_TEXT_ICON_TYPE" />
        </div>
        <div
          className="w-full relative flex justify-between items-center self-stretch font-semibold"
        >
          <div className="relative gap-3 flex flex-col items-start w-[302px]">
            <div className="gap-4 text-[rgba(163,90,255,1)]">
              <div className="gap-3 flex items-center">
                <div
                  className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(163,90,255,0.1)] rounded-[20px]"
                >
                  <Bubble text="􀌫" />
                </div>
                <p className="text-base leading-6 m-0">Conference</p>
              </div>
            </div>
            <p className="text-xl leading-6 m-0 text-[rgba(34,39,52,1)]">
              Meditation App Kickoff
            </p>
            <div
              className="gap-5 flex items-center text-[rgba(105,112,122,1)]"
            >
              <div className="gap-2 w-[132px]">
                <p className="leading-5 m-0 text-[15px]">
                  8:15 AM – 8:45 AM
                </p>
              </div>
              <div className="gap-2 flex items-start w-[150px]">
                <div
                  className="flex justify-center items-center w-[46px] gap-[-2px]"
                >
                  <div
                    className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/697ceddf717265551e50268f5b01e69b1e6b8e8b.webp)_center_/_cover]"
                   />
                  <div
                    className="w-6 h-6 border-solid border-4 border-white rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/c23f144cd9a091e61a62c85cf9554db4af5103f3.webp)_center_/_cover]"
                   />
                </div>
                <p className="text-base leading-6 m-0">Jessica, Jeff</p>
              </div>
            </div>
          </div>
          <Button type="SECONDARY_NORMAL_ICON_TYPE" />
          <CursorPointer type="TYPE" />
        </div>
        <div
          className="w-full gap-4 flex items-center self-stretch font-semibold"
        >
          <div className="gap-3 flex flex-col items-start w-[234px]">
            <div className="gap-4 text-[rgba(163,90,255,1)]">
              <div className="gap-3 flex items-center">
                <div
                  className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(163,90,255,0.1)] rounded-[20px]"
                >
                  <Bubble text="􀌫" />
                </div>
                <p className="text-base leading-6 m-0">1:1</p>
              </div>
            </div>
            <p className="text-xl leading-6 m-0 text-[rgba(34,39,52,1)]">
              1:1 Bobby/Jessica
            </p>
            <div
              className="flex items-start gap-[26px] text-[rgba(105,112,122,1)]"
            >
              <div className="gap-2 w-[143px]">
                <p className="text-base leading-6 m-0">
                  7:00 AM – 7:30 AM
                </p>
              </div>
              <div className="gap-2 flex items-start w-[65px]">
                <div className="w-6 gap-[-2px]">
                  <div
                    className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/d272e5e7fa44bc03d9ef12a17c9963874c47cf0b.webp)_center_/_cover]"
                   />
                </div>
                <p className="text-base leading-6 m-0">Max</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full gap-6 flex items-center self-stretch text-[rgba(105,112,122,1)]"
        >
          <div className="gap-2 flex items-start w-[149px]">
            <div className="gap-1 flex items-start w-[53px]">
              <p className="font-semibold leading-5 m-0 text-[15px]">
                Tue
              </p>
              <div
                className="px-1 py-0.5 gap-2.5 flex flex-col items-start rounded-md font-bold w-[22px] bg-[rgba(241,243,245,1)]"
              >
                <p
                  className="text-xs leading-4 uppercase m-0 tracking-[0.5px]"
                >
                  21
                </p>
              </div>
            </div>
            <p className="opacity-60 font-normal leading-5 m-0 text-[15px]">
              •
            </p>
            <p className="font-semibold leading-5 m-0 text-[15px]">
              Yesterday
            </p>
          </div>
          <div
            className="flex-1 h-0.5 rounded-sm bg-[rgba(241,243,245,1)]"
           />
        </div>
        <div
          className="w-full gap-4 flex items-center self-stretch font-semibold"
        >
          <div className="w-60 gap-3 flex flex-col items-start">
            <div className="gap-4 text-[rgba(163,90,255,1)]">
              <div className="gap-4">
                <div className="gap-3 flex items-center">
                  <div
                    className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(163,90,255,0.1)] rounded-[20px]"
                  >
                    <Bubble text="􀌫" />
                  </div>
                  <p className="text-base leading-6 m-0">1:1</p>
                </div>
              </div>
            </div>
            <p className="text-xl leading-6 m-0 text-[rgba(34,39,52,1)]">
              Meeting Title
            </p>
            <div
              className="flex items-start gap-[26px] text-[rgba(105,112,122,1)]"
            >
              <div className="gap-2 w-[146px]">
                <p className="text-base leading-6 m-0">
                  8:30 AM – 9:00 AM
                </p>
              </div>
              <div className="gap-2 flex items-start w-[68px]">
                <div className="w-6 gap-[-2px]">
                  <div
                    className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2b059efc066cd2674f556187316c00c60addbe09.webp)_center_/_cover]"
                   />
                </div>
                <p className="text-base leading-6 m-0">Matt</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full gap-4 flex items-center self-stretch font-semibold"
        >
          <div className="gap-3 flex flex-col items-start w-[292px]">
            <div className="gap-4 text-[rgba(163,90,255,1)]">
              <div className="gap-3 flex items-center">
                <div
                  className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(163,90,255,0.1)] rounded-[20px]"
                >
                  <Bubble text="􀌫" />
                </div>
                <p className="text-base leading-6 m-0">Conference</p>
              </div>
            </div>
            <p className="text-xl leading-6 m-0 text-[rgba(34,39,52,1)]">
              MT-S Brainstorm
            </p>
            <div
              className="gap-5 flex items-center text-[rgba(105,112,122,1)]"
            >
              <div className="gap-2 w-[132px]">
                <p className="leading-5 m-0 text-[15px]">
                  8:15 AM – 8:45 AM
                </p>
              </div>
              <div className="gap-2 flex items-start w-[140px]">
                <div
                  className="flex justify-center items-center w-[46px] gap-[-2px]"
                >
                  <div
                    className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/6f02ef8e2d96727b60ced5dba1b39a2c4ef7cd83.webp)_center_/_cover]"
                   />
                  <div
                    className="w-6 h-6 border-solid border-4 border-white rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/8940b74350323d2d8ca48754e90f92c7954ca35c.webp)_center_/_cover]"
                   />
                </div>
                <p className="text-base leading-6 m-0">Tom, Sarah</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full gap-6 flex items-center self-stretch text-[rgba(105,112,122,1)]"
        >
          <div className="gap-2 w-[53px]">
            <div className="gap-1 flex items-start w-[53px]">
              <p className="font-semibold leading-5 m-0 text-[15px]">
                Tue
              </p>
              <div
                className="px-1 py-0.5 gap-2.5 flex flex-col items-start rounded-md font-bold w-[22px] bg-[rgba(241,243,245,1)]"
              >
                <p
                  className="text-xs leading-4 uppercase m-0 tracking-[0.5px]"
                >
                  21
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 h-0.5 rounded-sm bg-[rgba(241,243,245,1)]"
           />
        </div>
        <div
          className="w-full gap-4 flex items-center self-stretch font-semibold"
        >
          <div className="gap-3 flex flex-col items-start w-[264px]">
            <div className="gap-4 text-[rgba(163,90,255,1)]">
              <div className="gap-3 flex items-center">
                <div
                  className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(163,90,255,0.1)] rounded-[20px]"
                >
                  <Bubble text="􀌫" />
                </div>
                <p className="text-base leading-6 m-0">1:1</p>
              </div>
            </div>
            <p className="text-xl leading-6 m-0 text-[rgba(34,39,52,1)]">
              Meeting Title
            </p>
            <div
              className="flex items-start gap-[26px] text-[rgba(105,112,122,1)]"
            >
              <div className="gap-2 w-[146px]">
                <p className="text-base leading-6 m-0">
                  8:30 AM – 9:00 AM
                </p>
              </div>
              <div className="gap-2 flex items-start w-[92px]">
                <div className="w-6 gap-[-2px]">
                  <div
                    className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3da3eadf0f36abbc37f52bceec9a9139a75896e5.webp)_center_/_cover]"
                   />
                </div>
                <p className="text-base leading-6 m-0">Lindsey</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full gap-4 flex items-center self-stretch font-semibold"
        >
          <div className="gap-3 flex flex-col items-start w-[264px]">
            <div className="gap-4 text-[rgba(163,90,255,1)]">
              <div className="gap-3 flex items-center">
                <div
                  className="w-7 gap-2.5 flex items-start p-1.5 bg-[rgba(163,90,255,0.1)] rounded-[20px]"
                >
                  <Bubble text="􀌫" />
                </div>
                <p className="text-base leading-6 m-0">1:1</p>
              </div>
            </div>
            <p className="text-xl leading-6 m-0 text-[rgba(34,39,52,1)]">
              Meeting Title
            </p>
            <div
              className="flex items-start gap-[26px] text-[rgba(105,112,122,1)]"
            >
              <div className="gap-2 w-[146px]">
                <p className="text-base leading-6 m-0">
                  8:30 AM – 9:00 AM
                </p>
              </div>
              <div className="gap-2 flex items-start w-[92px]">
                <div className="w-6 gap-[-2px]">
                  <div
                    className="w-6 h-6 rounded-[50px] [background:url(https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/3da3eadf0f36abbc37f52bceec9a9139a75896e5.webp)_center_/_cover]"
                   />
                </div>
                <p className="text-base leading-6 m-0">Lindsey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.defaultProps = {
  className: "",
};

interface HomeProps {
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
