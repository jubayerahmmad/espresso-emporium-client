import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationPin,
  FaPhone,
} from "react-icons/fa6";
import logo from "../assets/logo1.png";
import { BiMailSend } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-footer">
      <div className="w-10/12 mx-auto lg:flex justify-between items-center gap-6 p-6 lg:p-12">
        {/* social */}
        <div className="space-y-6">
          <img className="w-16 h-16" src={logo} alt="logo" />
          <h1 className="text-4xl lg:text-6xl text-orange-950 font-semibold font-rancho">
            Espresso Emporium
          </h1>
          <p>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-4">
            <FaFacebook size={36}></FaFacebook>
            <FaInstagram size={36}></FaInstagram>
            <FaLinkedin size={36}></FaLinkedin>
          </div>
          <h1 className="text-4xl lg:text-6xl text-orange-950 font-semibold font-rancho">
            Get in Touch
          </h1>
          <div className="flex items-center gap-2">
            <FaPhone></FaPhone>
            <p>+88 01533 333 333</p>
          </div>
          <div className="flex items-center gap-2">
            <BiMailSend></BiMailSend>
            <p>info@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <FaLocationPin></FaLocationPin>
            <p>72, Wall street, King Road, Dhaka</p>
          </div>
        </div>

        {/* connect */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl text-orange-950 font-semibold font-rancho">
            Connect With Us
          </h1>
          <form className="flex flex-col space-y-4">
            <input
              className="p-4 rounded-md focus:shadow-xl"
              type="text"
              placeholder="Name"
            />
            <input
              className="p-4 rounded-md focus:shadow-xl"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="p-4 rounded-md focus:shadow-xl"
              placeholder="Message"
            ></textarea>
            <button className="submit btn rounded-full border-orange-950 font-rancho text-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
