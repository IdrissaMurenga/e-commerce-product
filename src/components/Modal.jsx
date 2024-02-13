import { useState } from "react"
import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg"
import leftIcon from "../images/icon-previous.svg";
import rightIcon from "../images/icon-next.svg";



const Modal = ({ openModal, toggleModal }) => {
    const productImages = [product1,product2,product3,product4]
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        const goToNextImage = currentIndex + 1 === productImages.length ? 0 : currentIndex + 1
        setCurrentIndex(goToNextImage)
        // setCurrentIndex( currentIndex + 1 === productImages.length ? 0 : currentIndex + 1)
    }
    const prevImage = () => {
        const goToPrevImage = currentIndex - 1 < 0 ? productImages.length - 1 : currentIndex - 1
        setCurrentIndex(goToPrevImage)
        // setCurrentIndex(currentIndex - 1 < 0 ? productImages.length - 1 : currentIndex - 1)
    }

    const dotClick = (index) => {
        setCurrentIndex(index)
    }
    
  return (
    <div>
        <dialog id="my_modal_3" className={`modal ${openModal ? "modal-open" : ""}`}>
            <div>
                <div className="*:mx-4 flex">
                    <div className="absolute top-60 left-[540px]">
                        <button onClick={nextImage} >
                            <img className="bg-white py-[10.4px] px-[13px] rounded-full" src={leftIcon} alt="" />
                        </button>
                    </div>
                    <div className=" absolute top-60 right-[540px] ">
                        <button onClick={prevImage} >
                            <img className="bg-white py-[10.5px] px-[13px] rounded-full" src={rightIcon} alt="" />
                        </button>
                    </div>
                </div>
                <img
                    key={currentIndex}
                    src={productImages[currentIndex]}
                    alt="images"
                    className= "sm:w-96 sm:rounded-2xl"
                />
            </div>
            <div className="hidden sm:flex w-96 gap-4 ">              
                {productImages.map((thumb,index) => {
                    return (
                        <div key={index}>
                            <img className="rounded-2xl hover:opacity-45" src={thumb} onClick={() => dotClick(index) } alt="" />
                        </div>
                    )
                })}
            </div>        
            <button className="btn btn-sm btn-circle btn-ghost absolute right-[575px] top-10 " onClick={toggleModal}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#ffff" fill-rule="evenodd"/></svg>
            </button>
        </dialog>
    </div>
  )
}

export default Modal
