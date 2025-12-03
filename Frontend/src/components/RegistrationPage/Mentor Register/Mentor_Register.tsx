import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { useForm } from "react-hook-form";

export const about = ["Mentor with Us", "Mentors play a vital role in shaping future innovators. By sharing your expertise, you help learners navigate real-world challenges, refine their skills, and gain the confidence to turn ideas into action. Your guidance creates impact not just on projects, but on careers."]

const Mentor_Register = () => {
    const { register, handleSubmit } = useForm();

    // Country / State lists
    const countries = ["India", "Other"];
    const indianStates = [
        "Andhra Pradesh",
        "Delhi",
        "Gujarat",
        "Karnataka",
        "Maharashtra",
        "Tamil Nadu",
        "Telangana",
        "Uttar Pradesh",
        "West Bengal",
    ];

    const [country, setCountry] = useState<string>("India");
    const [stateVal, setStateVal] = useState<string | null>(null);

    const log = (data: any) => {
        const out = {
            ...data,
            country,
            state: stateVal,
        };
        console.log(out);
    };

    return (
        <div className="mx-auto w-full max-w-3xl p-6">
            <form onSubmit={handleSubmit(log)} className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {/* Mentor Name */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="mentor_name" className="text-sm font-medium text-gray-700">Mentor Name</label>
                    <InputText id="mentor_name" className="w-full" {...register("mentor_name")} />
                </div>

                {/* User Id */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="user_id" className="text-sm font-medium text-gray-700">User Id</label>
                    <InputText id="user_id" className="w-full" {...register("user_id")} />
                </div>

                {/* Password / Confirm password (not registered per request) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                    <Password id="password" inputClassName="w-full" toggleMask className="w-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirm_password" className="text-sm font-medium text-gray-700">Confirm password</label>
                    <Password id="confirm_password" inputClassName="w-full" toggleMask className="w-full" />
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="linkedin" className="text-sm font-medium text-gray-700">LinkedIn Profile URL</label>
                    <InputText id="linkedin" className="w-full" {...register("linkedin")} />
                </div>

                {/* Upload Resume */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="resume" className="text-sm font-medium text-gray-700">Upload Resume</label>
                    <input id="resume" type="file" accept=".pdf,.doc,.docx" />
                </div>

                {/* Country (default India) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="country" className="text-sm font-medium text-gray-700">Country</label>
                    <Dropdown
                        id="country"
                        className="w-full"
                        options={["India", "Other"]}
                        value={country}
                        onChange={(e) => setCountry(e.value)}
                        placeholder="Select country"
                    />
                </div>

                {/* State (always shown) */}
                {country === "India" && (
                    <div className="flex flex-col gap-2">
                        <label htmlFor="state" className="text-sm font-medium text-gray-700">State</label>
                        <Dropdown
                            id="state"
                            className="w-full"
                            options={indianStates}
                            value={stateVal}
                            onChange={(e) => setStateVal(e.value)}
                            placeholder="Select state"
                        />
                    </div>
                )}

                {/* City (only if India) */}
                {country === "India" && (
                    <div className="flex flex-col gap-2">
                        <label htmlFor="city" className="text-sm font-medium text-gray-700">City</label>
                        <InputText id="city" className="w-full" {...register("city")} />
                    </div>
                )}

                {/* Email (with keyfilter) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <InputText id="email" type="email" keyfilter="email" className="w-full" {...register("email")} />
                </div>

                {/* Phone (numeric, 10 digits) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                    <InputText id="phone" keyfilter="num" maxLength={10} className="w-full" {...register("phone")} />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 flex justify-center">
                    <button type="submit" className="inline-flex font-medium items-center rounded-lg bg-[#526B61] px-4 py-2 w-80 text-white justify-center hover:bg-[#25473A] active:scale-95 transition-transform">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Mentor_Register