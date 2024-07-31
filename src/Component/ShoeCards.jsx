const ShoeCards = ({ imageURL, changeShoe, bigShoeImg }) => {
  
  function handleClick (){
    if(bigShoeImg !== imageURL){
      changeShoe(imageURL.bigShoe)
    }
  }
  return (
    <div
      className={`border-2 rounded-xl
   ${
     bigShoeImg === imageURL.bigShoe ? "border-coral-red" : "border-transparent"
   } ' cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center px-3 py-5 bg-card rounded-lg bg-center">
        <img
          src={imageURL.bigShoe}
          alt="Shoe collection"
          width={105}
          height={150}
          className="object-fit"
        />
      </div>
    </div>
  );
};
export default ShoeCards;
