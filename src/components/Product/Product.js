import noImage from "../../images/noImg.jpeg";
const Product = (props) => {
  const {product, handleATC} = props;
  const { name, price, ratings, seller, img,  } = product;
  return (
    <div >
      <div className="border border-black rounded-xl h-full w-[300px] relative">
        <img
          className="h-[286px] w-[286px] rounded-xl mx-auto py-2"
          src={img}
          alt=""
          onError={(e) => {
            e.currentTarget.src = noImage;
          }}
        />

        <div className="flex flex-col p-2 space-y-8 mb-20">
          <div>
            <h1 className="text-xl">{name}</h1>
            <h4 className="text-base">Price: {price}</h4>
          </div>
          <div>
            <p>Menufacturar: {seller}</p>
            <p>Ratting: {ratings}</p>
          </div>
        </div>
        <button onClick={()=> handleATC(product)} className="w-full bg-[#FFE0B4] absolute bottom-0 rounded-br-xl rounded-bl-xl h-12 hover:bg-orange-400">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Product;
