import Banner from "../components/banner";
import Services from "../components/service";
import { SERVICE_LIST } from "../constants/services";
import carPicture from "../assests/images/carBanner.png";
import { CLIENT_LIST } from "../constants/clients";
import Clients from "../components/client";
import ProductSection from "../components/productSection";
import ContactUs from "../components/contactUs";

const HomePage = () => {
  return (
    <div className="w-full h-screen content-start">
      <Banner image={carPicture} />
      <Services data={SERVICE_LIST} />
      <Clients data={CLIENT_LIST} />
      <ProductSection
        title="OUR PRODUCTS"
        subTitle="Claritas est etiam processus dynamicus, qui sequitur mutationem
        consuetudium lectorum."
        className="my-20"
        template="VERTICAL"
      />
      <ProductSection
        className="bg-black text-white py-20"
        title="BEST SELLER PRODUCTS"
        subTitle="Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum."
        template="HORIZONTAL"
      />
      <ContactUs />
    </div>
  );
};

export default HomePage;
