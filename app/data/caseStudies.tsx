import { ReactNode } from "react";

export type CaseStudy = {
  slug: string;
  title: string;
  clientName: string;
  industry: string;
  location: string;
  beforeSummary: string;
  afterSummary: string;
  fullStory: ReactNode;
  googleReview: {
    rating: number;
    text: string;
    reviewer?: string;
    source?: string;
  };
  publishedDate: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "naresh-coaching-center-website-malad-west",
    title:
      "Naresh Coaching Center: Coaching Classes Website and Local SEO Case Study",
    clientName: "Naresh Coaching Center",
    industry: "Coaching Classes / Education",
    location: "Malad West, Mumbai",
    beforeSummary:
      "No website, weak Google presence, inconsistent branding and 25–30 inquiries per month mostly from word-of-mouth.",
    afterSummary:
      "A focused coaching classes website, improved local SEO visibility and 55–70 inquiries per month during admission season.",
    fullStory: (
      <>
        <h2>Introduction</h2>
        <p>
          Naresh Coaching Center is a mid-sized coaching institute in Malad West,
          Mumbai. For over a decade they have been helping students from Std
          8–10 and junior college with board exams and entrance preparation.
          Parents trusted the founder, Mr. Mehta, because of consistent
          results, small batch attention and long-term relationships built over
          years of teaching.
        </p>
        <p>
          Offline, Naresh Coaching Center functioned like an established institute.
          Online, however, they were almost invisible. Newer coaching brands
          with polished websites and active social media profiles were getting
          more attention, even though they were younger and often less proven.
          Sunrise felt the gap every admission season: they were strong inside
          the classroom, but weak wherever parents started their research – on
          Google.
        </p>

        <h2>Business Situation Before</h2>
        <p>
          When Naresh Coaching Center first reached out to Varun Digital Hub, they
          had no coaching classes website at all. Their digital footprint
          looked like this:
        </p>
        <ul>
          <li>
            A basic Google Maps listing created years ago, with an outdated
            landline number and old logo.
          </li>
          <li>
            An inactive Facebook page that had not been updated for nearly two
            years.
          </li>
          <li>
            No structured website for the coaching institute; information lived
            only in printed pamphlets and long WhatsApp messages.
          </li>
        </ul>
        <p>
          The impact showed clearly in their inquiry numbers. A few years back,
          Sunrise could rely on 60–70 inquiries per month during peak season.
          Recently that number had dropped to around 25–30, despite similar
          teaching quality and results. Parents often mentioned they had
          checked online and found other institutes with “proper websites” and
          “more information” before shortlisting.
        </p>
        <p>
          The emotional frustration was real. Mr. Mehta summed it up in one
          line during our first meeting:
        </p>
        <p>
          “We have been here for years, but online it feels like we don’t
          exist.”
        </p>

        <h2>Hidden Problems They Didn&apos;t Realise</h2>
        <p>
          At first, Sunrise saw this as a single issue: they did not have a
          website. Once we started asking questions, it became clear that there
          were several connected problems beneath that surface-level symptom.
        </p>
        <h3>1. Branding Confusion</h3>
        <p>
          The same institute appeared with different names in different places:
            the board outside used “Naresh Coaching Center,” printed pamphlets
          mentioned “Sunrise Coaching Classes,” and an old Facebook page used
          “Sunrise Academy.” From a parent’s perspective, it was not obvious
          that these were all the same coaching institute in Malad West.
        </p>
        <h3>2. Weak Google Presence</h3>
        <p>
          The Google Business Profile existed but was poorly maintained:
          address and timings were incomplete, contact numbers were outdated
          and there were only two old reviews. There were no photos of
          classrooms, no faculty images and no proof of results. For searches
          like “coaching institute in Malad West” or “tuition classes near
          me,” Sunrise sometimes appeared but looked inactive and
          unprofessional.
        </p>
        <h3>3. No Structured Trust Online</h3>
        <p>
          Naresh Coaching Center had what many institutes don&apos;t – years of
          strong results, long-standing parents who trusted them and alumni
          studying in good colleges. But all of this lived offline in paper
          files, memory and casual conversations. There was no single place
          online where a parent could see:
        </p>
        <ul>
          <li>Batch details and teaching methodology.</li>
          <li>Faculty experience and qualifications.</li>
          <li>Real results, testimonials and success stories.</li>
          <li>Photos of actual classrooms and students.</li>
        </ul>
        <h3>4. Missing Lead Flow</h3>
        <p>
          Even when parents heard good things about Sunrise through
          word-of-mouth, there was no simple digital path from “interested” to
          “enquiry.” Everything depended on phone calls or physical visits.
          During busy school hours, many calls were missed and not all parents
          were comfortable visiting without first seeing more information
          online.
        </p>
        <p>
          In short, the real problem was not only “no website.” It was the
          absence of a structured online story, trust and lead flow.
        </p>

        <h2>How Naresh Coaching Center Found Varun Digital Hub</h2>
        <p>
          Naresh Coaching Center eventually came to Varun Digital Hub through a mix
          of referral and Google search. One of their former students, now an
          entrepreneur, had his business website built by us. When Mr. Mehta
          asked that student how he had set up his online presence, the student
          simply opened Google, searched for “Varun Digital Hub,” showed our
          website and then shared our WhatsApp link.
        </p>
        <p>
          The first WhatsApp message from Naresh Coaching Center was short:
          they wanted a “proper website” and some help “showing up on Google.”
          In our initial call, their expectations became clearer:
        </p>
        <ul>
          <li>Parents should see them as a serious, established institute.</li>
          <li>
            They wanted more inquiries from nearby areas, not just from
            existing word-of-mouth networks.
          </li>
          <li>
            They wanted something simple to manage – not a complicated
            marketing system.
          </li>
        </ul>

        <h2>Strategy &amp; Planning</h2>
        <p>
          Instead of starting with design, we began with a short strategy
          workshop. The aim was to shape a website for the coaching institute
          that supported admissions instead of just “looking modern.”
        </p>
        <p>We focused on three core questions:</p>
        <ol>
          <li>
            <strong>Who decides?</strong> For Naresh Coaching Center, the primary
            decision-maker is the parent, not the student.
          </li>
          <li>
            <strong>What do parents want to know first?</strong> Trust (results
            and experience), clarity (batches, timings, fees range) and support
            (tests, doubt solving, communication).
          </li>
          <li>
            <strong>Where do ideal students come from?</strong> Primarily
            within a few kilometres of Malad West, discovered through Google
            search, referrals and WhatsApp shares.
          </li>
        </ol>
        <p>From this, we built a strategy around four pillars:</p>
        <ul>
          <li>
            A clean, mobile-first <strong>coaching classes website</strong>{" "}
            that answers parent questions quickly.
          </li>
          <li>
            Focused <strong>local SEO for coaching classes</strong>, aimed at
            searches like “coaching institute in Malad West” and “10th coaching
            near me.”
          </li>
          <li>
            Strong trust signals – results, testimonials, faculty profiles and
            real photos.
          </li>
          <li>
            Simple CTAs – Call, WhatsApp and Book a Counselling Session – on
            key pages.
          </li>
        </ul>

        <h2>Work We Did (Step-by-Step)</h2>
        <h3>1. Website Information Architecture</h3>
        <p>
          We structured the site around how parents research coaching
          institutes:
        </p>
        <ul>
          <li>Home</li>
          <li>About the Institute</li>
          <li>Courses &amp; Batches</li>
          <li>Results &amp; Success Stories</li>
          <li>Faculty</li>
          <li>FAQs</li>
          <li>Contact / Location</li>
        </ul>
        <p>
          The Courses &amp; Batches page clearly listed Std 8–10, 11–12 Science
          and specialised batches like crash courses and test series. For each
          programme we highlighted subjects, frequency, teaching style and who
          the batch was ideal for. This turned the website into a practical
          admissions tool instead of a generic brochure.
        </p>
        <h3>2. Branding &amp; Visual Identity</h3>
        <p>
          We standardised the brand name as{" "}
          <strong>“Naresh Coaching Center – Malad West”</strong> and used it
          consistently across the website, Google Business Profile and future
          marketing materials.
        </p>
        <p>Visual decisions included:</p>
        <ul>
          <li>
            A calm blue-and-orange palette to mix trust with energy and focus.
          </li>
          <li>Legible typography optimised for long reading on mobile.</li>
          <li>
            Clean layouts that emphasised clarity and real photos over heavy
            effects.
          </li>
        </ul>
        <h3>3. Mobile Responsiveness</h3>
        <p>
          Because most parents would first open the site from a mobile search
          or a WhatsApp link, we treated mobile as the primary experience.
        </p>
        <ul>
          <li>Card-based layouts for batches and benefits.</li>
          <li>
            A sticky bottom strip on mobile with Call, WhatsApp and Directions
            buttons.
          </li>
          <li>
            Short enquiry forms with only essential fields: name, child&apos;s
            class, phone and preferred batch.
          </li>
        </ul>
        <h3>4. Performance &amp; Speed</h3>
        <p>
          Many parents would browse on mid-range phones and uneven networks, so
          we optimised performance:
        </p>
        <ul>
          <li>Compressed and properly sized images.</li>
          <li>Lazy-loading for below-the-fold media.</li>
          <li>Lightweight scripts and minimal visual clutter.</li>
        </ul>
        <p>
          Pages consistently loaded in under two seconds on a typical 4G
          connection, which improved both user experience and SEO.
        </p>
        <h3>5. SEO and Local SEO Setup</h3>
        <p>
          We implemented SEO fundamentals with a local focus to support the
          coaching classes website:
        </p>
        <ul>
          <li>
            Meta titles and descriptions targeting phrases like “coaching
            institute in Malad West” and “tuition classes in Malad West.”
          </li>
          <li>
            On-page sections such as “Why Parents Choose Naresh Coaching Center” and
            “Areas We Serve Around Malad West.”
          </li>
          <li>Internal links connecting Courses, Faculty, Results and Contact.</li>
        </ul>
        <p>For local SEO for coaching classes specifically we:</p>
        <ul>
          <li>
            Verified and cleaned up the Google Business Profile with accurate
            name, address, phone, timings and categories.
          </li>
          <li>
            Uploaded high-quality photos of classrooms, faculty and batch
            celebrations.
          </li>
          <li>
            Created a simple review link and trained staff to request reviews
            from happy parents.
          </li>
        </ul>
        <h3>6. CTA and Lead Flow</h3>
        <p>
          Rather than building complex funnels, we focused on what parents were
          already comfortable with: phone calls and WhatsApp.
        </p>
        <ul>
          <li>
            Primary CTAs across the site: Call Now, WhatsApp Us and Book a
            Counselling Session.
          </li>
          <li>
            A short contact form for parents who preferred leaving details
            instead of calling immediately.
          </li>
          <li>
            Consistent usage of the WhatsApp number{" "}
            <strong>919372787128</strong> on the website and Google profile.
          </li>
        </ul>

        <h2>Challenges During the Project</h2>
        <h3>Content Hesitation</h3>
        <p>
          Initially, the client wanted extremely short content and was worried
          that parents would not read. We showed how clear and structured
          content reduces confusion and repetitive phone queries. Together, we
          found a balance where each section was concise but answered real
          questions parents asked in counselling calls.
        </p>
        <h3>Limited Photos</h3>
        <p>
          Sunrise had only a few low-resolution photos. Instead of suggesting
          an expensive shoot, we helped them plan a simple half-day session
          using a good smartphone. Staff captured classrooms in action, faculty
          portraits, result boards and group photos. These authentic visuals
          now do a lot of trust-building work online.
        </p>
        <h3>Academic Calendar Pressure</h3>
        <p>
          We started the project close to the new admission cycle and had about
          four weeks before their main marketing push. To manage this, we
          agreed on a “launch core pages first” approach: Home, About, Courses,
          Results, Faculty and Contact. Additional stories and FAQs were
          planned for later without delaying launch.
        </p>
        <h3>Internal Process Change</h3>
        <p>
          The team was used to handling all inquiries only through direct
          calls. Adding form and WhatsApp leads meant new habits: checking
          email regularly, responding to web enquiries quickly and noting which
          batch each enquiry belonged to. We created a simple internal
          checklist so the team felt confident instead of overwhelmed.
        </p>

        <h2>Results After Launch</h2>
        <p>
          Within three months of launching the new coaching classes website and
          improving local SEO for coaching classes, Naresh Coaching Center began to
          see clear, realistic improvements.
        </p>
        <h3>Increase in Inquiries</h3>
        <p>
          During peak admission season, inquiries grew from roughly 25–30 per
          month to around 55–70 per month. Importantly, many of these new
          inquiries mentioned that they first saw Naresh Coaching Center on Google or
          visited the website before calling.
        </p>
        <h3>Better Visibility and First Impression</h3>
        <p>
          For nearby parents searching terms like “coaching institute in Malad
          West,” Sunrise started appearing more consistently in the local map
          pack. Their Google Business Profile now showed up-to-date information
          and real photos instead of looking like an abandoned listing.
        </p>
        <p>
          Phone conversations also changed. Instead of explaining everything
          from scratch, staff could say, “Please open our website and look at
          the Courses and Results section while I talk you through the fees and
          batches.” Parents came into the conversation already aware of the
          institute&apos;s strengths.
        </p>
        <h3>Higher Quality Leads</h3>
        <p>
          Because the website clearly explained batches, expectations and
          teaching style, many misaligned enquiries filtered out before calling.
          The parents who did reach out tended to be more serious, better
          informed and more aligned with Sunrise&apos;s approach.
        </p>

        <h2>Where Naresh Coaching Center Stands Today</h2>
        <p>
          A year after launch, Naresh Coaching Center has a digital presence that
          finally reflects the quality of its work.
        </p>
        <ul>
          <li>Their core batches fill more predictably each academic year.</li>
          <li>
            They no longer feel overshadowed online by newer institutes that
            only “look” bigger.
          </li>
          <li>
            The team actively uses the website and Google profile by sharing
            links, updating photos and inviting parents to leave reviews.
          </li>
        </ul>
        <p>
          Mr. Mehta describes it simply: previously, the quality of their work
          was visible only inside the classroom; now, parents can see it before
          even walking in.
        </p>

        <h2>Key Learnings</h2>
        <p>
          This project highlights a few important lessons for any institute
          thinking about a website for a coaching institute:
        </p>
        <ul>
          <li>
            A coaching classes website should support admissions, not just
            decoration. It must answer real questions parents have and provide
            a clear path to enquire.
          </li>
          <li>
            Local SEO for coaching classes is now basic hygiene. Accurate,
            up-to-date information and photos on Google help serious parents
            discover you.
          </li>
          <li>
            Trust cannot stay locked in files and memories. Results, reviews,
            faculty details and real photos need to be visible online to work
            for you.
          </li>
          <li>
            Strategy and process are as important as visuals. Without a plan
            for responding to digital leads, even a beautiful website can feel
            ineffective.
          </li>
        </ul>
        <p>
          For Naresh Coaching Center, bringing these elements together turned an
          invisible institute into a confident, discoverable coaching brand in
          Malad West – without losing the personal, local touch that made them
          successful in the first place.
        </p>
      </>
    ),
    googleReview: {
      rating: 5,
      text: `“We worked with Varun Digital Hub to build our first proper website for Naresh Coaching Center. Earlier, parents could not find us online and many thought we were a small institute. Varun took the time to understand how we teach, what results we have and what parents usually ask us on phone calls.

The new website explains everything clearly – batches, timing, fees range, results, and our teaching method. Many parents now tell us they visited the website first and then called. Our Google listing is also updated with photos and correct details, which makes us look much more professional.

What we liked most is that the team did not just ‘design a website’. They guided us on how to think about online enquiries and how to follow up properly. It feels like our institute has finally come into the digital world without losing our personal touch.”`,
      reviewer: "Mr. Mehta, Founder – Naresh Coaching Center",
      source: "Google Review",
    },
    publishedDate: "2025-01-15",
  },
];
