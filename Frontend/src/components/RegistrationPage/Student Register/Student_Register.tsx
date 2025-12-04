// src/components/RegistrationPage/Student Register/Student_Register.tsx

import { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import { studentSchema, type StudentFormData } from "@/lib/validation";

const specializations = ["Computer Science", "Design", "Business", "Engineering", "Data Science", "Other"];
const educationLevels = ["High School", "Undergraduate", "Postgraduate (Master's)", "Postgraduate (PhD)", "Diploma/Certification"];
const areasOfInterest = ["Artificial Intelligence", "Sustainability", "Healthcare Tech", "FinTech", "UI/UX Design", "Other"];

export default function Student_Register() {
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();

  const [selectedSpecialization, setSelectedSpecialization] = useState<string | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<string | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    // setError,
    reset,
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: StudentFormData) => {
    const payload = {
      ...data,
      specialization: selectedSpecialization,
      education_level: selectedEducation,
      areas_of_interest: selectedInterests,
    };

    try {
      // DUMMY API — Replace this with your real endpoint later
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", payload);

      console.log("Registration successful!", response.data);

      toast.current?.show({
        severity: "success",
        summary: "Account Created!",
        detail: "Welcome! Redirecting to dashboard...",
        life: 4000,
      });

      // Optional: reset form after success
      reset();

      // Redirect after success
      setTimeout(() => navigate("/dashboard"), 2000);
    } catch (err: any) {
      console.error("Registration failed:", err);

      // Simulate server-side validation errors (for demo)
      if (err.response?.status === 400) {
        toast.current?.show({
          severity: "error",
          summary: "Validation Failed",
          detail: "Please check your inputs and try again.",
          life: 5000,
        });
      } else {
        toast.current?.show({
          severity: "error",
          summary: "Registration Failed",
          detail: "Something went wrong. Please try again later.",
          life: 5000,
        });
      }

      // Optional: Set field-specific errors from backend
      // if (err.response?.data?.errors) { ... }
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Toast ref={toast} position="top-center" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <InputText
              {...register("firstname")}
              placeholder="First Name"
              className="w-full h-12 rounded-xl border-2 border-[#f4f2ee] focus:border-[#294b3c] bg-white"
            />
            {errors.firstname && <small className="text-red-600 text-xs">{errors.firstname.message}</small>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <InputText
              {...register("lastname")}
              placeholder="Last Name"
              className="w-full h-12 rounded-xl border-2 border-[#f4f2ee] focus:border-[#294b3c] bg-white"
            />
            {errors.lastname && <small className="text-red-600 text-xs">{errors.lastname.message}</small>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <InputText
            {...register("email")}
            type="email"
            placeholder="your.email@example.com"
            className="w-full h-12 rounded-xl border-2 border-[#f4f2ee] focus:border-[#294b3c] bg-white"
          />
          {errors.email && <small className="text-red-600 text-xs">{errors.email.message}</small>}
        </div>

        {/* Password + Confirm Password – FIXED with Controller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Password
                  value={field.value || ""}
                  onChange={(e) => field.onChange(e.target.value)}
                  toggleMask
                  feedback={true}
                  placeholder="Create strong password"
                  className="w-full"
                  inputClassName="w-full h-12 rounded-xl border-2 border-[#f4f2ee] focus:border-[#294b3c] bg-white pl-4 pr-12"
                />
              )}
            />
            {errors.password && <small className="text-red-600 text-xs">{errors.password.message}</small>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <Controller
              name="c_password"
              control={control}
              render={({ field }) => (
                <Password
                  value={field.value || ""}
                  onChange={(e) => field.onChange(e.target.value)}
                  toggleMask
                  placeholder="Confirm password"
                  className="w-full"
                  inputClassName="w-full h-12 rounded-xl border-2 border-[#f4f2ee] focus:border-[#294b3c] bg-white pl-4 pr-12"
                />
              )}
            />
            {errors.c_password && <small className="text-red-600 text-xs">{errors.c_password.message}</small>}
          </div>
        </div>

        {/* Phone + Specialization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <InputText
              {...register("phone")}
              placeholder="10-digit number"
              className="w-full h-12 rounded-xl border-2 border-[#f4f2ee] focus:border-[#294b3c] bg-white"
            />
            {errors.phone && <small className="text-red-600 text-xs">{errors.phone.message}</small>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
            <Dropdown
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.value)}
              options={specializations}
              placeholder="Select specialization"
              className="h-12 w-full"
            />
          </div>
        </div>

        {/* University */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">University / Institution</label>
          <InputText
            {...register("university")}
            placeholder="Your university"
            className="w-full h-12 rounded-xl border-2 border-[#f4f2ee] focus:border-[#294b3c] bg-white"
          />
          {errors.university && <small className="text-red-600 text-xs">{errors.university.message}</small>}
        </div>

        {/* Education Level + Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
            <Dropdown
              value={selectedEducation}
              onChange={(e) => setSelectedEducation(e.value)}
              options={educationLevels}
              placeholder="Select level"
              className="h-12 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
            <MultiSelect
              value={selectedInterests}
              onChange={(e) => setSelectedInterests(e.value)}
              options={areasOfInterest}
              placeholder="Choose your interests"
              display="chip"
              className="h-12 w-full"
            />
          </div>
        </div>

        {/* LinkedIn + GitHub (Optional) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn (Optional)</label>
            <InputText
              {...register("linkdin")}
              placeholder="https://linkedin.com/in/..."
              className="w-full h-12 rounded-xl border-2 border-[#f4f2ee] focus:border-[#294b3c] bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">GitHub (Optional)</label>
            <InputText
              {...register("github")}
              placeholder="https://github.com/..."
              className="w-full h-12 rounded-xl border-2 border-[#f4f2ee] focus:border-[#294b3c] bg-white"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-10">
          <Button
            type="submit"
            label={isSubmitting ? "Creating Account..." : "Create Account"}
            disabled={isSubmitting}
            loading={isSubmitting}
            className="px-20 py-4 text-lg font-bold bg-[#294b3c] hover:bg-[#1e3a2f] text-white rounded-full shadow-lg transition-all"
          />
        </div>
      </form>
    </div>
  );
}