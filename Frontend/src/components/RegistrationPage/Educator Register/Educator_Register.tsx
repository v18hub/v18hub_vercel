import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { useForm, } from 'react-hook-form'
import { InputTextarea } from "primereact/inputtextarea";

export const about = ["Join As An Educator", "As an educator, you play a key role in shaping the bridge between academia and industry. At v18hub, you can integrate real-world projects into your teaching, mentor students in hands-on cohorts, and prepare them with practical skills beyond the classroom. <br/> By joining us, you help build an ecosystem where knowledge meets real-world challenges."]

const Educator_Register = () => {
    const { register, handleSubmit } = useForm();
    const countries = ["India", "Other"];
    const indianStates = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
    ];


    const [country, setCountry] = useState<string>("India");
    const [stateVal, setStateVal] = useState<string | null>(null);


    const log = (data: any) => {
        data.country = country;
        data.state = country === "India" ? stateVal : null;
        console.log(data);
    };
    return (
        <div className="mx-auto w-full max-w-3xl p-6">
            <form onSubmit={handleSubmit(log)} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Educator Name */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="educator_name" className="text-sm font-medium text-gray-700">
                        Educator Name
                    </label>
                    <InputText id="educator_name" className="w-full" {...register("educator_name")} />
                </div>

                {/* Password / Confirm password */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                    <Password id="password" inputClassName="w-full" toggleMask className="w-full" {...register("password")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirm_password" className="text-sm font-medium text-gray-700">Confirm password</label>
                    <Password id="confirm_password" inputClassName="w-full" toggleMask className="w-full" {...register("confirm_password")} />
                </div>

                {/* Institution Brief */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Institution Brief
                    </label>
                    <InputTextarea autoResize id="text" keyfilter="email" className="w-full" {...register("text")} />
                </div>

                {/* Logo Image (native input) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="logo" className="text-sm font-medium text-gray-700">Logo Image</label>
                    <input id="logo" type="file" accept="image/*" />
                </div>

                {/* Country (default India) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="country" className="text-sm font-medium text-gray-700">Country</label>
                    <Dropdown
                        id="country"
                        className="w-full"
                        options={countries}
                        value={country}
                        onChange={(e) => {
                            setCountry(e.value);
                            if (e.value !== "India") setStateVal(null);
                        }}
                        placeholder="Select country"
                    />
                </div>

                {/* State (only if India) */}
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

                {/* Email Address (use keyfilter/email) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <InputText id="email" type="email" keyfilter="email" className="w-full" {...register("email")} />
                </div>

                {/* Phone Number (numeric, 10 digits) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone_number" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <InputText id="phone_number" keyfilter="num" maxLength={10} className="w-full" {...register("phone_number")} />
                </div>

                {/* Designation/Role */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="designation" className="text-sm font-medium text-gray-700">Designation/Role</label>
                    <InputText id="designation" className="w-full" {...register("designation")} />
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

export default Educator_Register