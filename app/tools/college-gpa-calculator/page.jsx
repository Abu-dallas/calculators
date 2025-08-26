import dynamic from "next/dynamic";
import Image from "next/image";
import Script from "next/script";

// Dynamically import the client component with SSR disabled
export const metadata = {
  title:
    "College GPA Calculator: Instantly Track Your GPA Online (2025 Updated)",
  description:
    "Free College GPA Calculator – calculate your GPA in seconds. Supports weighted & unweighted GPA, semester and cumulative GPA, plus easy tracking for all your courses.",
};

const CollegeCPACalculatorClient = dynamic(
  () => import("@/components/CollageGPAcalculator"),
  { ssr: true }
);

export default function CollegeCPACalculatorServer() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[70%] max-sm:w-full mt-12 max-sm:mt-20 p-2">
        <p className=" italic p-1 border w-35 mb-6 text-center border-slate-100 rounded-lg text-slate-800">
          26-August-2025
        </p>
        <h1 className="text-3xl md:text-3xl font-bold text-slate-800 mb-4">
          College GPA Calculator
        </h1>
        <p className="text-lg text-slate-500 max-w-xl mb-6">
          Easily figure out your college GPA with our fast, accurate, and
          user-friendly calculator. Perfect for planning upcoming semesters,
          monitoring your academic progress, or aiming for scholarships and
          graduation goals—this tool gives you the clarity and confidence to
          stay ahead in your studies.
        </p>

        <CollegeCPACalculatorClient />
      </div>
      <div className="w-full items-center justify-center lg:flex">
        <div className="w-[70%] max-sm:w-full py-6 mt-12 px-4">
          <p className="text-2xl font-bold text-black text-center">
            How to Use the College GPA Calculator
          </p>

          {/* Step 1 */}
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col mt-12 items-center justify-center">
              <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                1
              </span>
              <p className="text-slate-800 mt-4 font-semibold text-xl">
                Enter Course Name
              </p>
              <p className="text-slate-700 text-md mt-3">
                Start by typing the <strong>exact course name</strong> for every
                class you are currently taking or have previously completed in
                college or university. This could be a general education subject
                like “English Composition I,” a specialized major requirement
                such as “Microbiology,” or an elective like “Creative Writing
                Workshop.” If you are calculating GPA across multiple courses in
                a semester, remember to click the <strong>Add Course</strong>{" "}
                button after each entry. This ensures that every subject—whether
                it is a lecture, lab session, or elective—counts toward your
                results in the <em>college GPA calculator</em>. The more precise
                and complete your entries are, the more accurate your final GPA
                will be, whether you are using it as a{" "}
                <em>semester GPA calculator</em>,{" "}
                <em>cumulative GPA calculator</em>, or
                <em> university GPA calculator</em>. For example, if you are
                enrolled in both “Physics with Lab” and “Statistics,” entering
                them separately will correctly reflect how each one contributes
                to your academic standing.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex flex-col mt-12 items-center justify-center">
              <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                2
              </span>
              <p className="text-slate-800 mt-4 font-semibold text-xl">
                Enter Credit or Unit Hours
              </p>
              <p className="text-slate-700 text-md mt-3">
                After entering your courses, add the corresponding{" "}
                <strong>credit hours</strong> (sometimes called “units”). These
                numbers represent how much weight a particular class carries in
                your GPA calculation. For example, a 4-credit Biology course has
                a much stronger effect on your GPA than a 1-credit elective such
                as “Intro to Yoga.” If your school uses quarter hours instead of
                semester hours, don’t worry— the{" "}
                <strong>GPA score calculator</strong> adjusts accordingly.
                Always double-check the official course syllabus or registration
                documents to make sure you are entering the correct credit
                hours, because even a small error can change your GPA outcome
                significantly. This step is especially important for weighted
                GPA systems where advanced courses, like honors or AP classes,
                can carry additional points.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col mt-12 items-center justify-center">
              <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                3
              </span>
              <p className="text-slate-800 mt-4 font-semibold text-xl">
                Enter Your Grade
              </p>
              <p className="text-slate-700 text-md mt-3">
                Next, enter the grade you earned—or expect to earn—for each
                course. You can input standard letter grades (A, B+, C-) or
                numerical grades (such as 4.0, 3.7, 2.5), depending on how your
                institution records results. The <em>college GPA calculator</em>{" "}
                automatically converts these values into grade points using the
                standard U.S. grading scale. For example, an A usually equals
                4.0, a B equals 3.0, and so on. If your university follows a
                slightly different scale, you can find the conversion chart on
                your school’s academic website or student handbook. By entering
                grades carefully, the <em>academic GPA calculator</em> will
                provide a precise score whether you are calculating a semester
                average, a cumulative GPA, or a projected GPA for future
                planning.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col mt-12 items-center justify-center">
              <span className="text-2xl font-bold bg-black text-white flex items-center justify-center rounded-full w-12 h-12">
                4
              </span>
              <p className="text-slate-800 mt-4 font-semibold text-xl">
                View Your Result
              </p>
              <p className="text-slate-700 text-md mt-3">
                Once all your course names, credit hours, and grades have been
                entered, the <strong>college GPA calculator</strong> will
                instantly generate your GPA score. The result will appear right
                beneath the <strong>Add Course</strong> button, giving you
                immediate insight into your academic performance. You can use
                this score to track your progress, confirm eligibility for
                scholarships, or qualify for honors such as the Dean’s List.
                What makes this tool especially powerful is its ability to help
                with planning: you can run “what-if” scenarios to see what GPA
                you would need in the next semester to hit your target
                cumulative GPA. Whether you are aiming for graduation
                requirements or scholarship benchmarks, this{" "}
                <em>GPA calculator tool</em> makes academic planning much more
                straightforward and stress-free.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[70%] max-sm:w-full py-6 mt-12 px-4">
        <iframe
          className="w-full"
          height="315"
          src="https://www.youtube.com/embed/yep0d_U1Dgo"
          title="Fast and Easy Way to Calculate Your GPA in 60 Seconds"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-10 px-4 w-[70%] max-sm:w-full">
        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-3">
            College GPA Calculator – Your Complete Guide
          </h2>
          <p className="text-slate-600 text-md leading-relaxed">
            The <strong>College GPA Calculator</strong> is more than just a
            simple math tool—it’s an essential academic companion designed to
            help students accurately manage, monitor, and improve their academic
            performance throughout college. Whether you’re aiming to keep a
            scholarship, secure a competitive internship, qualify for graduate
            school, or simply maintain a strong academic record, knowing your
            GPA is absolutely crucial. With this calculator, you only need to
            enter the courses you’ve taken, their credit hours, and the grades
            you received. In just seconds, you’ll see your semester GPA or
            overall cumulative GPA displayed clearly, giving you a true picture
            of where you currently stand. With this insight, you can plan ahead
            more effectively, set realistic academic goals, and make informed
            decisions that directly impact your future success.
          </p>
          <p className="text-slate-600 text-md leading-relaxed mt-3">
            Unlike basic calculators, this GPA tool adapts to different grading
            systems and scenarios. It can be used for quick semester-based
            calculations or for tracking your cumulative GPA across multiple
            years of study. It supports both unweighted GPAs and weighted GPAs
            (often used for honors, AP, or IB classes), ensuring every
            calculation is fair and accurate. Whether you’re calculating grades
            for challenging advanced courses, electives, or general education
            requirements, this tool provides precise results. You can even
            explore “what-if” scenarios—for example, estimating how much a
            future grade in Calculus or Chemistry could raise (or lower) your
            GPA. From your very first semester to your final term, this
            calculator serves as a reliable guide, helping you stay motivated,
            set clear academic targets, and remain in control of your
            educational journey.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-3">
            Why Use a College GPA Calculator?
          </h3>
          <ul className="list-disc list-inside text-slate-600 text-md space-y-1">
            <li>
              Track and evaluate your academic performance across semesters
              using a trusted <em>GPA calculator tool</em>.
            </li>
            <li>
              Set realistic GPA targets to qualify for scholarships,
              internships, graduate school admissions, or academic honors.
            </li>
            <li>
              Identify which courses need extra attention in order to improve
              your <em>cumulative GPA</em>.
            </li>
            <li>
              Plan your upcoming course load wisely without risking your overall
              GPA score.
            </li>
            <li>
              Stay motivated by monitoring progress and simulating “what-if” GPA
              scenarios for future semesters.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-3">
            How the GPA Calculation Works
          </h3>
          <p className="text-slate-600 text-md leading-relaxed">
            The <strong>college GPA calculator</strong> uses a straightforward
            formula that mirrors the system most colleges and universities use:
            multiply the
            <strong>credit hours</strong> of a course by the{" "}
            <strong>grade point value</strong> of the grade earned, which gives
            you the <strong>quality points</strong>. Once you add up the quality
            points from all your courses, divide that number by the total credit
            hours to get your GPA. This method is consistent with standard
            academic practices, so you can be confident that your results are
            accurate—whether you’re checking a single semester GPA, your
            cumulative GPA, or even projecting future GPA outcomes. By
            understanding how GPA is calculated, you’ll also gain better insight
            into how much each class impacts your overall academic standing.
          </p>
        </section>

        <Image
          src="/tools/gpa.png"
          alt="Advanced GPA calculator for universities and colleges"
          width={2000}
          height={2000}
          className="w-full h-[280px] mt-4 lg:max-w-lg"
        />

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2 mt-3">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-slate-700">
                1. Is this calculator accurate?
              </h4>
              <p className="text-slate-600 text-md">
                Yes. Our <strong>college GPA calculator</strong> uses the same
                formula trusted by accredited U.S. colleges and universities. As
                long as your input is correct, the output will be just as
                reliable, making it a dependable{" "}
                <em>academic GPA calculator</em> for all students.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-700">
                2. Can it be used for high school GPA?
              </h4>
              <p className="text-slate-600 text-md">
                Absolutely. Although designed primarily for college students,
                this <em>GPA score calculator</em> works for high school GPA
                calculations as well, provided your school uses a credit and
                grading system that aligns with the calculator’s structure.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-700">
                3. Does it support weighted GPAs?
              </h4>
              <p className="text-slate-600 text-md">
                Yes. The <em>weighted GPA calculator</em> option allows you to
                assign higher grade point values to advanced courses such as
                honors, AP, or IB classes. This is particularly helpful for
                students enrolled in advanced academic programs who want their
                GPAs to reflect the added difficulty of their coursework.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-slate-700">
                4. Will my data be saved?
              </h4>
              <p className="text-slate-600 text-md">
                Yes. Your data is stored locally in your browser, meaning your{" "}
                <strong>college GPA calculator</strong> entries remain available
                the next time you return to the page. No external servers are
                used, so your information is private and secure.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Script
        id="college-gpa-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "College GPA Calculator",
            url: "https://calculators.name.ng/tools/college-gpa-calculator",
            applicationCategory: "EducationalApplication",
            operatingSystem: "All",
            description:
              "Calculate your grade with this modern college GPA tool.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "BLOGGER GB (GARBA YAKUBU)",
            },
            dateCreated: "2025-08-01",
            dateModified: "2025-08-26",
          }),
        }}
      />
    </div>
  );
}
