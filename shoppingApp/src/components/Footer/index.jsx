import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#386790]  mt-10">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                ShopNow
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Help
              </h2>
              <ul className="  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">
                Follow us
              </h2>
              <ul className="  font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/github-arpan"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/arpan-chakraborty-14b08231a/"
                    className="hover:underline"
                  >
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase ">Legal</h2>
              <ul className="  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600 sm:mx-auto  lg:my-6" />
        <div className="sm:flex sm:items-center ">
          <div className=" w-full  py-2">
            <p className="w-full text-center">
              Created with ❤️ By
              <span className="font-bold">
                <a href="https://arpanchrakraborty.netlify.app/"> Arpan </a>
              </span>
              2024 ©ArpanChakraborty
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
