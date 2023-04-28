import { PRODUCT_LIST } from "../../constants/products";
import { layout } from "../../styles/style";
import Product from "../product";
import { ProductSectionProps } from "./types";
import { AiFillStar } from "react-icons/ai";

const ProductSection: React.FC<ProductSectionProps> = (props) => {
  const { className } = props;
  return (
    <div className={`${layout.flex.col.center} ${className} text-center`}>
      <div className={`${layout.flex.row.spaceEvenly} gap-3`}>
        <AiFillStar className="text-red" />
        <h1 className="font-bold">OUR PRODUCTS</h1>
        <AiFillStar className="text-red" />
      </div>
      <p className="text-xs mt-6 mb-10">
        Claritas est etiam processus dynamicus, qui sequitur mutationem
        consuetudium lectorum.
      </p>
      <div className={`flex flex-wrap sm:px-10 items-center justify-center`}>
        {PRODUCT_LIST.map((product, index) => (
          <div
            className={`${layout.flex.col.center} w-2/3 sm:w-1/2 lg:w-1/4 p-2`}
          >
            <div className={`w-full sm:w-2/3 lg:w-full`}>
              <Product
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
                ratings={product.ratings}
                reviewCount={product.reviewCount}
                discountInPercent={product.discountInPercent}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
