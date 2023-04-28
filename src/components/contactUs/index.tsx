import { MdPhoneIphone } from "react-icons/md";
import { layout } from "../../styles/style";
import { SlLocationPin } from "react-icons/sl";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { CgInstagram } from "react-icons/cg";
import { SlSocialSkype } from "react-icons/sl";
import { RiCopyrightLine } from "react-icons/ri";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-start bg-customBlack text-white ">
      <div
        className={`flex flex-row items-end justify-between  px-8 sm:px-20 py-10 `}
      >
        <div className={`flex flex-col justify-start gap-3`}>
          <h1> CONTACT US </h1>
          <p className="w-2/3 text-xs">
            If you have any query, please contact us{" "}
            <span className="text-red">qwertyui@gmail.com </span>
          </p>
          <div className={`${layout.flex.row.left} gap-3`}>
            <SlLocationPin className="text-white" />
            <label className="text-xs">India</label>
          </div>
          <div className={`${layout.flex.row.left} gap-3`}>
            <MdPhoneIphone />
            <label className="text-xs"> +91 123456789</label>
          </div>
        </div>
        <div className={`${layout.flex.row.center} gap-3`}>
          <FiFacebook />
          <CgInstagram />
          <SlSocialSkype />
          <FiYoutube />
        </div>
      </div>
      <hr className="mx-8" />
      <div className={`${layout.flex.row.center} gap-3`}>
        <RiCopyrightLine />
        <p className="text-xs py-5">Copyright.2022.All Right Reserved</p>
      </div>
    </div>
  );
};

export default ContactUs;
