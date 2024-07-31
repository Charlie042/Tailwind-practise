import Button from "../Component/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constant";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";
import ShoeCards from "../Component/ShoeCards";
const Hero = () => {
const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)
  return (
    <section
      id="Home"
      className="w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div
        className="relative flex-1 xl:w-2/5 flex flex-col
      justify-center items-start w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl font-montserrat text-coral-red leading-normal">
          Our Summer collection
        </p>
        <h1 className="text-8xl mt-10 font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life
        </p>
        <Button label="Show me" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap mt-20 gap-16 w-full ml-20">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat font-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 relative bg-primary  bg-hero bg-center">
        <img
          src={bigShoeImg}
          alt="big shoes"
          width={610}
          height={500}
          className="object-contain relative z-10 "
          // I want the picture to be switching on it own instead of if you pick it changes
        />
      </div>
      <div className="flex sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6 absolute bottom-[60%]">
        {shoes.map((image,index)=>(
          <div key={index}>
            <ShoeCards
            index={index}
            imageURL={image}
            changeShoe ={(shoe)=> setBigShoeImg(shoe)}
            bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
