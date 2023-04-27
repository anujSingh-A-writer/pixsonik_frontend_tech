import { GiHamburgerMenu } from "react-icons/gi";
import { RxDividerVertical } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import CartBag from "../../assests/svgs/CartBag";
import { layout } from "../../styles/style";

const Header = () => {
  return (
    <header className="h-[50px] bg-darkbg">
      <div className={`${layout.flex.row.spaceBetween} h-full px-5`}>
        <div>
          <GiHamburgerMenu className="text-white text-3xl" />
        </div>
        <div className={`${layout.flex.row.left} gap-2`}>
          <RxDividerVertical className="text-red text-4xl" />
          <FaSearch className="text-white text-lg" />
          <CartBag />
        </div>
      </div>
    </header>
  );
};

export default Header;
