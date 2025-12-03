// src/pages/RegistrationPage/RegistrationPage.tsx
import { Outlet, useLocation } from 'react-router-dom';
import { registrationAbout } from '../../data/registrationAbout';

const RegistrationPage = () => {
  const location = useLocation();

  // Map route → about content
  const getAboutContent = () => {
    const path = location.pathname;

    if (path.includes('/registration/student')) return registrationAbout.student;
    if (path.includes('/registration/mentor')) return registrationAbout.mentor;
    if (path.includes('/registration/educator')) return registrationAbout.educator;
    if (path.includes('/registration/industry_partner')) return registrationAbout.industry_partner;

    return registrationAbout.student; // fallback
  };

  const [title, description] = getAboutContent();

  return (
    <div className="relative min-h-screen w-full bg-[#A4B4AE]">
      <div className="relative mx-auto flex flex-wrap min-h-screen w-full max-w-7xl items-stretch px-4 py-8">
        
        {/* Left Panel — About Text */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
          <div className="max-w-lg text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              {title}
            </h1>
            <p
              className="text-xl lg:text-2xl leading-relaxed opacity-95"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>

        {/* Right Panel — Form */}
        <div className="flex w-full lg:w-1/2 items-center justify-center">
          <div className="w-full max-w-xl bg-white/95 rounded-3xl shadow-2xl p-8 lg:p-12 backdrop-blur-sm">
            {/* Mobile title */}
            <div className="lg:hidden text-center mb-8">
              <h1 className="text-3xl font-bold text-[#294b3c] mb-3">{title}</h1>
              <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;