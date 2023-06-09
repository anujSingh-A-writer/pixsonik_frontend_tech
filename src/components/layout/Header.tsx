import { GiHamburgerMenu } from "react-icons/gi";
import { RxDividerVertical } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import CartBag from "../../assests/svgs/CartBag";
import { layout } from "../../styles/style";
import { menuItems } from "../../constants/sideNaviagtion";

const Header = () => {
  return (
    <header className="h-[50px] bg-darkbg">
      <div
        className={`${layout.flex.row.spaceBetween} h-full px-5 lg:px-[10%] w-full`}
      >
        <div className={`${layout.flex.row.center} h-full`}>
          <ul
            className={`hidden lg:flex ${layout.flex.row.left} text-white h-full cursor-pointer`}
          >
            {menuItems.map((eachItem) => (
              <li
                key={eachItem.path}
                className={`${layout.flex.row.center}hover:bg-red h-full px-5 mx-2`}
              >
                <a>{eachItem.name}</a>
              </li>
            ))}
          </ul>
          {/* Menu icon */}
          <GiHamburgerMenu className="text-white text-3xl lg:hidden" />
        </div>
        <div className={`${layout.flex.row.left} gap-2 lg:gap-5`}>
          {/* Menu icon */}
          <GiHamburgerMenu className="text-white text-3xl hidden lg:block" />

          {/* Search */}
          <RxDividerVertical className="text-red text-4xl lg:hidden" />
          <FaSearch className="text-white text-lg lg:hidden" />

          {/* Cart Bag */}
          <CartBag />
        </div>
      </div>
    </header>
  );
};

export default Header;
