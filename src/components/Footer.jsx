import logoFooter from "../assets/images/logo-footer.png";
import footerBg from "../assets/images/footer-bg.png";

const Footer = () => {
  return (
    <div className="relative max-w-[1440px] mx-auto">
      {/* Newsletter Card */}
      <div className="border-2 border-white rounded-lg relative -top-40 px-4 max-w-3xl mx-auto">
        <div
          className="h-64 sm:h-72 md:h-80 flex flex-col justify-center items-center p-4 rounded-lg my-4"
          style={{
            backgroundImage: `url('${footerBg}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center my-4 text-gray-900">
            Subscribe to our Newsletter
          </h1>
          <p className="text-center text-gray-600 mb-4 text-sm sm:text-base">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 w-full px-4 sm:px-0">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered max-w-82 bg-white text-gray-950 placeholder:text-gray-900 flex-1 px-2 py-3"
            />
            <button className="btn bg-gradient-to-r from-orange-300 to-red-600 w-full sm:w-auto border-none hover:text-slate-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <img className="mx-auto -mt-24" src={logoFooter} alt="footer logo" />

      {/* Footer */}
      <footer className="footer flex flex-col sm:flex-row justify-between mt-8 p-6 sm:p-10 max-w-6xl mx-auto gap-8 sm:gap-0">
        <nav className="flex-1">
          <h6 className="text-lg font-bold text-white mb-2">About Us</h6>
          <p className="text-gray-300 text-sm sm:text-base">
            We are a passionate team dedicated to <br />
            providing the best services to our customers.
          </p>
        </nav>

        <nav className="flex-1">
          <h6 className="text-lg font-bold text-white mb-2">Quick Links</h6>
          <div className="flex flex-col gap-1">
            <a className="link link-hover text-gray-300 text-sm sm:text-base">
              Home
            </a>
            <a className="link link-hover text-gray-300 text-sm sm:text-base">
              Fixture
            </a>
            <a className="link link-hover text-gray-300 text-sm sm:text-base">
              Team
            </a>
            <a className="link link-hover text-gray-300 text-sm sm:text-base">
              Schedules kit
            </a>
          </div>
        </nav>

        <form className="flex-1">
          <h6 className="text-lg font-bold text-white mb-2">Subscribe</h6>
          <fieldset className="w-full sm:w-80">
            <label className="text-gray-300 text-sm sm:text-base">
              Subscribe to our newsletter for the latest updates.
            </label>
            <div className="join mt-4 flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item text-gray-300 placeholder:text-gray-300 flex-1 px-2 py-3"
              />
              <button className="btn bg-gradient-to-r from-orange-300 to-red-600 join-item w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <hr className="text-stone-50 h-0.5/2 " />
      <div className="max-w-[1440px] mx-auto ">
        <p className="text-gray-300 text-center p-6 ">
          @2025 Imamul Kadir All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
