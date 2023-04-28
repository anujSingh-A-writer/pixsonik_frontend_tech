import Banner from "../components/banner";
import Services from "../components/service";
import { SERVICE_LIST } from "../constants/services";
import carPicture from "../assests/images/carBanner.png";
import { CLIENT_LIST } from "../constants/clients";
import Clients from "../components/client";

const HomePage = () => {
  return (
    <div className="w-full h-screen content-start">
      <Banner image={carPicture} />
      <Services data={SERVICE_LIST} />
      <Clients data={CLIENT_LIST} />
    </div>
  );
};

export default HomePage;
