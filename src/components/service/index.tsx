import { layout } from "../../styles/style";
import { ServicesProps } from "./types";

const Services: React.FC<ServicesProps> = (props) => {
  const { data } = props;
  return (
    <div
      className={`w-full flex flex-wrap items-center justify-center bg-darkbg`}
    >
      {data.map((datum) => (
        <div
          key={datum.id}
          className={`${layout.flex.col.center} w-full md:w-1/3 my-5 text-white text-center gap-2`}
        >
          <h2 className="text-sm">{datum.title}</h2>
          <p className="text-xs w-[70%]">{datum.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
