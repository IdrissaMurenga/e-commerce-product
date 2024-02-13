import { useState } from "react"
import product1 from "../images/image-product-1.jpg"
import product2 from "../images/image-product-2.jpg"
import product3 from "../images/image-product-3.jpg"
import product4 from "../images/image-product-4.jpg"
import leftIcon from "../images/icon-previous.svg";
import rightIcon from "../images/icon-next.svg";

const Images = () => {
    const productImages = [product1,product2,product3,product4]
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        const goToNextImage = currentIndex + 1 === productImages.length ? 0 : currentIndex + 1
        setCurrentIndex(goToNextImage)
    }
    const prevImage = () => {
        const goToPrevImage = currentIndex - 1 < 0 ? productImages.length - 1 : currentIndex - 1
        setCurrentIndex(goToPrevImage)
    }

    const dotClick = (index) => {
        setCurrentIndex(index)
    }
    return (
        <main >
            <div>
                <div className="*:mx-4 flex sm:hidden">
                    <div className="absolute top-60 ">
                        <button onClick={nextImage} className="text-6xl">
                            <img className="bg-white py-[10.4px] px-[13px] rounded-full" src={leftIcon} alt="" />
                        </button>
                    </div>
                    <div className=" absolute top-60 -z-0 right-0">
                        <button onClick={prevImage} className="text-6xl">
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
            <div className="hidden sm:flex w-96 gap-4 mt-6">              
                {productImages.map((thumb,index) => {
                    return (
                        <div key={index}>
                            <img className="rounded-2xl hover:opacity-45" src={thumb} onClick={() => dotClick(index) } alt="thumbs" />
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Images
