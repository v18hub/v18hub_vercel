import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { useForm } from "react-hook-form";


export const about = ["Join v18hub as a Learner", "Turn your classroom knowledge into real-world experience. At v18hub, you’ll work on live projects, build functional prototypes, and learn from mentors while collaborating with peers. <br/> Sign up today and take the first step towards becoming industry-ready"]

const Student_Register = () => {
    const { register, handleSubmit } = useForm()

    const specialization = ["Engineering/Technology", "Management/Commerce", "Science", "Humanities with Maths/Statistics", "Humanities without Maths/Statistics","Other"];
    const level_of_study = ["High School", "Undergraduate", "Postgraduate (Master's)", "Postgraduate (PhD)","Diploma/Certification"];
    const skills = ["Python", "Figma", "Market Research", "Project Management", "Javascript"];
    const interest = ["Artificial Intelligence", "Sustainability", "Healthcare Tech", "FinTech", "UI/UX Design", "Other"];

    // State
    const [selected_specialization, setselected_specialization] = useState<string[] | null>([]);
    const [selected_level_of_study, setselected_level_of_study] = useState<string | null>(null);
    const [skill, setskill] = useState<string[] | null>([]);
    const [Check, setCheck] = useState<string[]>([]);

    const handleChange = (e: any) => {
        if (e.checked) {
            setCheck((prev) => [...prev, e.value]); 
        } else {
            setCheck((prev) => prev.filter((val) => val !== e.value));
        }
    };

    const log = (data: any) => {
        data.specialization = selected_specialization
        data.education = selected_level_of_study
        data.skills = skill
        data.interest = Check

        console.log(data);
    }

    return (
        <div className="mx-auto w-full max-w-3xl p-6">
            <form onSubmit={handleSubmit(log)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* First Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullname" className="text-sm font-medium text-gray-700">
                        First Name
                    </label>
                    <InputText id="fullname" className="w-full" {...register('firstname')} />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullname" className="text-sm font-medium text-gray-700">
                        Last Name
                    </label>
                    <InputText id="fullname" className="w-full" {...register('lastname')} />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <InputText id="email" type="email" keyfilter="email" className="w-full" {...register("email")} />
                </div>

                {/* Password / Confirm */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <Password id="password" inputClassName="w-full" toggleMask className="w-full" {...register('password')} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirm_password" className="text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <Password id="confirm_password" inputClassName="w-full" toggleMask className="w-full" {...register('c_password')} />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <InputText id="phone" keyfilter={"num"} maxLength={10} className="w-full" {...register('phone')} />
                </div>

                 {/* Specialization (multi) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="specialization" className="text-sm font-medium text-gray-700">
                        Specialization
                    </label>
                    <Dropdown
                        id="specialization"
                        className="w-full"
                        value={selected_specialization}
                        onChange={(e) => setselected_specialization(e.value)}
                        options={specialization}
                        placeholder="Select specialization(s)"
                    />
                </div>

                {/* University */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="university" className="text-sm font-medium text-gray-700">
                        University / Institution
                    </label>
                    <InputText id="university" className="w-full" {...register('university')} />
                </div>

               

                {/* Education / Graduation Date */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="education" className="text-sm font-medium text-gray-700">
                        Education
                    </label>
                    <Dropdown
                        id="education"
                        className="w-full"
                        value={selected_level_of_study}
                        onChange={(e) => setselected_level_of_study(e.value)}
                        options={level_of_study}
                        placeholder="Select level"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="skills" className="text-sm font-medium text-gray-700">
                        Skills
                    </label>
                    <MultiSelect
                        id="skills"
                        className="w-full"
                        value={skill}
                        onChange={(e) => setskill(e.value)}
                        options={skills}
                        display="chip"
                        placeholder="Select skill(s)"
                    />
                </div>

                {/* Skills (multi) */}
                <div className="flex flex-col gap-2 md:col-span-2">

                </div>

                {/* Interests */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="interest" className="text-sm font-medium text-gray-700">
                        Areas of Interest
                    </label>
                    <div className="flex flex-wrap gap-4">
                        {interest.map((each) => (
                            <div key={each} className="flex items-center gap-2">
                                <Checkbox inputId={each} value={each} onChange={handleChange} checked={Check.includes(each)} />
                                <label htmlFor={each} className="text-sm">
                                    {each}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="linkedin" className="text-sm font-medium text-gray-700">
                        LinkedIn Profile URL
                    </label>
                    <InputText id="linkedin" className="w-full" {...register('linkdin')} />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="linkedin" className="text-sm font-medium text-gray-700">
                        Github Profile URL
                    </label>
                    <InputText id="github" className="w-full" {...register('github')} />
                </div>

                {/* Submit (placeholder) */}
                <div className="md:col-span-2 flex justify-center">
                    <button type="submit" className="inline-flex font-medium items-center rounded-lg bg-[#526B61] px-4 py-2 w-80 text-white justify-center hover:bg-[#25473A] active:scale-95 transition-transform">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Student_Register