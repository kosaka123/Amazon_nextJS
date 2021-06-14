import Currency from "react-currency-formatter";
import moment from "moment";

function Order({ id, amount, amountShipping, images, timestamp, items }) {
  console.log("image:", images);
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div className="">
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{moment.unix(timestamp).format("MM/DD/YYYY")}</p>
        </div>

        <div className="">
          <p className="text-xs font-bold">TOTAL</p>

          <p>
            <span className="font-bold">
              <Currency quantity={amount} currency="GBP" />
            </span>{" "}
            (Including <Currency quantity={amountShipping} currency="GBP" /> for
            "<span className="italic">Next Day Delivery</span>")
          </p>
        </div>

        <p className="absolute top-3 right-3 sm:static text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.reduce((total, item) => total + item.quantity, 0)} items
        </p>

        <p className="w-100 sm:absolute top-3 right-2 sm:w-72 truncate text-xs whitespace-nowrap">
          ORDER #{id}
        </p>
      </div>

      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image) => (
            <img src={image} alt="" className="h-20 object-contain sm:h-32" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
