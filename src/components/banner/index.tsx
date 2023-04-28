import { FaAngleRight } from "react-icons/fa";
import { layout } from "../../styles/style";
import { BannerProps } from "./types";

const Banner: React.FC<BannerProps> = (props) => {
  const { image } = props;
  return (
    <div className="w-full h-2/3">
      <div className="relative w-full h-full">
        <img
          className="absolute object-cover w-full h-full"
          src={image}
          alt="meraai login banner"
        />
        <div className="!absolute bottom-5 sm:bottom-10 w-full">
          <div className="mb-5 sm:mb-10">
            <h1 className="text-3xl text-white text-left mx-[8%] mb-5 w-[80%] font-bold">
              EXPERIANCE THE POWER WITHIN
            </h1>
            <h3 className="w-[50%] text-white text-left mx-[8%] mb-5 flex items-end text-xs">
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram.
            </h3>
            <button className=" bg-white rounded-full pl-4 pr-1 py-0.5 mx-[8%] text-xs">
              <span className={`${layout.flex.row.spaceEvenly} gap-2`}>
                <label className="cursor-pointer text-[9px] font-semibold">
                  VIEW COLLECTION
                </label>
                <span
                  className={`${layout.flex.row.center} h-8 w-8 bg-drakgrey rounded-full`}
                >
                  <FaAngleRight className="text-white" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
