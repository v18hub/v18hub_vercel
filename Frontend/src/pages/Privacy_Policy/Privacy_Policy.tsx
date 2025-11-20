
const Privacy_Policy = () => {

    const policy = [
        [
            `Terms and Conditions`,
            [
                `Participation in the cohort is subject to timely completion of assignments, attendance of sessions, and adherence to community guidelines.`,
                `The cohort organizer reserves the right to remove participants for non-compliance or misconduct.`,
                `Intellectual property rights for work produced during the cohort belong to the creator unless otherwise agreed.`,
                `Refunds and cancellations are only accepted within the first week from the start date of the cohort. After this period, no refunds or cancellations will be processed.`,
                `Participants agree to provide honest feedback and participate respectfully.`
            ]
        ],
        [
            `Privacy Policy`,
            [
                `Personal data collected (name, email, phone, etc.) will be used solely for program administration and communication.`,
                `Data will not be shared with third parties without consent.`,
                `Photos, recordings, or shared content during sessions may be used internally to improve programs but will not be published publicly without explicit permission.`,
                `Participants can request access, correction, or deletion of their personal data by contacting the organizer.`
            ]
        ],
        [
            `Communication Policy`,
            [
                `Participants will receive emails/notifications related to the cohort schedule, deliverables, and updates.`,
                `Communication channels (email, group chats, forums) should be used respectfully and professionally.`,
                `Confidentiality of discussions within group sessions and platforms will be maintained.`,
                `The organizer will provide regular updates but participants are encouraged to actively engage and reach out for support when needed.`
            ]
        ]
    ]

    return (
        <div className="relative min-h-[381px] w-full bg-[#F9F6F1] flex items-center justify-center font-open-sans">
            <div className="sm:mx-60 mx-10 my-5">
                {policy.map((each, index) => (
                    <div key={index} className="mb-10 flex flex-col gap-5">
                        <div className="text-3xl font-semibold text-[#526B61]">
                            {each[0]}
                        </div>

                        <div className="text-[#526B61] text-lg leading-relaxed font-medium">
                            <ul className="list-disc pl-6 space-y-2">
                                {Array.isArray(each[1])
                                    ? each[1].map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))
                                    : <li>{each[1]}</li>
                                }
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Privacy_Policy
