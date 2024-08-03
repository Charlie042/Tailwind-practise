import { shoe8 } from "../assets/images";
import Button from '../Component/Button'
const SuperQuality = () => {
  return (
    <section className="flex w-full justify-between items-center max-lg:flex-col gap-6 max-container">
      <div className="flex flex-1 flex-col">
        <h1 className="font-bold text-4xl font-palanquin mb-5  max-w-lg ">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h1>
        <p className="text-slate-gray leading-7 max-w-[27rem]">
          Ensuring premium comfort and style, Our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, Innovation, and a touch of elegant
        </p>
        <p className="mt-5 text-slate-gray max-w-[27rem]">
          Our dedication to details and excellence ensures your satifaction
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={shoe8} 
        alt="Super Quality shoe"
        width={570}
        height={522}
        className="object-contain"
        />
      </div>
    </section>
  );
}

export default SuperQuality