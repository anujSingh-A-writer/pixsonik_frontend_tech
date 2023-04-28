import { MdKeyboardArrowUp } from "react-icons/md";
import ContactUs from "../components/contactUs";
import Product from "../components/product";
import ProductSection from "../components/productSection";
import { PRODUCT_LIST } from "../constants/products";
import { layout } from "../styles/style";

const ProductPage = () => {
  return (
    <div className="">
      <div className="h-[60px] drop-shadow-lg"></div>
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
              <button className="p-5 rounded-full bg-red">
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
