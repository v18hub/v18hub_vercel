// src/routes.tsx
import { Routes, Route } from "react-router-dom";
import { Homepage, RegistrationPage, KnowMorePage, Create_Project, CohortDetails, Explore_Cohort, Our_Story, Contact_Us, Privacy_Policy, Why_Us } from "./pages/pages.tsx";
import Student_Register from "./components/RegistrationPage/Student Register/Student_Register.tsx";
import Mentor_Register from "./components/RegistrationPage/Mentor Register/Mentor_Register.tsx";
import Educator_Register from "./components/RegistrationPage/Educator Register/Educator_Register.tsx";
import Industry_Partner from "./components/RegistrationPage/Industry_Partner Register/Industry_Partner.tsx";
import Image_Credits from "./pages/Privacy_Policy/Image_Credits.tsx";

const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center text-2xl text-gray-600">
    {title} Page Coming Soon...
  </div>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/registration" element={<RegistrationPage />}>
        <Route path="learner" element={<Student_Register />} />
        <Route path="mentor" element={<Mentor_Register />} />
        <Route path="educator" element={<Educator_Register />} />
        <Route path="industry_partner" element={<Industry_Partner />} />
      </Route>

      <Route path="/ourcommunity/learners" element={<KnowMorePage />} />
      <Route path="/ourcommunity/educators" element={<KnowMorePage />} />
      <Route path="/ourcommunity/industry-partners" element={<KnowMorePage />} />
      <Route path="/ourcommunity/mentors" element={<KnowMorePage />} />
      <Route path="/ourcommunity/industry-partners/create-project" element={<Create_Project />} />

      <Route path="/why-us" element={<Why_Us />} />
      <Route path="/terms" element={<Privacy_Policy />} />

      <Route path="/cohort/:id" element={<CohortDetails />} />

      <Route path="/explore-cohorts" element={<Explore_Cohort />} />

      <Route path="/resources/blogs" element={<Placeholder title="Blogs" />} />
      <Route path="/resources/news" element={<Placeholder title="News" />} />

      <Route path="/about/our-story" element={<Our_Story />} />
      <Route path="/about/career" element={<Placeholder title="Career" />} />
      <Route path="/about/contact-us" element={<Contact_Us />} />
      <Route path="/credits" element={<Image_Credits />} />
    </Routes>
  );
}