import pay1 from "../assets/pay1.svg";
import pay2 from "../assets/pay2.svg";
import pay3 from "../assets/pay3.svg";
import pay4 from "../assets/pay4.svg";
import pay5 from "../assets/pay5.svg";
import pay6 from "../assets/pay6.svg";
import instaIcon from "../assets/Insta.svg";
import linkedinIcon from "../assets/linkedin.svg";
import usCurrency from "../assets/US-currency.svg";

export const Footer = () => {
  return (
    <footer className="font-simplon bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-8 md:py-12 lg:py-20">
        <div className="block md:hidden">
          <div className="mb-8">
            <h3 className="text-base font-semibold mb-4">
              BE THE FIRST TO KNOW
            </h3>
            <p className="text-sm mb-6 text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </p>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="flex-1 px-4 py-3 bg-white border border-gray-600 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
              <button className="px-6 py-3 text-sm font-medium text-white border border-white bg-transparent hover:bg-gray-800 transition whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>

          <hr className="border-gray-700 my-6" />
          <div className="mb-8">
            <h3 className="text-base font-semibold mb-4">CALL US</h3>
            <div className="flex items-center space-x-2 text-sm">
              <p>+44 221 133 5360</p>
              <span className="text-sm">•</span>
              <p>customercare@mettamuse.com</p>
            </div>
          </div>

          <hr className="border-gray-700 my-6" />

          <div className="mb-8">
            <h3 className="text-base font-semibold mb-4">CURRENCY</h3>
            <div className="flex items-center space-x-2 mb-3">
              <img src={usCurrency} alt="USD" className="w-5 h-5" />
              <span className="text-sm">•</span>
              <span className="text-sm">USD</span>
            </div>
          </div>

          <hr className="border-gray-700 my-6" />

          <div className="space-y-6">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-base font-semibold py-2">
                mettä muse
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 pl-0">
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Stories
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Artisans
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Boutiques
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      EU Compliances Docs
                    </a>
                  </li>
                </ul>
              </div>
            </details>

            <hr className="border-gray-700" />

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-base font-semibold py-2">
                QUICK LINKS
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 pl-0">
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Orders & Shipping
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Join/Login as a Seller
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Payment & Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Return & Refunds
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href = "/"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </details>

            <hr className="border-gray-700" />

            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer text-base font-semibold py-2">
                FOLLOW US
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 pl-0">
                <div className="flex space-x-4 mb-6">
                  <a href = "/" className="hover:opacity-80 transition-opacity">
                    <img src={instaIcon} alt="Instagram" className="w-8 h-8" />
                  </a>
                  <a href = "/" className="hover:opacity-80 transition-opacity">
                    <img
                      src={linkedinIcon}
                      alt="LinkedIn"
                      className="w-8 h-8"
                    />
                  </a>
                </div>
              </div>
            </details>

            <hr className="border-gray-700" />

            <div>
              <h4 className="text-base font-semibold mb-4">
                mettä muse ACCEPTS
              </h4>
              <div className="flex flex-wrap gap-2">
                {[pay1, pay2, pay3, pay4, pay5, pay6].map((img, index) => (
                  <div
                    key={index}
                    className="w-12 h-8 bg-white rounded flex items-center justify-center p-1"
                  >
                    <img
                      src={img}
                      alt={`Payment method ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-8" />

          <div className="text-center text-sm text-gray-300">
            <p>Copyright © 2023 mettamuse. All rights reserved.</p>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                BE THE FIRST TO KNOW
              </h3>
              <p className="text-lg mb-8">
                Sign up for updates from mettä muse.
              </p>
              <div className="flex max-w-lg space-x-4">
                <input
                  type="email"
                  placeholder="Enter your e-mail..."
                  className="flex-1 px-4 py-3 bg-white border border-gray-600 text-lg text-gray-800 placeholder-[#BFC8CD] focus:outline-none focus:border-gray-400"
                />
                <button className="px-6 py-3 text-lg font-medium text-white border border-white bg-transparent hover:bg-gray-800 transition whitespace-nowrap">
                  SUBSCRIBE
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
              <div className="space-y-2 text-lg mb-8">
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">CURRENCY</h4>
                <div className="flex items-center space-x-2 mb-3">
                  <img src={usCurrency} alt="USD" className="w-5 h-5" />
                  <span className="text-lg">•</span>
                  <span className="text-lg">USD</span>
                </div>
                <p className="text-sm text-gray-300">
                  Transactions will be completed in Euros and a currency
                  reference is available on hover.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-white my-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">mettä muse</h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Stories
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Artisans
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Boutiques
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    EU Compliances Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">QUICK LINKS</h3>
              <ul className="space-y-3 text-lg">
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Orders & Shipping
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Join/Login as a Seller
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Payment & Pricing
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Return & Refunds
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href = "/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">FOLLOW US</h3>
              <div className="flex space-x-4 mb-8">
                <a href = "/" className="hover:opacity-80 transition-opacity">
                  <img src={instaIcon} alt="Instagram" className="w-8 h-8" />
                </a>
                <a href = "/" className="hover:opacity-80 transition-opacity">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
                </a>
              </div>

              <h4 className="text-base font-semibold mb-4">
                mettä muse ACCEPTS
              </h4>
              <div className="flex flex-wrap gap-2">
                {[pay1, pay2, pay3, pay4, pay5, pay6].map((img, index) => (
                  <div
                    key={index}
                    className="w-12 h-8 bg-white rounded flex items-center justify-center p-1"
                  >
                    <img
                      src={img}
                      alt={`Payment method ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-gray-700 my-8" />

          <div className="text-center text-sm text-gray-300">
            <p>Copyright © 2023 mettamuse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
