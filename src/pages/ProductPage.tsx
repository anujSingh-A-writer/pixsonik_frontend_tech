import { MdKeyboardArrowUp } from "react-icons/md";
import ContactUs from "../components/contactUs";
import Product from "../components/product";
import ProductSection from "../components/productSection";
import { PRODUCT_LIST } from "../constants/products";
import { layout } from "../styles/style";
import { CgMenuGridO } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";

const ProductPage = () => {
  return (
    <div className="">
      <div
        className={`${layout.flex.row.spaceBetween} h-[60px] px-5 shadow-lg mb-5`}
      >
        <div className={`${layout.flex.row.left} gap-3`}>
          <CgMenuGridO />
          <TfiMenuAlt className="text-gray-300" />
          <p>Showing 1 to 9 of 37 items</p>
        </div>
        <div className={`${layout.flex.row.left} gap-5 pr-5`}>
          <label className="text-[#6C6F7A] font-bold">Sort by</label>
          <label className="text-[#6C6F7A] font-bold">Filter</label>
        </div>
      </div>
      <div>
        <div className={`flex flex-wrap sm:px-10 items-center justify-center`}>
          {PRODUCT_LIST.map((product, index) => (
            <div
              className={`${layout.flex.col.center} w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 `}
            >
              <div className={`${"w-full sm:w-5/6 lg:w-full"} `}>
                <Product
                  key={index}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  ratings={product.ratings}
                  reviewCount={product.reviewCount}
                  discountInPercent={product.discountInPercent}
                  template={"VERTICAL"}
                />
              </div>
            </div>
          ))}

          <div className={`${layout.flex.col.center} w-full mb-5 mt-10`}>
            <button className="w-[200px] bg-black text-white text-xs font-semibold p-3 rounded-full">
              LOAD MORE PRODUCTS
            </button>
            <div className={`${layout.flex.row.right} w-full`}>
              <button className="p-5 rounded-full bg-red shadow-2xl shadow-red">
                <MdKeyboardArrowUp className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default ProductPage;
