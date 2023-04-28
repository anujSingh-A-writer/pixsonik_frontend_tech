import Banner from "../components/banner";
import Services from "../components/service";
import { serviceList } from "../constants/services";
import carPicture from "../assests/images/carBanner.png";

const HomePage = () => {
  return (
    <div className="w-full h-screen content-start">
      <Banner image={carPicture} />
      <Services data={serviceList} />
      
    </div>
  );
};

export default HomePage;
