// src/routes.tsx
import { Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import { Helmet } from "@vuer-ai/react-helmet-async";

// ── All pages via the central barrel ─────────────────────────────────────────
import {
  Homepage,
  RegistrationPage,
  KnowMorePage,
  Create_Project,
  Our_Story,
  Contact_Us,
  Privacy_Policy,
  Why_Us,
  Programs,
  ProgramListing,
  ProgramDetail,
  Mentors,
} from "./pages/pages.tsx";

import Student_Register  from "./components/RegistrationPage/Student Register/Student_Register.tsx";
import Mentor_Register   from "./components/RegistrationPage/Mentor Register/Mentor_Register.tsx";
import Educator_Register from "./components/RegistrationPage/Educator Register/Educator_Register.tsx";
import Industry_Partner  from "./components/RegistrationPage/Industry_Partner Register/Industry_Partner.tsx";
import Image_Credits     from "./pages/Privacy_Policy/Image_Credits.tsx";

// ── Single source of truth for valid program type slugs ───────────────────────
import { PROGRAM_TYPES } from "./components/Navbar/Navbar.tsx";

// ─── Helpers ──────────────────────────────────────────────────────────────────

const Placeholder = ({ title, description }: { title: string; description?: string }) => (
  <>
    <Helmet>
      <title>{title} | v18hub</title>
      <meta name="description" content={description ?? `${title} — coming soon on v18hub.`} />
    </Helmet>
    <div className="min-h-screen flex items-center justify-center text-2xl text-gray-600 font-open-sans">
      {title} — Coming Soon
    </div>
  </>
);

const LegacyCohortRedirect = () => {
  const { id } = useParams<{ id: string }>();
  const safeId = (id ?? "").replace(/[^a-z0-9_-]/gi, "");
  if (!safeId) return <Navigate to="/programs/cohorts" replace />;
  return <Navigate to={`/programs/cohorts/${safeId}`} replace />;
};

const LegacyExploreRedirect = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const section = searchParams.get("section");

  // Optional: redirect old query params to new structure
  if (section?.includes("foundational")) return <Navigate to="/programs/preview-cohorts" replace />;

  return <Navigate to="/programs" replace />;
};

const UnknownProgramType = () => (
  <>
    <Helmet>
      <title>Not Found | v18hub Programs</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="min-h-screen font-open-sans flex flex-col items-center justify-center gap-4 px-6 text-center bg-[#f6f5ec]">
      <h1 className="text-3xl font-bold text-[#294b3c]">Program type not found</h1>
      <p className="text-[#546f61]">
        That program category doesn't exist or hasn't launched yet.
      </p>
      <a
        href="/programs"
        className="mt-2 px-6 py-3 bg-[#294b3c] text-[#f6f5ec] rounded-lg font-medium hover:bg-[#546f61] transition-colors"
      >
        Browse all programs
      </a>
    </div>
  </>
);

const UnknownProgramTypeGuard = ({ validSlugs }: { validSlugs: Set<string> }) => {
  const { unknownType } = useParams<{ unknownType: string }>();
  const safeType = (unknownType ?? "").toLowerCase().trim();
  if (validSlugs.has(safeType)) {
    return <Navigate to={`/programs/${safeType}`} replace />;
  }
  return <UnknownProgramType />;
};

// ─── Route tree ───────────────────────────────────────────────────────────────
export default function AppRoutes() {
  const validSlugs = new Set(PROGRAM_TYPES.map((p) => p.slug));

  return (
    <Routes>

      {/* ── CORE ─────────────────────────────────────────────────────────── */}
      <Route path="/" element={<Homepage />} />

      <Route path="/registration" element={<RegistrationPage />}>
        <Route path="learner"          element={<Student_Register />} />
        <Route path="mentor"           element={<Mentor_Register />} />
        <Route path="educator"         element={<Educator_Register />} />
        <Route path="industry_partner" element={<Industry_Partner />} />
      </Route>

      {/* ── OUR COMMUNITY ────────────────────────────────────────────────── */}
      {/* Main "Our Community" has NO route → clicking does nothing */}
      <Route path="/our-community/learners"                         element={<KnowMorePage />} />
      <Route path="/our-community/educators"                        element={<KnowMorePage />} />
      <Route path="/our-community/industry-partners"                element={<KnowMorePage />} />
      <Route path="/our-community/mentors"                          element={<KnowMorePage />} />
      <Route path="/our-community/industry-partners/create-project" element={<Create_Project />} />

      <Route path="/why-us" element={<Why_Us />} />
      <Route path="/terms"  element={<Privacy_Policy />} />

      {/* ── PROGRAMS ─────────────────────────────────────────────────────── */}
      <Route path="/programs" element={<Programs />} />
      {/* Legacy redirects */}
      <Route path="/explore-cohorts" element={<LegacyExploreRedirect />} />
      <Route path="/cohort/:id" element={<LegacyCohortRedirect />} />
      <Route path="/explore-cohorts/*" element={<Navigate to="/programs" replace />} />

      {PROGRAM_TYPES.map(({ slug }) => (
        <Route
          key={slug}
          path={`/programs/${slug}`}
          element={<ProgramListing slug={slug} />}
        />
      ))}

      {PROGRAM_TYPES.map(({ slug }) => (
        <Route
          key={`${slug}-detail`}
          path={`/programs/${slug}/:id`}
          element={<ProgramDetail />}
        />
      ))}

      <Route
        path="/programs/:unknownType"
        element={<UnknownProgramTypeGuard validSlugs={validSlugs} />}
      />
      <Route
        path="/programs/:unknownType/*"
        element={<UnknownProgramTypeGuard validSlugs={validSlugs} />}
      />

      {/* ── LEGACY & OTHER ─────────────────────────────────────────────── */}
      <Route path="/cohort/:id"      element={<LegacyCohortRedirect />} />
      <Route path="/explore-cohorts" element={<Navigate to="/programs" replace />} />

      <Route path="/resources/blogs"  element={<Placeholder title="Blogs" />} />
      <Route path="/resources/news"   element={<Placeholder title="News" />} />

      <Route path="/about/our-story"  element={<Our_Story />} />
      <Route path="/about/career"     element={<Placeholder title="Career" />} />
      <Route path="/about/contact-us" element={<Contact_Us />} />

      <Route path="/credits" element={<Image_Credits />} />
      <Route path="/our-mentors" element={<Mentors />} />
    </Routes>
  );
}