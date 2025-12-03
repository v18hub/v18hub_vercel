// src/pages/Privacy_Policy/Image_Credits.tsx
import { Link } from "react-router-dom";

const Image_Credits = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#f6f5ec] py-20 font-open-sans">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-[#294b3c] text-center mb-16">
          Image Credits
        </h1>

        {/* Main Content */}
        <div className="bg-[#f6f5ec] p-10 sm:p-14 text-[#526B61] leading-relaxed space-y-6 text-lg">
          <p>
            This website uses visuals sourced from free online image libraries under open-use licenses.
          </p>
          <p>
            We acknowledge and appreciate the work of photographers, designers, and contributors who make their work freely accessible to the community.
          </p>
          <p>
            The images and graphics used on this website may originate from platforms such as:
          </p>

          <ul className="list-disc pl-8 space-y-2 font-medium">
            <li>Unsplash</li>
            <li>Pexels</li>
            <li>Pixabay</li>
            <li>Freepik</li>
            <li>Shutterstock trial samples</li>
            <li>Canva library</li>
            <li>AI image generation tools</li>
          </ul>

          <p>
            Due to the diverse origins and redistribution rights of free resources, precise creator names may not be available for every image.
          </p>
          <p>
            However, we respect and recognize that all images remain the intellectual property of their respective owners.
          </p>
          <p className="font-semibold">
            If you believe an image has been used without appropriate acknowledgment or in violation of its license, please contact us at{" "}
            <a
              href="mailto:v18hub@rediffmail.com"
              className="text-[#546f61] underline hover:text-[#294b3c] transition"
            >
              v18hub@rediffmail.com
            </a>
            .
          </p>
          <p>
            We will review immediately and update credits or remove the concerned image.
          </p>
        </div>

        {/* Optional Footer Link */}
        <div className="mt-12 text-center">
          <Link
            to="/terms"
            className="text-[#546f61] hover:text-[#294b3c] underline text-sm"
          >
            ← Back to Terms & Privacy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Image_Credits;