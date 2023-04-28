import { layout } from "../../styles/style";
import { ProductProps } from "./types";
import { MdOutlineShoppingCart } from "react-icons/md";

const Product: React.FC<Partial<ProductProps>> = (props) => {
  const {
    image,
    name,
    price,
    ratings,
    reviewCount = 0,
    discountInPercent,
  } = props;
  return (
    <div
      className={`flex flex-col items-start w-full rounded-lg gap-4 border `}
    >
      <div
        className={`${layout.flex.row.center} rounded-t-lg bg-palegray w-full`}
      >
        <img src={image} width={100} height={100} />
      </div>
      <div className="flex flex-col items-start px-4 gap-4 ">
        <div>
          <p className="text-xs">{`${
            reviewCount > 0 ? reviewCount : "No"
          } reviews`}</p>
        </div>
        <h6 className="font-bold text-left text-sm">{name}</h6>
        <label className="text-red font-bold">{`₹ ${price}/-`}</label>
      </div>
      <div className={`${layout.flex.row.center} w-full`}>
        <div
          className={`${layout.flex.row.center}bg-lightgray rounded-full w-5/6 py-2 mb-5 gap-1`}
        >
          <MdOutlineShoppingCart className="font-bold text-sm"/>
          <button className="font-bold text-sm">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
