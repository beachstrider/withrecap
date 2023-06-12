import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/layouts'
import { SUPPORT_PRIVACY_REQUEST } from '../constants/links'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout isPublic>
      <div className="container sm:py-[80px] py-[60px]">
        <h2 className="font-semibold sm:mb-[8px] mb-[6px]">PRIVACY POLICY</h2>
        <p>Last Update: May 5, 2023</p>
        <br />
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Scope</h5>
        <div>
          We care about your online privacy. This Privacy Policy (the “Privacy Policy”) describes our practices with
          respect to the collection, use, disclosure and protection of your (“you,” “your,” the “user,” or the “user’s”)
          information when you visit Recap (“Recap,” “we,” “us,” and “our”), and any and all of our websites,
          applications, products, and services (collectively the “Service”).
        </div>
        <div>
          Note that this Privacy Policy is only valid on our Service, and not with regard to any third-party networks or
          services, even if they are referenced on our Service. It is your responsibility to familiarize yourself and
          comply with any relevant privacy policies or terms of use of third-party networks or services.
        </div>
        <div>
          If you access our Service in any way, that signifies your legal acceptance of the Privacy Policy. You must
          exit the Service if you do not agree with any provision(s) of this Privacy Policy. We reserve the right to
          change this Privacy Policy at any time in our sole discretion. The effective date of the last update is at the
          top of this page, so visit it occasionally to see if there are any changes.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Collection of User Data</h5>
        <div>
          The types of information we may collect from users of the Service may include, but is not necessarily limited
          to:
        </div>
        <div>• Personal Info: Name, contact details, including e-mail address. </div>
        <div>
          • Meeting Data: When you use our transcription services, we collect and store data related to your online
          meetings, including audio recordings, transcripts, summaries, to-do lists, attendee information, meeting date
          and time, and other generated content.
        </div>
        <div>
          • Communications: If you contact us for any reason, we will receive whatever information you voluntarily
          provide (e.g., your feedback, ratings and reviews).
        </div>
        <div>
          • Your Devices: Device identifiers, phone manufacturer and carrier, browser, IP address, operating system
          version, mobile advertising identifiers, application installations.
        </div>
        <div>
          • Service Interaction: We see what content our users access, and when and how they interact with the Service
          content/pages.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Use of Data</h5>
        <div>We use the collected data for the following purposes:</div>
        <div>• To evaluate, customize or improve our offerings to users.</div>
        <div>• To provide the Service and/or information that you have asked for.</div>
        <div>• To send our newsletter, but you can unsubscribe.</div>
        <div>• To respond to a court order, regulatory request or legal process.</div>
        <div>
          • To enforce our rights, carry out our obligations, prevent fraud, and/or facilitate disputes between users.{' '}
        </div>
        <div>• To accomplish any other purpose for which the information was provided.</div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Disclosure of Data</h5>
        <div>
          In addition to sharing your data as described above, we may disclose the collected personal information as
          follows:
        </div>
        <div>
          • In the event there is a sale, merger or other transfer in the ownership of our Service, the successor will
          receive personal information about our Service users along with the assets transferred.
        </div>
        <div>
          • If we decide that disclosure is appropriate to protect the property, safety, or rights of the Service, its
          users or the public.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Cookie Policy</h5>
        <div>
          Cookies are small bits of text data placed on your device when you visit websites. Cookies record data about
          your activity, such as which pages you viewed and what you clicked on. Cookies assist our Service to recognize
          your device when you return. For example, cookies can help us to remember your preferences, username, analyze
          the performance of our Service and recommend content that may be most relevant to your interests.
        </div>
        <div>Here are the reasons we may use cookies:</div>
        <div>
          • Analytics. These type of cookies show us which pages users view, which links are popular, etc. These cookies
          only provide anonymized information that does not identify any individual person. This information is then
          bundled with the similar information from the other users, so that we can analyze the general usage patterns.
        </div>
        <div>
          • Essential cookies. These are necessary to provide you certain services that you have asked for. Without
          essential cookies, our Service would not be able to operate. They are necessary to enable users to navigate
          through the Service and use its main features; e.g., essential cookies identify registered users so that they
          can access member-only areas of the site. Essential cookies keep users logged in. If a subscriber disables
          essential cookies, that subscriber won't be able to get to all of the content that a subscription entitles
          them to. These cookies don't collect information that could be utilized for the purposes of marketing or
          figuring out what places on the internet you have visited.
        </div>
        <div>
          • To improve your browsing experience. This type of cookie enables the site to remember users' preferences and
          settings, such as geographic region or language. They can also be used to restrict the number of times an ad
          is shown, and to remember which forms you have already filled in, so that you don't have to do it again.
        </div>
        <div>
          • To implement tracking technology on our Service. This tracking does not use your personal information; it
          uses deidentified data (i.e., data that cannot be tied specifically to you). We will not combine this data
          with your other personal information without your prior express permission.
        </div>
        <div>
          There is a way to turn off cookies by going to your browser's Help or Settings menu. However, keep in mind
          that disabling cookies may limit your use of the Service and/or delay or affect the way in which it operates.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Data Security</h5>
        <div>
          Only our administrators are allowed to access our Service's password-protected server where your personal
          information is stored. We utilize SSL. However, any transmission of information over the Internet has its
          inherent risks, so we cannot guarantee the absolute security of your personal information. Transmit personal
          information over the Internet at your own risk. We shall not be liable for circumvention of security measures
          or privacy settings on the Service. It is your responsibility to keep your login credentials, if any,
          confidential.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Children's Privacy</h5>
        <div>
          We do not knowingly collect any personal information about children under the age of 13. Our Service is not
          directed to children under the age of 13. If we become aware that a child under 13 has provided any personal
          info, it will be erased from our database as soon as reasonably possible, except where we need to keep the
          information for legal purposes or to notify a parent or guardian. However, portions of this data may remain in
          back-up archives or web logs even after we erase it from our databases. If a parent or guardian believes that
          a child has sent us personal information, they should send us an e-mail right away.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Users' Rights as Google API Services Users</h5>
        <div>
          Because our Service integrates with / uses Google APIs to access Google users' data from time to time, we are
          bound by Google's Limited Use Requirements, which are summarized here.
        </div>
        <div>
          • The Service will only use access to read, write, modify, or control Gmail message bodies (including
          attachments), metadata, headers, and settings to provide a web email client that allows users to compose,
          send, read, and process emails and will not transfer this Gmail data to others unless doing so is necessary to
          provide and improve these features, comply with applicable law, or as part of a merger, acquisition, or sale
          of assets'.
        </div>
        <div>• The Service will not use Gmail data for serving advertisements.</div>
        <div>
          • The Service will not allow humans to read data unless we have your affirmative agreement for specific
          messages, doing so is necessary for security purposes such as investigating abuse, to comply with applicable
          law, or for the Service's internal operations and even then only when the data have been aggregated and
          anonymized.
        </div>
        <div>
          • The Service's use of information received from Google APIs will adhere to the &nbsp;{' '}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Compliance with Google API Services User Data Policy</h5>
        <div>
          System D Labs' use and transfer of information received from Google APIs to any other app will adhere to the
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including Limited Use requirements.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Users' Rights, CCPA</h5>
        <div>
          We will not share your personal information with third parties for their direct marketing purposes to the
          extent that doing so is forbidden by law. If our practices change, we will only change in accordance with
          applicable laws and we will notify you in advance of any such changes. California law requires that operators
          of online services disclose how they respond to a Do Not Track signal. Some browsers have incorporated “Do Not
          Track” features. Most of these features, when turned on, send a signal or preference to the online service
          that a user visits, indicating that the user does not wish to be tracked. At this time, we do not respond to
          Do Not Track signal.
        </div>
        <div>
          You can request disclosure of your information collected by us by writing to the email to the contact address
          provided at the end of this Privacy Policy. We will then provide the requested information, its sources and
          purposes of use, in a portable and easily accessible format within 45 days of the request.
        </div>
        <div>
          You have the right to request deletion of your personal information from our systems by submitting a request
          to the email at the end of this Privacy Policy.
        </div>
        <div>
          You have the right to nondiscrimination and non-retaliation for exercising your rights. That means you cannot
          be denied goods or services, charged different prices, or provided different quality of goods/services for
          asserting your legal rights.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">International Transfer</h5>
        <div>
          We process your personal information in the United States. This is where it will be transferred to in case you
          are located somewhere else. By submitting any personal information to us, you agree to its transfer to and
          processing in the United States.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">EU Users' Rights</h5>
        <div>
          This section of our Privacy Policy applies to the users of our Service who are located within the territorial
          borders of the European Union. We would like to inform you about your GDPR rights and how we safeguard them.
        </div>
        <div>
          Your GDPR rights are to be informed, to access, rectify, erase or restrict the processing of your personal
          information. You have the right to obtain free information about what personal data we have obtained about
          you, where it is stored, for how long, for what purposes it is used, and to whom it was disclosed. You have
          the right to have us, without undue delay, rectify inaccurate personal data concerning you. That means you can
          request we change your personal data in our records, or have your incomplete personal data completed. You have
          the “right to be forgotten,” i.e. to have us delete your personal information, without undue delay, if the
          data is no longer necessary in relation to the purposes for which it was collected. However, GDPR gives us the
          right to refuse erasure if we can demonstrate compelling legitimate grounds for keeping your information.
        </div>
        <div>
          GDPR gives you the right to restrict processing if any of the following applies: (i) If you contest the
          accuracy of your personal data, we will restrict processing it for a period enabling us to verify its
          accuracy; (ii) The processing is unlawful and you oppose its erasure and request instead the restriction of
          its use. (iii) We no longer need your personal data for the purposes of the processing, but you require us to
          restrict processing for the establishment, exercise or defense of legal claims. (iv) You have objected to
          processing pursuant to Article 21(1) of the GDPR pending the verification whether our legitimate grounds
          override yours.
        </div>
        <div>
          Right to data portability. Upon request, we will provide you your personal data in our possession, in a
          structured, commonly-used and machine-readable format. You have the right to transmit that data to another
          controller if doing so does not adversely affect the rights and freedoms of others.
        </div>
        <div>
          Right to object. You can object, on grounds relating your particular situation, at any time, to processing of
          your personal information, if based on point (e) or (f) of Article 6(1) of the GDPR. We will then have to stop
          processing, unless we can demonstrate compelling legitimate grounds for the processing. If you object to the
          processing for direct marketing purposes, we will have to stop processing for these purposes.
        </div>
        <div>
          Right to withdraw consent. GDPR grants you the right to withdraw your earlier given consent, if any, to
          processing of your personal data at any time.
        </div>
        <div>
          Rights related to automated decision making. As a responsible business, we do not rely on any automated
          decision making, such as profiling.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">Accessing and Correcting Your Personal Information</h5>
        <div>
          You can view and edit some of your account information yourself after logging in. If you terminate your
          account with us, we may retain some information for as long as necessary to evaluate Service usage,
          troubleshoot issues, resolve disputes and collect any fees owed. If you have any questions or wish to ask to
          access, modify or delete any of your personal data on our Service, please contact us. Note that we can deny
          your request if we think it would violate any law or cause the information to be incorrect. Contact us with
          any questions at{' '}
          <Link target="_blank" to={SUPPORT_PRIVACY_REQUEST}>
            support@withrecap.com
          </Link>
        </div>
        <div>
          <br />
        </div>
      </div>
    </Layout>
  )
}
