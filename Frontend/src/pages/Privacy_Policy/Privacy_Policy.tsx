// src/pages/Privacy_Policy.tsx
import { Link } from "react-router-dom";

const Privacy_Policy = () => {
  const policy = [
    {
      title: "Terms and Conditions",
      points: [
        "Participation in the cohort is subject to timely completion of assignments, attendance of sessions, and adherence to community guidelines.",
        "The cohort organizer reserves the right to remove participants for non-compliance or misconduct.",
        "Intellectual property rights for work produced during the cohort belong to the creator unless otherwise agreed.",
        "Refunds and cancellations are only accepted within the first week from the start date of the cohort. After this period, no refunds or cancellations will be processed.",
        "Participants agree to provide honest feedback and participate respectfully.",
      ],
    },
    {
      title: "Privacy Policy",
      points: [
        "Personal data collected (name, email, phone, etc.) will be used solely for program administration and communication.",
        "Data will not be shared with third parties without consent.",
        "Photos, recordings, or shared content during sessions may be used internally to improve programs but will not be published publicly without explicit permission.",
        "Participants can request access, correction, or deletion of their personal data by contacting the organizer.",
      ],
    },
    {
      title: "Communication Policy",
      points: [
        "Participants will receive emails/notifications related to the cohort schedule, deliverables, and updates.",
        "Communication channels (email, group chats, forums) should be used respectfully and professionally.",
        "Confidentiality of discussions within group sessions and platforms will be maintained.",
        "The organizer will provide regular updates but participants are encouraged to actively engage and reach out for support when needed.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#f6f5ec] py-20 font-open-sans">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#526B61] text-center mb-16">
          Terms, Privacy & Communication Policy
        </h1>

        {policy.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-[#526B61] mb-8">
              {section.title}
            </h2>
            <ul className="space-y-4 text-[#526B61] text-lg leading-relaxed font-medium list-disc pl-8">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Credits Line */}
        <div className="mt-20 pt-10 border-t border-[#526B61]/20 text-center">
          <p className="text-[#526B61]/80 text-sm">
            Image copyrights belong to their respective creators. |{" "}
            <Link to="/credits" className="underline hover:text-[#526B61]">
              Credits
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy_Policy;