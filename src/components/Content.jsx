import plus from "../images/icon-plus.svg"
import minus from "../images/icon-minus.svg"

const Content = ({ countMinus, countPlus, count, price, getPrice, showCount}) => {
    
    return (
        <main className="p-4 *:pt-4 sm:w-[460px]">
            <h2 className="font-bold text-sm tracking-widest text-[#ff7d1a]">SNEAKERS COMPANY</h2>
            <h1 className="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
            <p className="text-[#b6bcc8] text-sm">
                These low-profile sneakers are your perfect casual wear companion. Featuring a
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
            <div className="flex font-bold justify-between items-center sm:block *:sm:pt-4">
                <div className="flex items-center gap-4">
                    <h2 className="text-4xl">${price}</h2>
                    <h2 className="px-2.5 rounded-md text-[#ff7d1a] bg-[#ffede0]">50%</h2>
                </div>
                <h2 className="text-[#b6bcc8] line-through">$250.00</h2>
            </div>
            <div className="sm:flex gap-4">
                <div className="bg-[#f7f8fd] sm:py-0 flex items-center justify-between p-4 mb-4 sm:mb-0 rounded-xl sm:mt-0 sm:gap-6 ">
                    <div>
                        <img onClick={countMinus} src={minus} alt="minus icon" />
                    </div>
                    <h2 className="font-bold">{count}</h2>
                    <div>
                        <img onClick={countPlus} src={plus} alt="plus icon" />
                    </div>
                </div>
                <div className="bg-[#ff7d1a] p-4 sm:px-16 sm:py-3 rounded-xl">
                    <button className="flex items-center gap-4 mx-auto cursor-pointer" onClick={() => { getPrice(); showCount(); }}>
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffff" fillRule="nonzero"/></svg>
                        <h2 className="font-bold text-sm text-white">Add to Cart</h2>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Content
