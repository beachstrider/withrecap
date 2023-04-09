
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/app">
          <Home {...homeData} />
        </Route>
        <Route path="/">
          <Landing {...landingData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const buttonData = {
    spanText1: "Tue 21 ",
    spanText2: "• ",
    spanText3: "Today",
};

const giftData = {
    children: "􀑊",
};

const button2Data = {
    label: "Help a friend save time",
    giftProps: giftData,
};

const meetingBrainstormData = {
    children: "IN 2 MINS",
};

const faces1Data = {
    photo1: "/img/photo@2x.png",
    photo2: "/img/photo-1@2x.png",
};

const videoData = {
    children: "􀍊",
};

const button3Data = {
    label: "Join Call",
    videoProps: videoData,
};

const faces2Data = {
    photo1: "/img/photo-2@2x.png",
    photo2: "/img/photo-3@2x.png",
};

const shareData = {
    children: "􀰟",
};

const button4Data = {
    shareProps: shareData,
};

const faces22Data = {
    src: "/img/photo-4@2x.png",
};

const faces23Data = {
    src: "/img/photo-5@2x.png",
};

const faces3Data = {
    photo1: "/img/photo-6@2x.png",
    photo2: "/img/photo-7@2x.png",
};

const faces24Data = {
    src: "/img/photo-8@2x.png",
};

const frame221Data = {
    faces2Props: faces24Data,
};

const faces25Data = {
    src: "/img/photo-8@2x.png",
};

const frame222Data = {
    faces2Props: faces25Data,
};

const homeData = {
    recap: "Recap",
    pastMeetings: "Past Meetings",
    frame81: "/img/frame-8@2x.png",
    name1: "Bobby",
    frame82: "/img/frame-8-1@2x.png",
    title: "Afternoon, Sarah!",
    recapSavedYou8Ho: "Recap saved you 8 hours of meeting notes this week!",
    tue: "Tue",
    text2: "•",
    today: "Today",
    designSync: "🌞 Design Sync",
    x900Am1030Am: "9:00 AM – 10:30 AM",
    jessicaCara3Others: "Jessica, Cara, 3 others",
    meditationAppKickoff: "Meditation App Kickoff",
    jessicaJeff: "Jessica, Jeff",
    x11BobbyJessica: "1:1 Bobby/Jessica",
    x700Am730Am: "7:00 AM – 7:30 AM",
    name2: "Max",
    text8: "•",
    yesterday: "Yesterday",
    meetingTitle: "Meeting Title",
    name3: "Matt",
    mtSBrainstorm: "MT-S Brainstorm",
    tomSarah: "Tom, Sarah",
    buttonProps: buttonData,
    button2Props: button2Data,
    meetingBrainstormProps: meetingBrainstormData,
    faces1Props: faces1Data,
    button3Props: button3Data,
    faces2Props: faces2Data,
    button4Props: button4Data,
    faces21Props: faces22Data,
    faces22Props: faces23Data,
    faces3Props: faces3Data,
    frame221Props: frame221Data,
    frame222Props: frame222Data,
};

const google1Data = {
    src: "/img/group@2x.png",
};

const button7Data = {
    label: "Add to Chrome",
    googleProps: google1Data,
};

const user1Data = {
    children: "Maxwell",
};

const user2Data = {
    children: "Jeff",
    className: "user-2",
};

const google2Data = {
    src: "/img/group-1@2x.png",
    className: "google-1",
};

const button221Data = {
    googleProps: google2Data,
};

const frame93Data = {
    className: "frame-9-9",
};

const frame541Data = {
    children: "50%",
};

const frame542Data = {
    children: "22%",
};

const frame543Data = {
    children: "28%",
};

const frame141Data = {
    addToGoogleChrome: "Add to Google Chrome",
    recapWorksWithOnl: "Recap works with only with browsers running Chrome. Yes, that includes support Arc!",
};

const frame142Data = {
    addToGoogleChrome: "Connect your meeting apps",
    recapWorksWithOnl: "We support Zoom, Google Meet, Microsoft Teams, Webex, and much more!",
};

const frame143Data = {
    addToGoogleChrome: "That’s really it!",
    recapWorksWithOnl: "Next time you take your call using your browser, Recap will be taking notes for you and your team.",
};

const google3Data = {
    src: "/img/group-2@2x.png",
    className: "google-2",
};

const button222Data = {
    googleProps: google3Data,
};

const tickData = {
    children: "􀆅",
};

const addData = {
    children: "􀅼",
};

const textData = {
    children: "􀌀",
};

const browserTabWithPlusData = {
    favicon: "/img/favicon@2x.png",
    tab_Name: "Meditation App Kickoff Call",
};

const broswerControlBarData = {
    browserTabWithPlusProps: browserTabWithPlusData,
};

const iconArrowHome2Data = {
    className: "icon-favorite",
};

const toolbarURLControlsData = {
    domainCom: "meet.google.com",
    subdomain: "/",
    imageUserProfile: "/img/image---user-profile@2x.png",
    iconArrowHomeProps: iconArrowHome2Data,
};

const browserChromeLightData = {
    broswerControlBarProps: broswerControlBarData,
    toolbarURLControlsProps: toolbarURLControlsData,
};

const browserChromeDarkData = {
    browserChromeLightProps: browserChromeLightData,
};

const landingData = {
    recap: "Recap",
    signIn: "Sign in",
    photo1: "/img/photo-3@2x.png",
    photo2: "/img/photo-4@2x.png",
    superchargeYourMeetings: "Supercharge your meetings.",
    title: "Meeting notes, on autopilot.",
    withRecapsRealTi: "With Recap’s real-time transcription of Google Meet, Zoom, MS Teams and Webex you'll never miss a word.",
    unlimitedMeetingsForFree: "Unlimited meetings, for free!",
    photo3: "/img/photo@2x.png",
    name1: "Cara",
    photo4: "/img/photo-2@2x.png",
    name2: "Maxwell",
    photo5: "/img/photo-1@2x.png",
    name3: "Jessica",
    recapInOneTwoThree: "Recap in one, two, three!",
    meetingDetail1: "/img/meeting-detail-1.png",
    meetingNotesCanBe: "Meeting notes can be smart, fun, and automated.",
    atLeastThatsHow: "(At least that’s how we feel when we use Recap)",
    soWhatsTheNextStep: "So, what’s the next step?",
    todos: "Todos",
    number: "3",
    name4: "Maxwell and Jessica to brainstorm marketing strategy",
    name5: "Justin to present latest product updates to engineering team",
    name6: "Jessica to walk through storyboard with design team",
    add: "Add",
    highlightedMoments: "Highlighted moments",
    spanText1: "We should have ",
    spanText2: "fun",
    spanText3: " with the design and ",
    spanText4: "make it pop",
    spanText5: "!",
    photo6: "/img/photo-5@2x.png",
    name7: "Maxwell",
    seeWhoLeadTheDis: "See who lead the discussion and who listened",
    photo7: "/img/photo-6@2x.png",
    name8: "Cara",
    percent1: "50%",
    photo8: "/img/photo-7@2x.png",
    name9: "Jessica",
    percent2: "28%",
    photo9: "/img/photo-8@2x.png",
    name10: "Josh",
    percent3: "22%",
    missingAMeetingSh: "Missing a meeting shouldn’t be a problem",
    summary: "Summary",
    secureByDesign: "Secure, by design",
    yourMeetingTranscr: "Your meeting transcripts are never ready by anyone, and are securely encrypted within Google Chrome.",
    buttonProps: button7Data,
    user1Props: user1Data,
    user2Props: user2Data,
    button21Props: button221Data,
    frame9Props: frame93Data,
    frame51Props: frame541Data,
    frame52Props: frame542Data,
    frame53Props: frame543Data,
    frame141Props: frame141Data,
    frame142Props: frame142Data,
    frame143Props: frame143Data,
    button22Props: button222Data,
    tickProps: tickData,
    addProps: addData,
    textProps: textData,
    browserChromeDarkProps: browserChromeDarkData,
};

