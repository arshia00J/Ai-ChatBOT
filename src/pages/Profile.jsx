import { Link } from "react-router-dom";
import { useState } from "react";
import EmailPopUp from "../components/EmailPopUp.jsx";
import ThemePopUp from "../components/ThemePopUp.jsx";
import ClearCache from "../components/ClearCache.jsx";

export default function Profile() {
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isThemeVisible, setIsThemeVisible] = useState(false);
  const [isClearCacheVisible, setIsClearCacheVisible] = useState(false);

  const toggleEmailPopup = () => {
    setIsEmailVisible(!isEmailVisible);
    setIsThemeVisible(false);
    setIsClearCacheVisible(false);
  };

  const toggleThemePopup = () => {
    setIsThemeVisible(!isThemeVisible);
    setIsEmailVisible(false);
    setIsClearCacheVisible(false);
  };

  const toggleClearCachePopup = () => {
    setIsClearCacheVisible(!isClearCacheVisible);
    setIsEmailVisible(false);
    setIsThemeVisible(false);
  };

  return (
    <div>
      {/* Top Navbar */}
      <div className="mt-6 flex w-full px-6 py-3 justify-between">
        <Link to="/home">
          <div className="flex justify-center items-center gap-3">
            <img src="/leftArrow.png" alt="arrow" width={40} />
            <p className="font-semibold text-xl">Profile & Settings</p>
          </div>
        </Link>
        <Link to="/home">
          <img src="/threeDots.png" alt="avatar" width={40} />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex p-6 flex-col">
        <div className="flex flex-col justify-center mb-6 items-center w-full">
          <img src="/avatar.png" width={96} alt="avatar" className="mb-6" />
          <h3 className="font-bold text-2xl">Arshia Jafari</h3>
        </div>

        {/* Email */}
        <div
          className="flex justify-between items-center text-lg font-medium border-b py-6"
          onClick={toggleEmailPopup}
        >
          <h5>Email</h5>
          <div className="flex">
            <h5 className="text-emerald-400 text-base">arshia00iq@proton.me</h5>
            <img src="/arrow.png" alt="" width={24} />
          </div>
        </div>

        {/* Theme */}
        <div
          className="flex justify-between items-center text-lg font-medium border-b py-6"
          onClick={toggleThemePopup}
        >
          <h5>Theme</h5>
          <div className="flex">
            <h5 className="text-gray-400 text-base">System default</h5>
            <img src="/arrow.png" alt="" width={24} />
          </div>
        </div>

        {/* Data & Storage */}
        <div
          className="flex justify-between items-center text-lg font-medium border-b py-6"
          onClick={toggleClearCachePopup}
        >
          <h5>Data & storage</h5>
          <div className="flex">
            <h5 className="text-gray-400 text-base">28% Used</h5>
            <img src="/arrow.png" alt="" width={24} />
          </div>
        </div>

        <div className="flex justify-between items-center text-lg font-medium border-b py-6">
          <h5>Change password</h5>
          <img src="/arrow.png" alt="" width={24} />
        </div>
        <div className="flex justify-between items-center text-lg font-medium py-6">
          <h5>Send feedback</h5>
          <img src="/arrow.png" alt="" width={24} />
        </div>
        <p className="text-sm text-gray-400 mb-10">
          Chatbot AI can make mistakes. Consider checking important information
          and send us your feedback
        </p>

        {/* Footer */}
        <div className="w-full py-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Chat Bot AI - Version 2.0.5
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-600">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Popups */}
        <EmailPopUp isVisible={isEmailVisible} togglePopup={toggleEmailPopup} />
        <ThemePopUp isVisible={isThemeVisible} togglePopup={toggleThemePopup} />
        <ClearCache
          isVisible={isClearCacheVisible}
          togglePopup={toggleClearCachePopup}
        />
      </div>
    </div>
  );
}
