import { useForm } from "react-hook-form"
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from "primereact/inputtextarea";

const Create_Project_Component = () => {
  const Domains = ["Artificial Intelligence", "Sustainability", "Healthcare Tech", "FinTech", "UI/UX Design", "Other"];;
  const [Domain, setDomain] = useState<string | null>(null);
  const skills = ["Python", "Figma", "Market Research", "Project Management", "Javascript"];
  const involvement_level_option = ["Low (Only Submit Problem)", "Medium (Periodic Check-In)", "High (Active Monitoring)"]
  const [involvement_level, setinvolvement_level] = useState<string | null>(null);
  const [skill, setskill] = useState<string[] | null>([]);
  const { register, handleSubmit } = useForm();
  
  const log = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(log)} className="flex flex-col gap-10">

        <div className="flex flex-col gap-10">
          <h1 className='text-3xl sm:text-4xl lg:text-5xl leading-snug flex-wrap'>Basic Project Details</h1>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="educator_name" className="text-sm font-medium text-gray-700">
              Title
            </label>
            <InputText id="educator_name" className="w-full" {...register("educator_name")} />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="educator_name" className="text-sm font-medium text-gray-700">
              Short Summary
            </label>
            <InputTextarea autoResize id="educator_name" className="w-full" {...register("educator_name")} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Domain" className="text-sm font-medium text-gray-700">Domain</label>
            <Dropdown
              id="Domain"
              className="w-full"
              options={Domains}
              value={Domain}
              onChange={(e) => {
                setDomain(e.value);
              }}
              placeholder="Select Domain"
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
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
        </div>

        <div className="flex flex-col gap-10">
          <h1 className='text-3xl sm:text-4xl lg:text-5xl leading-snug flex-wrap'>Problem Statement and Objective</h1>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="educator_name" className="text-sm font-medium text-gray-700">
              Problem Statement
            </label>
            <InputText id="educator_name" className="w-full" {...register("educator_name")} />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="educator_name" className="text-sm font-medium text-gray-700">
              Objective/Expected Outcome
            </label>
            <InputTextarea autoResize id="educator_name" className="w-full" {...register("educator_name")} />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="educator_name" className="text-sm font-medium text-gray-700">
              Resources (if any)
            </label>
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className='text-3xl sm:text-4xl lg:text-5xl leading-snug flex-wrap'>Partner Engagement</h1>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="educator_name" className="text-sm font-medium text-gray-700">
              Level of Invovlement
            </label>
            <Dropdown id="involvement_level" className="w-full" options={involvement_level_option}
              value={involvement_level} onChange={(e) => { setinvolvement_level(e.value); }} placeholder="Select Domain" />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className='text-2xl sm:text-3xl lg:text-4 xl leading-snug flex-wrap'>
              Point of Contact
            </h2>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="educator_name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <InputText id="educator_name" className="w-full" {...register("educator_name")} />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="educator_name" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <InputText id="educator_name" className="w-full" {...register("educator_name")} />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="educator_name" className="text-sm font-medium text-gray-700">
                Testimonials
              </label>
              <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className='text-2xl sm:text-3xl lg:text-4 xl leading-snug flex-wrap'>
              Logistics Details
            </h2>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <button type="submit" className="inline-flex font-medium items-center rounded-lg bg-[#526B61] px-4 py-2 w-80 text-white justify-center hover:bg-[#25473A] active:scale-95 transition-transform">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Create_Project_Component