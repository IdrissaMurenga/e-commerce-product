import img from "../images/image-product-1-thumbnail.jpg"
const Cart = ({price, count, totalPrice,toggleModal}) => {
  return (
    <div className="bg-white top-20 right-10 rounded-md absolute sm:right-[280px] sm:top-14 shadow-lg">
        <h1 className="p-4 font-bold border-b-2">Cart</h1>
        <div className="flex gap-2 p-4">
            <div>
                <img src={img} className="w-12 rounded-md" alt="" />
            </div>
            <div>
                <p>Fall Limited Edition Sneakers</p>
                <p>{price} x {count} <span className="font-bold">${totalPrice}</span></p>
            </div>
      </div>
      <div className="grid bg-[#ff7d1a] p-4 sm:px-16 mb-4 mx-2 sm:py-3 rounded-xl font-bold text-white">
        <button onClick={toggleModal}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
