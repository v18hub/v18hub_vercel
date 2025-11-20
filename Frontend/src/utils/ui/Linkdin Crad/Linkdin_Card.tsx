import React, { useState } from "react";
import { Mail, Linkedin, Check } from "lucide-react";

const LinkedIn_Card = ({ user }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (user.email) {
      navigator.clipboard.writeText(user.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // reset after 1.5s
    }
  };

  return (
    <div className="scale-120 w-[20vw] h-[20vh] bg-white rounded-2xl shadow-lg overflow-hidden relative flex flex-col hover:scale-125 transition-transform duration-150">
      {/* Cover Image */}
      <img
        src={user.coverImage}
        alt="cover"
        className="h-[40%] w-full object-cover"
      />

      {/* Avatar */}
      <img
        src={user.avatar}
        alt="avatar"
        className="absolute top-[25%] left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-white shadow-md"
      />

      {/* Content */}
      <div className="flex flex-col items-center mt-auto mb-2">
        <div className="text-[#0A66C2] font-semibold text-sm">{user.name}</div>
        <div className="text-gray-600 text-xs">{user.contact}</div>

        <div className="flex gap-3 mt-1">
          <a
            href={user.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:underline flex items-center gap-1 text-xs"
          >
            <Linkedin size={14} />
            Profile
          </a>

          {user.email && (
            <button
              onClick={handleCopyEmail}
              className="text-gray-600 hover:text-black flex items-center gap-1 text-xs focus:outline-none"
            >
              {copied ? <Check size={14} /> : <Mail size={14} />}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkedIn_Card;
