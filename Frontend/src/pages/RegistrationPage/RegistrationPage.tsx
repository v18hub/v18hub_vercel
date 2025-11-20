import { Outlet, useLocation } from 'react-router-dom'
import { about as studentAbout } from '../../components/RegistrationPage/Student Register/Student_Register'
import { about as mentorAbout } from '../../components/RegistrationPage/Mentor Register/Mentor_Register'
import { about as educatorAbout } from '../../components/RegistrationPage/Educator Register/Educator_Register'
import { about as industryAbout } from '../../components/RegistrationPage/Industry_Partner Register/Industry_Partner'

const RegistrationPage = () => {
    const location = useLocation()

    // Get the appropriate about content based on current route
    const getAboutContent = () => {
        switch (location.pathname) {
            case '/registration/student':
                return studentAbout
            case '/registration/mentor':
                return mentorAbout
            case '/registration/educator':
                return educatorAbout
            case '/registration/industry_partner':
                return industryAbout
            default:
                return studentAbout // fallback to student
        }
    }

    const about = getAboutContent()

    return (
        <div className="relative min-h-screen w-full bg-[#A4B4AE]">
            {/* Page content container */}
            <div className="relative mx-auto flex flex-wrap min-h-screen w-full max-w-7xl items-stretch px-4 py-8">
                {/* Left info panel (hidden on small screens) */}
                <div className=" w-full justify-center flex lg:w-1/2">
                    <div className="flex h-auto w-full max-w-xl flex-col items-center gap-6 rounded-2xl bg-transparent p-6 text-center text-white">
                        <div className="lg:text-6xl text-3xl font-medium">{about[0]}</div>
                        <div
                            className="lg:text-4xl text-xl text-white"
                            dangerouslySetInnerHTML={{ __html: about[1] }}
                        />
                    </div>
                </div>

                {/* Right form panel */}
                <div className="flex w-full items-center justify-center lg:w-1/2">
                    <div className="w-full max-w-xl rounded-2xl bg-white/90 p-6 shadow-lg backdrop-blur">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage