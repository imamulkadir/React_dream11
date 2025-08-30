import logoFooter from "../assets/images/logo-footer.png";
import footerBg from "../assets/images/footer-bg.png";

const Footer = () => {
  return (
    <div className="">
      <div className="border-2  border-white rounded-lg relative -top-[160px] px-4 ">
        <div
          className="h-72 flex flex-col justify-center items-center p-4 rounded-lg my-4 "
          style={{
            backgroundImage: `url('${footerBg}')`, // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl font-bold text-center my-4">
            Subscribe to our Newsletter
          </h1>
          <p className="text-center text-gray-300 mb-4">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered bg-white join-item text-gray-950 placeholder:text-gray-900"
            />
            <button className="btn bg-gradient-to-r from-orange-300 to-red-600 join-item">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <img className="mx-auto" src={logoFooter} alt="footer logo" />
      <footer className="footer sm:footer-horizontal flex justify-between mt-4  p-10">
        <nav>
          <h6 className="text-lg font-bold text-white">About Us</h6>
          <p className="text-gray-300">
            We are a passionate team dedicated to <br />
            providing the best services to our customers.
          </p>
        </nav>
        <nav>
          <h6 className="text-lg font-bold text-white">Quick Links</h6>
          <a className="link link-hover text-gray-300">Home</a>
          <a className="link link-hover text-gray-300">Fixture</a>
          <a className="link link-hover text-gray-300">Team</a>
          <a className="link link-hover text-gray-300">Schedules kit</a>
        </nav>
        <form>
          <h6 className="text-lg font-bold text-white">Subscribe</h6>
          <fieldset className="w-80">
            <label className="text-gray-300">
              Subscribe to our newsletter for the latest updates.
            </label>
            <div className="join mt-4">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item text-gray-300 placeholder:text-gray-300"
              />
              <button className="btn bg-gradient-to-r from-orange-300 to-red-600 join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
