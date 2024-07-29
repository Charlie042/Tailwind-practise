import Button from "../Component/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../Constant";
const Hero = () => {
  return (
    <section
      id="Home"
      className="w-full 
    xl:flex-row flex-col min-h-screen max-container
    "
    >
      <div
        className="relative xl:w-2/5 flex flex-col
      justify-center items-start w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red leading-normal">
          Our Summer collection
        </p>
        <h1 className="text-8xl mt-10 font-palanquin max-sm:text-[72px] max-sm:leading-[82px]">
          <span>The New Arrival </span>
          <br />
          <span>Nike </span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life
        </p>
      </div>
      <Button label="Show me" iconURL={arrowRight} />
      <div className="flex justify-start items-start flex-wrap mt-20 gap-16 w-full">
        {statistics.map((stat, index) => (
          <div key={index}>
            <p>{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
