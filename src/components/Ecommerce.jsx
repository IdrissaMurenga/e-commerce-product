import Badge from './Badge';
import Cart from './Cart';
import CartEmpty from './CartEmpty';
import Content from './Content';
import Images from './Images';
import Modal from './Modal';
import Navbar from './Navbar';
import { useState } from "react"

const Ecommerce = () => {
  // STATES
  // ===== navbar state
  const [openList, setOpenList] = useState(false)

  // ===== modal state
  const [openModal, setOpenModal] = useState(false)

  // ===== content state
  const [count, setCount] = useState(0);
  const [isVisible, setIsVsible] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [totalPrice, setTotalPrice] = useState("");
  let price = 125.00


  // FUNCTIONS
  // ===== navbar functions
      const openMenu = () => {
        if (!openList) {
            document.body.style.overflow = "hidden"

            setOpenList(true)
        }
      }
    const closeMenu = () => {
        if (openList) {
            document.body.style.overflow = "unset"
            setOpenList(false)
        }
  }
  // ===== modal function
  const toggleModal = () => setOpenModal(!openModal)
  

  // ===== content function
    const countPlus = () => {
        setCount(count + 1)
    }
    const countMinus = () => {
        if (count === 0) {
            return
        } setCount(count - 1)
    }
    const getPrice = () => {
      const total = price * count
      setTotalPrice(total)
  }
  const handleClick = () => {
    setIsVsible(!isVisible)
  }
  const showCount = () => {
    count === 0 ? setShowBadge(false) : setShowBadge(true)
  }
  return (
    <>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        toggleModal={toggleModal}
      />

      <Navbar
        openList={openList}
        openMenu={openMenu}
        closeMenu={closeMenu}
        toggleModal={toggleModal}
        handleClick={handleClick}
      />

      {
        showBadge ?
          <Badge
            count={count}
          />
          : ""
      }
      {
        isVisible && count === 0 ?
          <CartEmpty />
        : 
        isVisible ?
          <Cart
            totalPrice={totalPrice}
            count={count}
            price={price}
            getPrice={getPrice}
            toggleModal={toggleModal}
          />
        : ""
      }
      
      <div className="sm:max-w-[1200px] sm:mx-auto sm:mt-10 sm:flex sm:gap-8 sm:justify-around">
        <Images
          toggleModal={toggleModal}
        />
        <Content
          getPrice={getPrice}
          count={count}
          price={price}
          countPlus={countPlus}
          countMinus={countMinus}
          showCount={showCount}
        />
      </div>
     
    </>
  )
}

export default Ecommerce
