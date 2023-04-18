import React from 'react'
import listInCircle from '../../../assets/img/listInCircle.svg'
import { ThumbsDown, ThumbsUp } from '../../../components/buttons'

export default function Summary() {
  return (
    <>
      <div className="flex justify-between mb-[34px]">
        <div className="flex gap-[12px]">
          <img src={listInCircle} alt="" />
          <div className="font-semibold">Summary</div>
        </div>
        <div className="flex gap-[12px]">
          <ThumbsDown />
          <ThumbsUp checked />
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-[34px] sm:mb-[82px] mb-[63px]">
        <div>
          <div className="font-semibold">Introduction</div>
          <div>
            Maxwell opened the meeting by explaining the goal of designing a new meditation app that stands out from the
            competition, focusing on innovative features and user experience. The team agreed on the importance of
            understanding the target audience and their needs to ensure the app's success.
          </div>
        </div>
        <div>
          <div className="font-semibold">Target Audience</div>
          <div>
            Lindsey presented market research data, identifying the primary target audience as individuals aged 18-45,
            with a secondary audience of people above 45 years old. The team acknowledged the need to cater to users
            with varying meditation experience, from beginners to advanced practitioners.
          </div>
        </div>
        <div>
          <div className="font-semibold">App Features</div>
          <div>
            Jessica facilitated brainstorming on potential app features, with the team agreeing on the following key
            features:
            <br />
            1. Customizable meditation plans: Users can create personalized plans based on their goals, experience
            level, and available time.
            <br />
            2. Guided meditation sessions: A variety of guided sessions led by experienced instructors, with options for
            different meditation styles and lengths.
            <br />
            3. Progressive learning: Content designed to help users gradually advance in their practice and explore new
            techniques.
            <br />
            4. In-app community: A feature allowing users to connect with other meditators, share experiences, and offer
            support.
            <br />
            5. Gamification: Incorporating elements like streaks, badges, and challenges to motivate users and encourage
            daily practice.
            <br />
            6. Analytics and tracking: Users can monitor their progress, view statistics, and set personal milestones.
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
    </>
  )
}
