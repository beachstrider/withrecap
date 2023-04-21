import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts'
import { SUPPORT_TERMS_CONDITIONS_REQUEST } from '../constants/links'

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout isPublic>
      <div className="container sm:py-[80px] py-[60px]">
        <h2 className="font-semibold sm:mb-[8px] mb-[6px]">TERMS AND CONDITIONS</h2>
        <p>Last Update: April 15, 2023</p>
        <br />
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">ACCEPTANCE</h5>
        <div>
          These Terms and Conditions (the “Terms”) govern your access to System D Labs which is referred to herein as
          the “Service.” System D Labs, Inc (“we,” “us,” or “our”) owns and operates this Service. The term "you" refers
          to any user of the Service.
        </div>
        <br />
        <div>
          These Terms have a force of a legally binding agreement, even if you are simply browsing without intention to
          contact us or register an account. Privacy Policy is another important document that you should familiarize
          yourself with because it describes our practices with respect to your personal information and how we may use,
          share or license your data for third parties. You cannot visit the Service if you do not agree to these Terms
          or the Privacy Policy. Sometimes we modify these Terms. We don’t notify users about every change to the Terms
          but you can see the date of the last update at the top of this page. If you still wish to visit the Service
          after said date, that constitutes your agreement to the updates.
        </div>
        <div></div>
        <div>NEUTRAL VENUE</div>
        <div>
          Venue. We offer a real-time transcription Service that uses advanced speech and speaker recognition technology
          to convert voice conversations from online meetings into easily readable text. In addition to transcription,
          our Service stores data related to your meetings and allows you to share these conversations and transcripts
          with other users. Our role is limited to providing a service on an “as is” basis, to be relied at your own
          risk. We shall not be held liable for what users decide to do with the information presented on our Service,
          third party links and services, users’ transactions, losses and any consequences of reliance on our Service’s
          content.
        </div>
        <div>
          Third Parties. The Service contains references to third party websites, software and services for support. We
          shall not be liable for any third party venues and do not guarantee their performance. We do not monitor all
          content submitted to the Service. We shall not be liable for user submissions or any third party content on
          the Service.
        </div>
        <div>
          Interactive Features. This Service includes interactive features that allow users to communicate with us and
          each other. You agree that, because of the limited nature of such communication, any guidance you may receive
          can be incomplete and may even be misleading. Therefore, any assistance you may receive using any our
          Service’s interactive features does not constitute specific advice and should not be relied upon without
          further competent independent confirmation.
        </div>
        <div>
          DRIVING. DO NOT USE THE SERVICE IN ANY MANNER THAT DISTRACTS YOU FROM DRIVING OR IS ILLEGAL (E.G., IN
          JURISDICTIONS THAT DO NOT ALLOW THE USE OF MOBILE DEVICES WHILE DRIVING). WE SHALL NOT BE LIABLE FOR YOUR
          COMPLIANCE WITH TRAFFIC LAWS.
        </div>
        <div>
          No Professional Advice Whatsoever. Nothing on our Service constitutes legal, career or any other type of
          professional advice on our part. Your use of the Service does not form an attorney-client, employer-employee
          or any other professional relationship between you and us. If you engage anybody listed on our Service, we are
          not a party to your interactions and transactions.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">AFFILIATE DISCLOSURE</h5>
        <div>
          This Service contains affiliate links. We receive a small percentage of a final sale if you buy something
          after following any of those affiliate links. But your trust is of utmost importance to us. That’s why, even
          though we sometimes receive affiliate compensation, we always provide only our honest ratings, reviews,
          opinions or experiences on everything you see on our Service. We review all products we find useful, not just
          the affiliate ones. Any product claim, statistic, quote or other representation about a product or service
          should be independently verified with the vendor, manufacturer, expert, service provider or other party in
          question.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">INTELLECTUAL PROPERTY</h5>
        <div>
          Our Intellectual Property. We and our content suppliers own all intellectual property rights in our Service
          contents, logos, trademarks (whether registered or unregistered) and data. Our IP rights are protected by U.S.
          law and international IP conventions. By using our Service you do not acquire any of our IP rights.
          Nevertheless, you can view and print out this Service’s content for personal use. We reserve all rights that
          are not expressly granted under these Terms or other written agreements between you and us.
        </div>
        <div>
          Your Submissions. We do not claim ownership rights over your content. What’s yours remains yours. However, if
          you upload any content to the public areas of our Service, you state that: (i) you have all necessary rights
          to that content, and (ii) we can display, transmit, modify and distribute this content without compensation to
          you. We can use and implement any feedback that you voluntarily provide, without compensation to you.
        </div>
        <div>
          Copyright Infringement. We take copyright infringement seriously. Report it to us if you see it on our Service
          and we will investigate. In accordance with the Digital Millennium Copyright Act of 1998, the text of which
          may be found on the U.S. Copyright Office website at http://www.copyright.gov/legislation/dmca.pdf, we will
          promptly investigate claims of copyright infringement committed using our Service if such claims are reported
          to support@withrecap.com. If you hold copyright or are authorized to act on behalf of the copyright holder,
          you can report alleged copyright infringements as follows:
        </div>
        <br />
        <div>Identify the copyrighted work that you claim has been infringed.</div>
        <div>Identify the material or link you claim is infringing.</div>
        <div>
          Provide your company affiliation (if applicable), mailing address, telephone number, and, if available, email
          address.
        </div>
        <div>Include both of the following statements in the body of your report:</div>
        <div>
          “I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not
          authorized by the copyright owner, its agent, or the law (e.g., as a fair use)”
        </div>
        <div>
          “I hereby state that the information in this report is accurate and, under penalty of perjury, that I am the
          owner, or authorized to act on behalf of, the owner, of the copyright or of an exclusive right under the
          copyright that is allegedly infringed.”
        </div>
        <div>Provide your full legal name and your electronic or physical signature.</div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">ACCEPTABLE USE POLICY</h5>
        <div>By visiting this Service, you represent and agree that:</div>
        <div>You have a full capacity to enter into a legally binding agreement, such as these Terms.</div>
        <div>
          You will not let others use your account, except as may be explicitly authorized by us. Everything that
          happens under your account is your responsibility. Registering duplicate accounts is not allowed.
        </div>
        <div>
          If you make a submission, it shall be truthful and not misleading. We can terminate any account for writing
          untruthful reviews, comments or other content. We reserve the right to edit, reject or erase anything
          submitted to us without prior notice. You will not send spam, anything defamatory, vulgar, racist, abusive or
          hateful.
        </div>
        <div>
          You will not use our Service in connection with any sexually explicit material, illegal drugs, promotion of
          alcohol to persons under 21 years of age, pirated computer programs, viruses or other harmful code, disclosure
          of anyone's private information without consent, pyramid schemes, multilevel-marketing, "get rich quick"
          offerings, encouragement of violence.
        </div>
        <div>You will ask for our permission before copying anything from our Service for republication.</div>
        <div>You will not use our Service for anything illegal.</div>
        <div>
          We reserve the right to terminate any account using our sole reasonable discretion and without notice or
          liability.
        </div>
        <div>
          Bots, crawlers, indexers, web spiders, harvesters or any similar automatic processes are not allowed on our
          Service.
        </div>
        <div>You will not impede the proper functioning of the Service.</div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">USER-GENERATED CONTENT AND DATA LICENSING</h5>
        <div>
          In order to effectively provide our services and potentially collaborate with third parties, we must maintain
          a certain degree of control over the data you submit to our Service. This encompasses personal information
          related to your account, such as your name, email address, calendar, and other pertinent details. Furthermore,
          we require certain rights over the transcripts of the meetings, as well as all content generated by our
          services, including, but not limited to, meeting summaries, to-do lists, and other derived information
          (collectively, "User-Generated Content").
        </div>
        <div>
          By submitting, posting, or displaying any User-Generated Content on our Service, you grant us a worldwide,
          perpetual, irrevocable, royalty-free, and fully sublicensable license to use, reproduce, adapt, modify,
          publish, translate, create derivative works from, distribute, and display such content in any media, including
          but not limited to sharing or selling the data to third parties, as well as for evaluating potential vendors,
          clients, or customers. You represent and warrant that you own or have the necessary licenses, rights,
          consents, and permissions to grant the foregoing license and that the use of your User-Generated Content by
          System D Labs will not violate any intellectual property rights or any other rights of any third party.
        </div>
        <div>
          Notwithstanding the foregoing, System D Labs is committed to handling your data and User-Generated Content
          responsibly and in accordance with our Privacy Policy. We shall not sell, rent, or share your personal
          information with third parties without your explicit consent, except where required by law, necessary to
          provide and improve our services, or in connection with potential collaborations with third parties as
          described in these Terms.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">CONFIDENTIALITY</h5>
        <div>
          You cannot use or disclose any confidential information relating to our business, users, operations and
          properties for any purpose without our express prior written authorization. You agree to take all reasonable
          measures to protect the secrecy of and avoid disclosure or use of our confidential information.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">BREACH OF THESE TERMS</h5>
        <div>
          If any user violates these Terms or any law, we can, without limitation: (i) ban that user from the Service;
          (ii) disclose the user’s identity to authorities and assist in investigations; (iii) delete or moderate the
          user’s content; (iv) take any other action available under law.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">DISCLAIMER OF WARRANTY; LIMITATION OF LIABILITY</h5>
        <div>
          EVERYTHING WE PROVIDE ON THIS SERVICE IS ON AN “AS IS” BASIS, TO BE RELIED ON AT YOUR OWN RISK. DO YOUR OWN
          RESEARCH BEFORE RELYING ON ANYTHING ON THIS SERVICE. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING
          ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUALITY, NON-INFRINGEMENT, SAFETY,
          FREEDOM FROM DEFECTS OR THAT DEFECTS WILL BE CORRECTED, UNINTERRUPTED, VIRUS-FREE OR ERROR-FREE PERFORMANCE.
        </div>
        <div>
          WE ARE NOT LIABLE FOR INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS AND
          PROPERTY DAMAGE, EVEN IF WE WERE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, NOR SHALL WE BE HELD LIABLE FOR
          DELAY OR FAILURE IN PERFORMANCE RESULTING FROM CAUSES BEYOND OUR REASONABLE CONTROL. IN NO EVENT SHALL OUR
          TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES AND CAUSES OF ACTION EXCEED THE FEES WE RECEIVED FROM YOU, IF
          ANY. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF CERTAIN WARRANTIES, SO THE ABOVE LIMITATIONS IN THIS
          SECTION MAY NOT APPLY TO YOU.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">INDEMNIFICATION</h5>
        <div>
          You agree to defend, indemnify and hold harmless us, our company, its officers, directors, employees and
          agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and
          expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the
          Service; (ii) your violation of any provision of these Terms; (iii) your violation of any third party right,
          including without limitation any copyright, property, or privacy right; or (iv) any claim that one of your
          user submissions caused damage to a third party.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">ARBITRATION; CLASS ACTION WAIVER</h5>
        <div>
          Arbitration. Any controversy or claim arising out of or relating to these Terms, or the breach thereof, shall
          be settled by arbitration administered by the American Arbitration Association in accordance with its
          Commercial Arbitration Rules and judgment on the award rendered by the arbitrator(s) may be entered in any
          court having jurisdiction thereof. The arbitration shall be governed by the laws of the State of California.
          The arbitration will be based on the submission of documents and there shall be no in-person or oral hearing.
          Except as may be required by law, neither a party nor an arbitrator may disclose the existence, content, or
          results of any arbitration hereunder without the prior written consent of both parties. You understand that
          this Section means that, by using the Service, you agree to arbitrate, thus, waiving your rights to sue in
          court and have a jury trial.
        </div>
        <div>
          Class Action Waiver. You acknowledge and agree that you waive your right to participate as a plaintiff or
          class member in any purported class action or representative proceeding. Further, unless both you and us
          otherwise agree in writing, the arbitrator may not consolidate more than one person's claims, and may not
          otherwise preside over any form of any class or representative proceeding.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">GENERAL</h5>
        <div>
          Communications. You agree that we can communicate with you electronically, via SMS, push notifications, email
          or phone calls. All electronic communications shall have the same legal force as if they were in paper form.
        </div>
        <div>
          Relationship of the Parties. You and us are in an independent contractor relationship with respect to each
          other. That means that there is no partnership, joint venture, employer/employee or any similar arrangement.
        </div>
        <div>
          Force Majeure. We will not be liable for failure to perform any obligations to the extent that the failure is
          caused by a Force Majeure event such as, without limitation, act of God, riot, civil disturbances, acts of
          terrorism, fire, explosion, flood, epidemic, national mourning, theft of essential equipment, malicious
          damage, strike, lock out, weather, third party injunction, acts or regulations of national or local
          governments.
        </div>
        <div>
          Hyperlinks. Linking to our Service is allowed, however, it must always be done in a way that does not
          adversely affect our business or implies some form of association when there is none.
        </div>
        <div>
          Severability. If any part of these Terms is found to be unenforceable, then only that particular portion, and
          not the entire Terms, will be unenforceable.
        </div>
        <div>
          Assignment. We have the right, at our sole discretion, to assign or subcontract our rights or obligations
          outlined in these Terms.
        </div>
        <div>
          Waiver. Our failure to exercise any of our rights under these Terms shall not be considered a waiver to
          exercise them in other instances. No waiver shall be effective unless it is in writing signed by us.
        </div>
        <div>
          Prevailing Language. If there are any inconsistencies or conflicts between the English original of these Terms
          and any foreign language translation, the English version shall prevail.
        </div>
        <br />
        <h5 className="font-semibold sm:mb-[8px] mb-[6px]">CONTACT US</h5>
        <div>
          Please address your questions and feedback to&nbsp;
          <Link target="_blank" to={SUPPORT_TERMS_CONDITIONS_REQUEST}>
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
