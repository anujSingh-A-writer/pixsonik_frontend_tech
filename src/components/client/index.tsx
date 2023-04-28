import { layout } from "../../styles/style";
import { ClientsProps } from "./types";

const Clients: React.FC<ClientsProps> = (props) => {
  const { data } = props;
  return (
    <div className={`${layout.flex.col.center} bg-darkbg `}>
      {data.map((datum) => (
        <div className="relative w-full">
          <img
            className="w-full filter brightness-50 contrast-100"
            src={datum.backgroundImage}
            alt="backgroundImage"
          />
          <img
            src={datum.brandImage}
            alt="brandImage"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      ))}
    </div>
  );
};
export default Clients;
