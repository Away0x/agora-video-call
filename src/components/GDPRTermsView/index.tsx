import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function Content({ onScroll }: {
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      style={{overflowY: 'auto', height: '20rem'}}
      onScroll={onScroll}>
      <p>1. ACCEPTANCE OF AGORA PLATFORM TERMS AND CONDITIONS</p>
      <p>
        These terms and conditions (“Terms”) govern your access to the
        information contained on the Agora website (the “Website”), use of the
        Agora application program interface(s) (API(s)), sample software code,
        and other related materials provided or made available by Agora (the
        “Platform”) that enable you to implement the Agora live video platform
        services offered by Agora (the “Service”) on one or more website(s), web
        application(s), or mobile application(s) owned and controlled by you
        (“Your Product”).
      </p>
      <p>
        “Agora”, “we”, “us”, “our”, and similar means Agora Lab, Inc. as the
        context requires.
      </p>
      <p>
        “You” or “your” means you, the person who has downloaded and is using or
        uses the Platform and Service and is the licensee under these Terms, or
        the employer or other entity on whose behalf you are acting.
      </p>
      <p>
        In order to use the Website, Platform, and Services, you are required to
        accept and to agree to be bound by these Terms. You agree to incorporate
        these Terms into Your Products and ensure that your customers adhere to
        these Terms.
      </p>
      <p>
        We reserve the right to change, modify, or update the Platform at any
        time, to impose additional restrictions or limitations on the Service
        (including, without limitation, the maximum period of time that data or
        other content will be retained by the Service and the maximum storage
        space that will be allotted on Agora’s servers on your behalf), or to
        change, modify or update the fees charged for all or a portion of the
        Service. You agree that Agora has no responsibility or liability for the
        deletion or failure to store any data or other content maintained or
        transmitted by the Service. Agora may decide what features to include in
        the Service and whether to make them optional or mandatory. You further
        acknowledge that Agora reserves the right to change these general
        practices and limits at any time, in its sole discretion, with or
        without notice.
      </p>
      <p>
        We also reserve the right to change, modify or update the Terms at any
        time. If we revise the Terms, we will post the revised Terms on our
        Website, and you consent to receiving notice of any changes through such
        posting. If required by law, Agora will also provide you notice of
        changes as provided in Section 18. If you do not agree to the revisions,
        you must cease to use the Platform and remove the Service from Your
        Product. Your continued use of the Platform or use of the Service on
        Your Product after the posting of the revised Terms means that you have
        accepted the new Terms.
      </p>
      <p>2. API KEY</p>
      <p>
        You consent to the collection and processing of your personal
        information in order to provide you an application programming interface
        (“API”) key. If you share your API key with any person, you (and not
        Agora) are responsible for any actions that person may take. If you
        believe that someone has used your API key without your permission,
        contact us at support@Agora.io.
      </p>
      <p>3. ELIGIBILITY AND AUTHORITY</p>
      <p>
        If you are signing up for the Platform and the Service on behalf of a
        company, you represent that you are duly authorized to represent such
        company and accept the Terms on behalf of such company. If you are
        entering into these Terms on behalf of your company, the terms “you” and
        “your” in these Terms mean your company and all of its employees. If you
        are entering into these Terms on your own behalf, you agree that you are
        personally bound by these Terms. In such cases, the terms “you” and
        “your” mean you.
      </p>
      <p>4. LICENSE</p>
      <p>
        a) Subject to your compliance with these Terms and with the payment
        requirements for the Services, Agora grants you a limited,
        non-exclusive, non-sublicensable, revocable, non-transferable license to
        use the Platform in order to display, interface and implement the
        Service on Your Product, solely in accordance with the terms and
        conditions of these Terms. You may not install or use the Platform for
        any other purpose without Agora’s prior written consent.
      </p>
      <p>
        b) You acknowledge that the Platform and the Service are protected by
        copyrights, trademarks, service marks, international treaties, and/or
        other proprietary rights and laws of the U.S. and other countries and
        that all ownership and intellectual property rights in the Platform and
        the Service, including without limitation the trademarks AGORA and all
        related trade names, service marks, logos, domain names and the like
        (“Agora Marks”) do and shall, as between you and Agora, belong
        exclusively to Agora. Except as expressly provided herein, these Terms
        grant you no right, title, license, or interest in any intellectual
        property owned or licensed by Agora, including (but not limited to) the
        Platform, the Service or the Agora Marks.
      </p>
      <p>
        c) You will not sell, transfer, assign, rent, lease, or sublicense
        Agora’s code, the Platform, or the Service to anyone.
      </p>
      <p>
        d) To the extent any features available through the Service are provided
        by other third parties, Agora will make commercially reasonable efforts
        to communicate any policies, requirements, or guidelines of those third
        parties to you. You agree to follow those policies, requirements, or
        guidelines.
      </p>
      <p>5. INTEGRATION OF THE SERVICE ON YOUR PRODUCT</p>
      <p>
        a) The Service includes branding for Agora. You agree not to remove,
        obscure, or alter any branding contained in the Service or any notice of
        any Agora Marks. You may not display Agora Marks on Your Product (or
        otherwise) other than (i) through the display of the Service in
        accordance with the Agora’s written approval and (ii) solely for the
        purpose of disclosing that Your Product has implemented the Service in a
        manner that does not suggest any further relationship or endorsement of
        Your Product by Agora.
      </p>
      <p>
        b) Other than through the API configuration options provided by Agora,
        you may not, nor allow any third party to, alter, change or modify any
        user interface, feature or functionality of the Service without the
        express written consent of Agora.
      </p>
      <p>
        c) You may not nor allow any third party to, copy, reverse engineer,
        decompile or disassemble Agora’s code, the Platform, or the Service, or
        build alternative methods to access the Service other than as provided
        through the Platform (except to the limited extent such restrictions are
        expressly prohibited by applicable statutory law).
      </p>
      <p>
        d) Notwithstanding the foregoing paragraphs of this Section 5, Agora
        licenses certain components of the Platform (e.g. the Agora HTML Embed)
        under a permissive software license.
      </p>
      <p>
        In these cases, you agree not to use any Agora Marks, including those
        originally built into the code we provide, in any modified version of
        that code unless you have entered into a separate written trademark
        license agreement with Agora.
      </p>
      <p>
        e) You agree to update code provided by Agora in connection with
        modifications to the Service or Platform in a reasonable and timely
        fashion after Agora makes them available.
      </p>
      <p>
        f) Agora may update files on our servers that will automatically change
        the functionality of the Platform or Service, and you consent to those
        updates.
      </p>
      <p>
        g) You will not obscure or cover any graphical element of the Service or
        otherwise interfere with the operation of the Platform or Service.
      </p>
      <p>
        h) When users interact with the Service, Agora receives and stores
        certain personally non-identifiable information as well as aggregated
        user information and statistics, such as number of unique users, number
        of sessions and total minutes streamed. Agora may store such information
        itself or such information may be stored by and shared with Agora
        affiliates, agents, service providers and current and prospective
        business partners. Agora uses the foregoing information to provide,
        improve, market and enhance its products and services and for other
        lawful business purposes.
      </p>
      <p>
        i) Agora reserves the right to place volume limitations on access to the
        Platform or Service. Agora reserves the right to cap concurrent video
        chat sessions conducted via Your Product in its discretion.
      </p>
      <p>
        j) These Terms do not entitle you to any support for the Platform or the
        Service, unless you make separate arrangements with Agora and pay all
        fees associated with such support (if any). Any such support provided by
        Agora shall be subject to the Terms as modified by the associated
        support agreement.
      </p>
      <p>
        k) You hereby grant Agora a limited, non-exclusive, non-transferable,
        non-sublicensable license to display your trade names, trademarks,
        service marks, logos, domain names and the like for the purpose of
        promoting or advertising that you use the Platform and the Service.
      </p>
      <p>6. FREE TRIALS</p>
      <p>
        a) In its sole discretion, Agora shall determine whether you are
        eligible for a free trial subscription to the Service.
      </p>
      <p>
        b) We reserve the right to limit the number of free trials per account
        and take actions to prevent abuse.
      </p>
      <p>
        c) You must agree to these Terms in order to be eligible for a free
        trial.
      </p>
      <p>
        d) During the free trial, you are authorized to access and use the
        Platform and Service solely to the extent allowed by Agora.
      </p>
      <p>
        e) Agora is not obligated in any way to provide customer support or
        technical assistance to you during your free trial. Any customer support
        or technical assistance provided is best effort only.
      </p>
      <p>
        f) Agora may change the conditions of the free trial or discontinue it
        entirely at any time without notice.
      </p>
      <p>
        g) During the free trial, you may use the Service for internal
        demonstration purposes only. Agora expressly prohibits you from
        deploying the Service on any public or privately-facing website or
        mobile application for any commercial purpose (a “Live Deployment”)
        during the free trial including without limitation (i) for the purpose
        of generating advertising revenue directly or indirectly from the
        Service, (ii) as an inducement for downloading toolbars, plugins, or
        downloads of any type, (iii) as part of a paid service of any kind, (iv)
        to provide any form of paid or unpaid support to your customers or
        users, or (v) as part of any brand, product, or service promotion or
        communication activity of any kind. Agora reserves the right at any time
        to terminate your free trial and suspend your API key should it
        determine in its sole discretion that your free trial is a Live
        Deployment.
      </p>
      <p>
        h) Agora may contact you from time to time and you will have the option
        to unsubscribe from these communications.
      </p>
      <p>7. FEES</p>
      <p>
        a) To the extent the Services or any portion thereof are made available
        for any fee, you agree to pay all applicable fees (including any minimum
        subscription fees) as set forth in the pricing section of our Website.
        We may increase or add new fees for any existing Service or Service
        feature by giving you notice. All fees payable by you are exclusive of
        federal, state, local and foreign taxes, duties, tariffs, levies,
        withholdings and similar assessments (including without limitation,
        sales taxes, use taxes and value added taxes) (“Additional Charges”),
        and you agree to bear and be responsible for the payment of all such
        Additional Charges, excluding taxes based upon Agora’s net income.
      </p>
      <p>
        b) We may specify the manner in which you will pay any fees, and any
        such payment shall be subject to our general accounts receivable
        policies from time to time in effect. All amounts payable by you under
        this Agreement will be made without setoff or counterclaim and without
        deduction or withholding. If any deduction or withholding is required by
        applicable law, you shall notify us and shall pay such additional
        amounts to us as necessary to ensure that the net amount that we
        receive, after such deduction and withholding, equals the amount we
        would have received if no such deduction or withholding had been
        required.
      </p>
      <p>
        c) Should you have any dispute as to fees associated with your account,
        please contact us at support@Agora.io. within 30 days of the date of the
        activity that generated such dispute, and we will attempt to resolve the
        matter. Any and all refunds issued to resolve such a dispute shall be
        issued as credits to your account, but in no event shall there be any
        cash refunds. Disputes older than 90 days shall not be entitled to any
        refunds or credits.
      </p>
      <p>
        d) Agora monthly subscriptions auto-renew. If you want to cancel your
        renewal you must log in to your account to cancel your subscription at
        least 24 hours before your monthly renewal date. Please contact us if
        you have any questions.
      </p>
      <p>8. ARCHIVING AND STORAGE OF RECORDED COMMUNICATIONS</p>
      <p>
        You acknowledge and understand that there are federal , state, local and
        international laws governing the electronic recording of communications
        and that Agora will not be liable for any illegal use of the Service.
        You should carefully review your own circumstances when deciding whether
        to use the recording features of the Service and it is your
        responsibility to determine if the electronic recordings are legal under
        applicable federal and state laws. You agree to comply, and require that
        your users comply, with all applicable laws, whether federal, state,
        local or international, relating to the privacy of communication for all
        parties to a conversation, including, when required, advising all
        participants in a recorded video chat that the video chat is being
        recorded. In addition, you acknowledge that the storage of recorded
        communications is not guaranteed by Agora and agree that Agora will not
        have any liability whatsoever for any damage, liabilities, losses
        (including any loss of data or profits) or any other consequences that
        you may incur with respect to the loss or deletion of recorded
        communications.
      </p>
      <p>9. PROHIBITED WEBSITES AND CONTENT</p>
      <p>
        You are solely responsible for all content, services and advertising
        available through Your Product. You may not incorporate or use the
        Service in connection with Your Product if Your Product or any of the
        content, services or advertising available on Your Product (or if your
        use of the Service otherwise) falls within any description below:
      </p>
      <p>
        a) Is primarily directed to children aged 13 or under or that has
        children aged 13 or under as a significant proportion of its users;
      </p>
      <p>
        b) Uses the Platform in, or to develop, a product or service that
        competes with products or services offered by Agora;
      </p>
      <p>
        c) Contains adult entertainment, including pornography, erotic content,
        sexually explicit content, prostitution, or any other content not
        appropriate for general audiences;
      </p>
      <p>
        d) Offers or promotes gambling, games of chance involving the payment of
        any consideration, or illegal sweepstakes or contests;
      </p>
      <p>
        e) Promotes, encourages or facilitates any illegal activity, violates
        the law or violates the rights of any third party (including, without
        limitation, intellectual property rights, rights of privacy, or rights
        of personality);
      </p>
      <p>
        f) Constitutes, promotes or is used for the purpose of dealing in:
        spyware, adware, or other malicious programs or code; counterfeit goods;
        items subject to U.S. embargo; unsolicited mass distribution of email;
        multi-level marketing proposals; hate materials;
        hacking/surveillance/interception/descrambling equipment; libelous,
        defamatory, abusive, harassing or otherwise offensive content; body
        parts or bodily fluids; stolen products or items used for theft;
        fireworks, explosives, or hazardous materials; or weapons.
      </p>
      <p>
        If you are unsure whether Your Product meets any description above,
        please email us at support@Agora.io so we can discuss whether your
        proposed use is acceptable.
      </p>
      <p>10. YOUR COMPLIANCE OBLIGATIONS</p>
      <p>
        a) Privacy. If Your Product collects, displays or transmits any personal
        information about your users, you will prominently display a privacy
        policy that complies with all applicable laws and that makes it clear to
        users what data you collect and how you will use, display or share that
        data. You will collect and use user data on Your Product only in
        accordance with your privacy policy and all applicable laws and
        regulations.
      </p>
      <p>
        b) Data Disclosure. Without limiting your obligations under these Terms,
        you will not disclose any user data that you derive from any user’s
        usage of the Service (including without limitation chat logs,
        registration information, contact information or IP addresses) other
        than in compliance with your privacy policy and all applicable legal
        requirements.
      </p>
      <p>
        c) Monitoring and Abuse. Agora does not actively monitor the Service but
        may elect to do so in its discretion. However, Agora will not be
        responsible for any claim based on any commentary or content posted in
        the Service by any user or any actions taken by any user of the Service,
        including any claim that the user content violates any person’s rights
        or is defamatory, libelous or otherwise illegal. You acknowledge that
        you are solely responsible for monitoring and controlling abusive or
        inappropriate behavior in the Service in connection with Your Product.
        You will regularly monitor and respond to reports of abuse, including by
        terminating user accounts where appropriate. You will also ensure that
        Your Product that implement the Service is at all times subject to terms
        and conditions binding on all users that are no less protective of Agora
        and the Platform (and no less restrictive) than these Terms.
      </p>
      <p>
        d) DMCA. You will maintain a policy for removing content and terminating
        repeat infringers that complies with the Digital Millennium Copyright
        Act.
      </p>
      <p>
        e) Content. You are solely responsible for all information, data, text,
        communications, recordings, videos, music, sound, photographs, messages
        or other materials (“content”) that you or any of Your Product users
        upload, store, post, publish, display or otherwise transmit or use
        (hereinafter, “post”) in connection with the Service. The following are
        examples of the kind of content and/or use that is illegal or prohibited
        by Agora. Agora reserves the right to investigate and take appropriate
        legal action against anyone who, in Agora’s sole discretion, violates
        these Terms, including without limitation, removing the offending
        content from the Service, suspending or terminating the access of such
        violators and reporting you to the law enforcement authorities. Without
        limiting the foregoing, you shall not (nor shall you allow any third
        party to) use the Service to:
      </p>
      <p>
        (i) post any content that: is unlawful, harassing, tortious, defamatory,
        pornographic, libelous or invasive of another’s privacy; you do not have
        a right to transmit under any law or under contractual or fiduciary
        relationships; poses or creates a privacy or security risk to any
        person; infringes any intellectual property or other proprietary rights
        of any party; contains software viruses or any other computer code,
        files or programs designed to interrupt, destroy or limit the
        functionality of any computer software or hardware or telecommunications
        equipment; or in the sole judgment of Agora, is objectionable or which
        restricts or inhibits any other person from using or enjoying the
        Service, or which may expose Agora or its Platform users to any harm or
        liability of any type;
      </p>
      <p>
        (ii) interfere with or disrupt the Service or servers or networks
        connected to the Service, or disobey any requirements, procedures,
        policies or regulations of networks connected to the Service;
      </p>
      <p>
        (iii) violate any applicable local, state, national or international
        law, or any regulations having the force of law;
      </p>
      <p>
        (iv) further or promote any criminal activity or enterprise or provide
        instructional information about illegal activities; or
      </p>
      <p>
        (v) obtain or attempt to access or otherwise obtain any materials or
        information through any means not intentionally made available or
        provided for through the Service.
      </p>
      <p>11. SECURITY</p>
      <p>
        a) Contact and Cooperation. You must be reachable during reasonable
        business hours for security questions or concerns through the contact
        information that you provided upon requesting your Platform key.
      </p>
      <p>
        b) Your Network. You will ensure that all networks, computer and
        operating systems, software and other systems used to operate Your
        Product employ security measures to prevent unauthorized access to or
        use of any user data and the Service. You must promptly report any
        security deficiencies in or intrusions to your systems to Agora at
        support@Agora.io.
      </p>
      <p>
        c) Disclaimer. You understand that the operation of the Service,
        including your (or your users’) content, may be unencrypted and involve
        (i) transmissions over various networks; (ii) changes to conform and
        adapt to technical requirements of connecting networks or devices and
        (iii) transmission to Agora’s third party vendors and hosting partners
        to provide the necessary hardware, software, networking, storage, and
        related technology required to operate and maintain the Service.
        Accordingly, you acknowledge that you bear sole responsibility for
        adequate security, protection and backup of your content. Agora will
        have no liability for any unauthorized access or use of any content, or
        any corruption, deletion, destruction or loss of any content. You
        further acknowledge and agree that Agora may preserve content and may
        also disclose content if required to do so by law or in the good faith
        belief that such preservation or disclosure is reasonably necessary to:
        (i) comply with legal process, applicable laws or government requests;
        (ii) enforce these Terms; (iii) respond to claims that any content
        violates the rights of third parties; or (iv) protect the rights,
        property, or personal safety of Agora, its users and the public.
      </p>
      <p>
        d) In addition to our rights to terminate or suspend Services to you as
        described in Section 13 below, you acknowledge that: (i) your access to
        and use of the Services may be suspended for the duration of any
        unanticipated or unscheduled downtime or unavailability of any portion
        or all of the Services for any reason, including as a result of power
        outages, system failures or other interruptions; and (ii) we shall also
        be entitled, without any liability to you, to suspend access to any
        portion or all of the Services at any time, on a Service-wide basis: (a)
        for scheduled downtime to permit us to conduct maintenance or make
        modifications to any Service; (b) in the event of a denial of service
        attack or other attack on the Service or other event that we determine,
        in our sole discretion, may create a risk to the applicable Service, to
        you or to any of our other customers if the Service were not suspended;
        or (c) in the event that we determine that any Service is prohibited by
        applicable law or we otherwise determine that it is necessary or prudent
        to do so for legal or regulatory reasons (collectively, “Service
        Suspensions”).
      </p>
      <p>12. REPRESENTATIONS AND WARRANTIES</p>
      <p>
        You represent and warrant that: (a) you have the right to use,
        reproduce, transmit, copy, publicly display, publicly perform, and
        distribute any content or data on Your Product or that is used or
        incorporated with the Service, and that neither Your Product nor any
        related content violate the rights of any third party (e.g. copyright,
        patent, trademark, or other proprietary right of any person or entity),
        or any applicable regulation or law, including but not limited to any
        export, re-export, or import laws and the laws of any country in which
        your content or service is made available; (b) you have all necessary
        rights and authorizations to agree to these Terms and to use the
        Platform and the Service as contemplated by these Terms; and (c) your
        agreement and compliance with these Terms and use of the Platform and
        the Service will not violate any law, regulation or contractual
        obligation.
      </p>
      <p>13. TERM</p>
      <p>
        (a) You may terminate the Service at any time, for any or no reason, by
        deleting your account, unsubscribing from the Service, and disabling
        Your Product’s access of the Platform and use of the Service.
      </p>
      <p>
        (b) We reserve the right to suspend or terminate your right and license
        to access or use any or all of the Platform and Service or terminate
        these Terms in their entirety (and, accordingly, your right to use the
        Service) at any time, for any or no reason by providing you thirty (30)
        days’ advance notice in accordance with the notice provisions set forth
        in Section 18 below. If Agora determines that providing advance notice
        would negatively impact Agora’s ability to provide Services, Agora may
        suspend your right and license to access or use any or all if the
        Platform and Service or terminate these Terms in their entirety (and,
        accordingly, cease providing all Services to you), with no notice.
      </p>
      <p>
        (c) In addition, We may suspend your right and license to access and use
        the Platform and the Service or terminate these Terms in their entirety
        (and, accordingly, your right to use the Service), for cause effective
        as set forth below:
      </p>
      <p>
        Immediately upon notice if: (i) Agora determines that Your Product is
        harmful to or inconsistent with Agora’s reputation and goodwill, (ii) if
        you violate any provision of the Section 9 or we have reason to believe
        that you have violated any provision of Section 9, (iii) there is an
        unusual spike or increase in your use of the Services for which there is
        reason to believe such traffic or use is fraudulent or negatively
        impacting the operating capability of the Service; (iv) we determine, in
        our sole discretion, that our provision of any of the Services to you is
        prohibited by applicable law, or has become impractical or unfeasible
        for any legal or regulatory reason; or (i) subject to applicable law,
        upon your liquidation, commencement of dissolution proceedings, disposal
        of your assets, failure to continue your business, assignment for the
        benefit of creditors, or if you become the subject of a voluntary or
        involuntary bankruptcy or similar proceeding.
      </p>
      <p>
        Immediately and without notice if you are in default of any payment
        obligation with respect to any of the Services or if any payment
        mechanism you have provided to us is invalid or charges are refused for
        such payment mechanism.
      </p>
      <p>
        Five (5) days following our provision of notice to you if you breach any
        other provision of these Terms and fail, as determined by us, in our
        sole discretion, to cure such breach within such 5-day period.
      </p>
      <p>
        d) Upon our suspension of your use of any Services, in whole or in part,
        for any reason: (i) fees will continue to accrue for any Services that
        are still in use by you, notwithstanding the suspension; (ii) you remain
        liable for all fees, charges and any other obligations you have incurred
        through the date of suspension with respect to the Services; and (iii)
        all of your rights with respect to the Services shall be terminated
        during the period of the suspension.
      </p>
      <p>
        e) Upon any termination of these Terms or your access to the Service,
        for any reason: (i) you remain liable for all fees, charges and any
        other obligations you have incurred through the date of termination with
        respect to the Services; (ii) all rights and licenses granted by Agora
        to you herein shall terminate, (iii) you shall immediately remove the
        Service from Your Product and remove all copies of the Platform from all
        computers, hard drives, networks, and other storage media, (iv) all of
        your content on the Service (if any) may be permanently deleted by
        Agora. Notwithstanding anything to the contrary in these Terms, the
        following provisions shall survive and remain in full force and effect
        following any termination of the parties’ obligations under these Terms:
        Sections 12, 14, 15, 16, 17, 20 and 21.
      </p>
      <p>14. NO AGORA WARRANTIES</p>
      <p>
        AGORA DOES NOT REPRESENT OR WARRANT THAT THE PLATFORM OR THE SERVICE
        COMPLIES WITH ANY LEGAL REQUIREMENTS, IS FREE OF INACCURACIES, ERRORS,
        BUGS, OR INTERRUPTIONS (INCLUDING WITHOUT LIMITATION SERVICE
        SUSPENSIONS), OR IS RELIABLE, ACCURATE, COMPLETE, OR OTHERWISE VALID.
        THE PLATFORM AND THE SERVICE ARE PROVIDED “AS IS” AND “AS AVAILABLE”
        WITH NO WARRANTY, EXPRESS OR IMPLIED, OF ANY KIND AND AGORA EXPRESSLY
        DISCLAIMS ANY AND ALL WARRANTIES AND CONDITIONS, INCLUDING, BUT NOT
        LIMITED TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A
        PARTICULAR PURPOSE, LEGALITY, AVAILABILITY, SECURITY, TITLE AND/OR
        NON-INFRINGEMENT. YOUR USE OF THE PLATFORM AND THE SERVICE ARE AT YOUR
        OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY
        DAMAGE THAT RESULTS FROM THEIR USE, INCLUDING, BUT NOT LIMITED TO, ANY
        DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OR CORRUPTION OF DATA.
      </p>
      <p>15. LIMITATION OF LIABILITY</p>
      <p>
        AGORA SHALL NOT, UNDER ANY CIRCUMSTANCES, BE LIABLE TO YOU, WHETHER
        BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING
        NEGLIGENCE, PRODUCT LIABILITY OR OTHERWISE) (i) FOR ANY LOST PROFITS,
        LOST OR CORRUPTED DATA, COMPUTER FAILURE OR MALFUNCTION, INTERRUPTION OF
        BUSINESS, OR OTHER INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL OR
        EXEMPLARY DAMAGES ARISING OUT OF OR IN CONNECTION WITH USE OF THE
        PLATFORM OR THE SERVICE, ANY SERVICE SUSPENSION, OR ANY OTHER PECUNIARY
        LOSS, WHETHER OR NOT AGORA HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
        DAMAGES, OR (ii) FOR ANY AMOUNT IN EXCESS OF $100.00 OR, IF GREATER, THE
        FEES PAID BY YOU TO AGORA IN THE SIX (6) MONTH PERIOD PRIOR TO THE DATE
        THE CLAIM AROSE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF
        CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR
        INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE
        LIMITATIONS OF SECTION 14 AND THIS SECTION 15 MAY NOT APPLY TO YOU.
      </p>
      <p>16. INDEMNITY AND WAIVER</p>
      <p>
        You agree to indemnify, defend, and hold Agora and its affiliates,
        officers, directors, agents, service providers, partners, and employees
        harmless from any claim, demand or allegation made by any third party,
        and all related losses, damages, liabilities, costs and expenses
        (including attorneys’ fees), that it is any way related to:
      </p>
      <p>* your use of the Platform or the Service;</p>
      <p>* use of the Service by the users of Your Product;</p>
      <p>
        * Your Product, including any content, services or advertisements on
        Your Product or that you incorporate with the Service;
      </p>
      <p>
        * any claims for copyright infringement, defamation, invasion of privacy
        or right of publicity arising out of or in connection with any
        unauthorized use of the Service; and
      </p>
      <p>
        * your breach of any representation, warranty or covenant included in
        these Terms.
      </p>
      <p>
        The foregoing indemnity provision shall be in addition to and not in
        lieu of any other indemnification obligations set forth in these Terms.
      </p>
      <p>17. GENERAL INFORMATION</p>
      <p>
        These Terms govern your use of the Platform and the Service and
        constitute the entire agreement between you and Agora regarding the
        subject matter hereof. These Terms supersede any prior agreements
        between you and Agora relating to your use of the Platform and the
        Service (including, but not limited to, any prior versions of these
        Terms). The failure of Agora to exercise or enforce any right or
        provision of these Terms does not constitute a waiver of that right or
        provision, and a waiver of any default is not a waiver of any other
        default. If a court of competent jurisdiction finds any provision of
        these Terms to be invalid, the provision shall be construed in a manner
        consistent with applicable law to reflect, as nearly as possible, the
        parties’ original intentions as reflected in the provision, and so that
        the other provisions of the Terms remain in full force and effect. All
        headings in the Terms are for convenience only and have no legal or
        contractual effect. The Terms are personal to you and may not be
        assigned or transferred for any reason whatsoever (including, without
        limitation, by operation of law, merger, reorganization, or as a result
        of an acquisition or change of control involving you) without Agora’s
        prior written consent and any action or conduct in violation of the
        foregoing shall be void and without effect. Agora expressly reserves and
        shall have the right to assign the Terms and to delegate any of its
        obligations hereunder.
      </p>
      <p>18. NOTICES</p>
      <p>
        We may send you any notices, including those regarding changes to these
        Terms, to the email address you provided when you requested your API key
        or through any other reasonable means. Any notices to Agora must be sent
        to Agora Lab, 2804 Mission College Blvd. Ste 201, Santa Clara, CA 95054
        via first class or air mail or overnight courier and are deemed given
        upon receipt.
      </p>
      <p>19. DMCA</p>
      <p>
        The Digital Millennium Copyright Act of 1998 (the “DMCA”) provides
        recourse for copyright owners who believe that material appearing on the
        Internet infringes their rights under U.S. copyright law. Agora will
        promptly process and investigate notices of alleged infringement and
        will take appropriate actions under the DMCA and other applicable
        intellectual property laws of claimed copyright infringement should be
        emailed to Agora at support@Agora.io (subject line: “DMCA” Takedown
        Request”). You may also contact us by mail at:
      </p>
      <p>Attention:</p>
      <p>
        DMCA c/o Reggie Yativ, Agora Lab 2804 Mission College Blvd
        <br />
        Stuite 201, Santa Clara, CA 95054
      </p>
      <p>
        Notice: To be effective, the notification must be in writing and contain
        the following information:
      </p>
      <p>
        * an electronic or physical signature of the person authorized to act on
        behalf of the owner of the copyright or other intellectual property
        interest;
      </p>
      <p>
        * a description of the copyrighted work or other intellectual property
        that you claim has been infringed;
      </p>
      <p>
        * a description of where the material that you claim is infringing is
        located on the Service, with enough detail that we may find it;
      </p>
      <p>* your address, telephone number, and email address;</p>
      <p>
        * a statement by you that you have a good faith belief that the disputed
        use is not authorized by the copyright or intellectual property owner,
        its agent, or the law;
      </p>
      <p>
        * a statement by you, made under penalty of perjury, that the above
        information in your Notice is accurate and that you are the copyright or
        intellectual property owner or authorized to act on the copyright or
        intellectual property owner’s behalf.
      </p>
      <p>* your physical or electronic signature;</p>
      <p>
        * identification of the content that has been removed or to which access
        has been disabled and the location at which the content appeared before
        it was removed or disabled;
      </p>
      <p>
        * a statement that you have a good faith belief that the content was
        removed or disabled as a result of mistake or a misidentification of the
        content; and
      </p>
      <p>
        * your name, address, telephone number, and e-mail address, a statement
        that you consent to the jurisdiction of the federal court located within
        the Northern District of California and a statement that you will accept
        service of process from the person who provided notification of the
        alleged infringement. If a counter-notice is received by the Copyright
        Agent, Agora will send a copy of the counter-notice to the original
        complaining party informing that person that it may replace the removed
        content or cease disabling it in 10 business days. Unless the copyright
        owner files an action seeking a court order against the content
        provider, member or user, the removed content may be replaced, or access
        to it restored, in 10 to 14 business days or more after receipt of the
        counter-notice, at Agora’s sole discretion. Repeat Infringer Policy: In
        accordance with the DMCA and other applicable law, Agora has adopted a
        policy of terminating, in appropriate circumstances and at Agora’s sole
      </p>
      <p>
        discretion, the access to the Service of Platform users who are deemed
        to be repeat infringers. Agora may also at its sole discretion limit
        access to the Service and/or terminate the access of any Platform users
        who infringe any intellectual property rights of others, whether or not
        there is any repeat infringement.
      </p>
      <p>
        Counter-Notice: If you believe that the relevant content that was
        removed (or to which access was disabled) is not infringing, or that you
        have the authorization from the copyright owner, the copyright owner’s
        agent, or pursuant to the law, to post and use such content, you may
        send a written counter-notice containing the following information to
        the Copyright Agent:
      </p>
      <p>* your physical or electronic signature;</p>
      <p>
        * identification of the content that has been removed or to which access
        has been disabled and the location at which the content appeared before
        it was removed or disabled;
      </p>
      <p>
        * a statement that you have a good faith belief that the content was
        removed or disabled as a result of mistake or a misidentification of the
        content; and
      </p>
      <p>
        * your name, address, telephone number, and e-mail address, a statement
        that you consent to the jurisdiction of the federal court located within
        the Northern District of California and a statement that you will accept
        service of process from the person who provided notification of the
        alleged infringement.
      </p>
      <p>
        If a counter-notice is received by the Copyright Agent, Agora will send
        a copy of the counter-notice to the original complaining party informing
        that person that it may replace the removed content or cease disabling
        it in 10 business days. Unless the copyright owner files an action
        seeking a court order against the content provider, member or user, the
        removed content may be replaced, or access to it restored, in 10 to 14
        business days or more after receipt of the counter-notice, at Agora’s
        sole discretion.
      </p>
      <p>
        Repeat Infringer Policy: In accordance with the DMCA and other
        applicable law, Agora has adopted a policy of terminating, in
        appropriate circumstances and at Agora’s sole discretion, the access to
        the Service of Platform users who are deemed to be repeat infringers.
        Agora may also at its sole discretion limit access to the Service and/or
        terminate the access of any Platform users who infringe any intellectual
        property rights of others, whether or not there is any repeat
        infringement.
      </p>
      <p>20. EXPORT COMPLIANCE</p>
      <p>
        Agora’s products may be subject to U.S. export and reexport control laws
        and regulations, including the Export Administration Regulations (“EAR”)
        maintained by the U.S. Department of Commerce, trade and economic
        sanctions maintained by the Treasury Department’s Office of Foreign
        Assets Control (“OFAC”), and the International Traffic in Arms
        Regulations (“ITAR”) maintained by the Department of State. You warrant
        that you are (1) not located in Cuba, Iran, North Korea, Sudan, or
        Syria, and (2) not a denied party as specified in the regulations listed
        above.
      </p>
      <p>
        You agree to comply with all applicable export and reexport control laws
        and regulations, including the EAR, trade and economic sanctions
        maintained by OFAC, and the ITAR. Specifically, you covenant that you
        shall not — directly or indirectly — sell, export, reexport, transfer,
        divert, or otherwise dispose of any products, software, or technology
        (including
      </p>
      <p>
        products derived from or based on such technology) received from Agora
        under these Terms to any destination, entity, or person prohibited by
        the laws or regulations of the United States, without obtaining prior
        authorization from the competent government authorities as required by
        those laws and regulations.
      </p>
      <p>
        Furthermore, you agree to indemnify, to the fullest extent permitted by
        law, Agora from and against any fines or penalties that may arise as a
        result of your breach of this provision. This export control clause
        shall survive termination or cancellation of these Terms.
      </p>
      <p>21. GOVERNING LAW</p>
      <p>
        These Terms shall be governed by the internal laws of the State of
        California, without giving effect to principles of conflict of laws. You
        hereby consent to the exclusive jurisdiction and venue of the state
        courts sitting in Santa Clara County, California or the federal courts
        in the Northern District of California to resolve any disputes arising
        under these Terms. In each case these Terms shall be construed and
        enforced without regard to the United Nations Convention on the
        international sales of goods.
      </p>
    </div>
  );
}

function GDPRTermsView({
  onOk,
}: {
  onOk?: (e: React.MouseEvent) => void;
}) {
  const [disabled, setDisabled] = useState(true);

  return (
    <Modal
      closable={false}
      visible={true}
      title={'Terms of Service'}
      width={'50rem'}
      footer={[
        <Button key="submit" type="primary" disabled={disabled} onClick={onOk}>
          I Accept
        </Button>
      ]}
    >
      <Content
        onScroll={event => {
          event.preventDefault();
          event.persist();
          const element = event.target as HTMLDivElement;
          const lastKnownScrollPosition = element.scrollTop;
          const height = element.scrollHeight - element.clientHeight;

          if (height - lastKnownScrollPosition < 100) {
            setDisabled(false);
          }
        }}
      />
    </Modal>
  );
}

export default React.memo(GDPRTermsView);
