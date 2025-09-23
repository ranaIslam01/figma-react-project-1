import React from "react";

function HowToApplay() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-16 px-14">
      <div>
        <img className="h-auto w-auto rounded-2xl" src="/images/Apply.png" alt="" />
      </div>

      <div className="md:pl-22 md:pr-10 flex flex-col justify-center gap-4 ">
        <h1 className="text-2xl font-semibold md:pt-0 pt-4">How TO APPLY</h1>

          <p className="text-gray-500 text-sm pb-2">
          If you're curious to see what the selection process for this program
          is like, then here are a few things that we ask of our applicants:
        </p>
       <div className="flex flex-col gap-2 text-gray-500 text-sm pl-9">
        <li>Be an incoming high school junior or senior</li>
        <li>Be eligible for WIOA or similar financial assistance program </li>
        <li>
          Register and complete the intake process with Worksource ATL at
          https://atlworks.org/
        </li>
        <li>
          Provide a letter of recommendation from a high school counselor or any
          high school representative
        </li>
        <li>
          Submit an application for the Cybersecurity High School Summer Youth
          Apprenticeship Program
        </li>
        <li>
          Successfully pass the Diversity Cyber Council's digital literacy
          assessments
        </li>
        <li>
          If you have what it takes to be one of the best, fill out the
          application by clicking the button below
        </li>
        <li>
          Previously completed at least one Computer Science or Computer Science
          relatable class with a passing grade.
        </li>
     </div>

      </div>
    </div>
  );
}

export default HowToApplay;
