import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );
  return (
    <Modal onClose={props.onClose}>
      <div>
        <ul className={classes["cart-items"]}>{cartItems}</ul>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>25.99</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>
            close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
