import icon1 from "../../../src/assets/images/icon-1.png"
import icon2 from "../../../src/assets/images/icon-2.png"
import icon3 from "../../../src/assets/images/icon-3.png"

const WhyChooseUs = () => {
    return (
        <div>
            <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Why Choose Us</h1>
      <p className="py-6">It’s our job to get you the best price for your home and make sure that you get the best possible deal on the property</p>
    </div>
    <div className="card shrink-0 lg:w-[700px] md:w-[700px] w-full shadow-2xl bg-base-100">
      <div className="flex px-5 my-5">
        <img className="w-28" src={icon1} alt="" />
        <div className="ml-5 space-y-2">
            <h4 className="text-2xl font-semibold">Wide Range of Properties</h4>
            <p>With a robust selection of popular properties on hand, as well as leading properties from real estate experts.</p>
        </div>
      </div>
      <div className="flex px-5 my-5">
        <img className="w-28" src={icon2} alt="" />
        <div className="ml-5 space-y-2">
            <h4 className="text-2xl font-semibold">Financing Made Easy</h4>
            <p>Our stress-free finance department that can find financial solutions to save you money.</p>
        </div>
      </div>
      <div className="flex px-5 my-5">
        <img className="w-28" src={icon3} alt="" />
        <div className="ml-5 space-y-2">
            <h4 className="text-2xl font-semibold">Thrusted by Thousands</h4>
            <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
        </div>
      </div>
    </div>
  </div>
</div>
            
            
            
        </div>
    );
};

export default WhyChooseUs;