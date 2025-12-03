import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import { useForm } from "react-hook-form";


const Contact_US_component = () => {

    const { register, handleSubmit } = useForm();

    const log = (data: any) => {
        const out = {
            ...data,
        };
        console.log(out);
    };

    return (
        <div className="mx-auto w-full max-w-3xl p-6">
            <form onSubmit={handleSubmit(log)} className="grid grid-cols-1 gap-6 md:grid-cols-2">

               

                
                <div className="flex flex-col gap-2">
                    <label htmlFor="user_id" className="text-sm font-medium text-gray-700">First Name</label>
                    <InputText id="user_id" className="w-full" {...register("first_name")} />
                </div>

                
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Last Name</label>
                    <InputText id="password" className="w-full" {...register("last_name")} />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <InputText id="email" type="email" keyfilter="email" className="w-full" {...register("email")} />
                </div>

                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Brief
                        </label>
                        <InputTextarea autoResize id="text" keyfilter="email" className="w-full" {...register("text")} />
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

export default Contact_US_component