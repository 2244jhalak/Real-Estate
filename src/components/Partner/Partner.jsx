import Partner1 from "../../../src/assets/images/partner-01-e1582734705113.jpg"
import Partner2 from "../../../src/assets/images/partner-02-e1582734691936.jpg"
import Partner3 from "../../../src/assets/images/partner-03-e1582734671602.jpg"
import Partner4 from "../../../src/assets/images/partner-04-e1582734649458.jpg"
import Partner5 from "../../../src/assets/images/partner-05-e1582734603812.jpg"

const Partner = () => {
    return (
        <div className="my-10 space-y-2">
            <h3 className="text-3xl font-bold text-center">Our Partner</h3>
            <div className="flex">
            <div className="w-1/5"><img src={Partner1} alt="" /></div>
            <div className="w-1/5"><img src={Partner2} alt="" /></div>
            <div className="w-1/5"><img src={Partner3} alt="" /></div>
            <div className="w-1/5"><img src={Partner4} alt="" /></div>
            <div className="w-1/5"><img src={Partner5} alt="" /></div>
            
        </div>
        </div>
    );
};

export default Partner;