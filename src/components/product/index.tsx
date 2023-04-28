import { layout } from "../../styles/style";
import { ProductProps } from "./types";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";

const Product: React.FC<Partial<ProductProps>> = (props) => {
  const {
    image,
    name,
    price,
    ratings = 5,
    reviewCount = 0,
    discountInPercent,
    template,
  } = props;
  const starCount = Array.from({ length: ratings });

  let content = (
    <div
      className={`flex flex-col items-start w-full rounded-lg gap-4 border `}
    >
      <div
        className={`${layout.flex.row.center} rounded-t-lg bg-palegray w-full`}
      >
        <img src={image} width={100} height={100} className="py-8" />
      </div>
      <div className="flex flex-col items-start px-4 gap-1 w-full ">
        <div className="flex w-full pb-4 text-left border-b border-gray-400">
          {starCount.map(() => (
            <AiFillStar className="text-yellow-400" />
          ))}
          <p className="text-xs px-2">{`${
            reviewCount > 0 ? reviewCount : "No"
          } reviews`}</p>
        </div>
        <h6 className="w-full font-bold text-left text-sm py-4 text-ashgray border-b border-gray-400">
          {name}
        </h6>
        <label className="text-red font-bold pt-4">{`₹ ${price}/-`}</label>
      </div>
      <div className={`${layout.flex.row.center} w-full`}>
        <div
          className={`${layout.flex.row.center}bg-lightgray rounded-full w-5/6 py-2 mb-5 gap-1`}
        >
          <MdOutlineShoppingCart className="font-bold text-sm" />
          <button className="font-bold text-sm">Add to Cart</button>
        </div>
      </div>
    </div>
  );

  if (template === "HORIZONTAL") {
    content = (
      <div className={`flex flex-row w-full pb-10`}>
        <div
          className={`${layout.flex.row.center} rounded-t-lg bg-palegray w-full`}
        >
          <img src={image} width={100} height={100} className="py-8" />
        </div>
        <div className="flex flex-col items-start px-4 gap-1 w-full ">
          <div className="flex w-full pb-4 text-left border-b border-gray-400">
            {starCount.map(() => (
              <AiFillStar className="text-yellow-400" />
            ))}
            <p className="text-xs px-2 text-ashgray">{`${
              reviewCount > 0 ? reviewCount : "No"
            } reviews`}</p>
          </div>
          <h6 className="w-full font-bold text-left text-sm py-4 text-ashgray border-b border-gray-400">
            {name}
          </h6>
          <label className="text-red font-bold pt-4">{`₹ ${price}/-`}</label>
        </div>
      </div>
    );
  }
  return content;
};

export default Product;
