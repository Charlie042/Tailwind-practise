import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images"
import Button from "../Component/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
        src={offer} 
        alt="special Offer picture" 
        width={773}
        height={687}
        className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="font-bold text-4xl font-palanquin mb-5  max-w-lg ">
          <span className="text-coral-red">Special</span>{" "}
          offer
        </h1>
        <p className="text-slate-gray leading-7 max-w-[27rem] ">
          Embark on shopping journey that redefines your experience
          with unbeatable deals. From premier selection to incredible savings,
          we offer unparalleled that sets us apart.
        </p>
        <p className="mt-5 text-slate-gray max-w-[27rem]">
         Navigate a realm of possiblities designed to fulfil your unique
         desires, surpassing the loftiess expectation. Your journey with is 
         nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-5">
          <Button label="View Details" iconURL={arrowRight} />
          <Button label="Learn more" 
           background='bg-white'
           borderClr='border-slate-gray'
           textClr='text-slate-gray'
           />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer