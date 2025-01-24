import React from "react";

const FooterApp = () => {
  return (
    <footer className="bg-[#242424] text-white py-8 px-4 mt-[7rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-4xl font-semibold"> Music</p>
            <p className="mt-2 text-sm text-gray-400">
              Discover the ultimate music experience.
            </p>
          </div>

          <div className="flex justify-center md:justify-between">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h3 className="font-semibold text-lg">Espolra</h3>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Browse
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Radio
              </a>
            </div>
            <div className="flex flex-col gap-3 text-center md:text-left ml-8">
              <h3 className="font-semibold text-lg">Account</h3>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Sign In
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Join Now
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                Supporto
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="font-semibold text-lg">Connect with us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-200">
                <img
                  src="src/assets/assets_given/images/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:text-gray-200">
                <img
                  src="src/assets/assets_given/images/twitter.png"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:text-gray-200">
                <img
                  src="src/assets/assets_given/images/instagram.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>© 2025 Apple Music. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-gray-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-200">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;
