import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { useForm } from "react-hook-form";

export const about = ["Become a Partner", "Partner with us to turn real-world challenges into learning opportunities. <br/> By sharing your use cases and problem statements, you gain fresh ideas, access to emerging talent, and innovative prototypes - while helping shape the next generation of industry-ready professionals."]

const Industry_Partner = () => {
    const { register, handleSubmit } = useForm();

    // Country / State lists
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
                {/* Organisation Name */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="organisation_name" className="text-sm font-medium text-gray-700">Organisation Name</label>
                    <InputText id="organisation_name" className="w-full" {...register("organisation_name")} />
                </div>

                {/* User Id */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="user_id" className="text-sm font-medium text-gray-700">User Id</label>
                    <InputText id="user_id" className="w-full" {...register("user_id")} />
                </div>

                {/* Password / Confirm password (validate later if needed) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                    <Password id="password" inputClassName="w-full" toggleMask className="w-full" {...register("password")} />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="confirm_password" className="text-sm font-medium text-gray-700">Confirm password</label>
                    <Password id="confirm_password" inputClassName="w-full" toggleMask className="w-full" {...register("confirm_password")} />
                </div>

                {/* Website */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="website" className="text-sm font-medium text-gray-700">Website</label>
                    <InputText id="website" className="w-full" {...register("website")} />
                </div>

                {/* Linkdon (as requested; if meant LinkedIn, rename key later) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="linkdon" className="text-sm font-medium text-gray-700">LinkedIn Profile URL</label>
                    <InputText id="linkdon" className="w-full" {...register("linkdon")} />
                </div>

                {/* Company Brief */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="company_brief" className="text-sm font-medium text-gray-700">Company Brief</label>
                    <InputTextarea autoResize id="text" keyfilter="email" className="w-full" {...register("text")} />
                </div>

                {/* Logo Image */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="logo" className="text-sm font-medium text-gray-700">Logo Image</label>
                    <input id="logo" type="file" accept="image/*" {...register("logo")} />
                </div>

                {/* Country (default India) */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="country" className="text-sm font-medium text-gray-700">Country</label>
                    <Dropdown
                        id="country"
                        className="w-full"
                        options={countries}
                        value={country}
                        onChange={(e) => setCountry(e.value)}
                        placeholder="Select country"
                    />
                </div>

                {/* State (always shown per latest request) */}
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

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <InputText id="email" type="email" keyfilter="email" className="w-full" {...register("email")} />
                </div>

                {/* Phone number */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone_number" className="text-sm font-medium text-gray-700">Phone Number</label>
                    <InputText id="phone_number" keyfilter="num" maxLength={10} className="w-full" {...register("phone_number")} />
                </div>

                {/* Designation */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="designation" className="text-sm font-medium text-gray-700">Designation</label>
                    <InputText id="designation" type="designation" className="w-full" {...register("designation")} />
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

export default Industry_Partner