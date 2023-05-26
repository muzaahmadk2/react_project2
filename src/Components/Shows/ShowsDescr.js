import { Fragment, useContext } from "react";
import CartContext from "../../Store/Cart-Context";
import Card from "../UI/Card";

const ShowsDescr = (props) => {
  const crtCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const id= Math.random();
    crtCtx.addProduct({
      id:id,
      name: event.target[0].value,
      description: event.target[1].value,
      prise: event.target[2].value,
      large: event.target[3].value,
      medium: event.target[4].value,
      small: event.target[5].value,
    });
    crtCtx.addList({
      id: id,
      name: event.target[0].value,
      description: event.target[1].value,
      prise: event.target[2].value,
      large: event.target[3].value,
      medium: event.target[4].value,
      small: event.target[5].value,
    });
};
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Show Name</label>
        <input id="name" type={"text"}></input>
        <label htmlFor="descr">Description</label>
        <input id="descr" type={"text"}></input>
        <label htmlFor="price">Price</label>
        <input id="price" type={"number"}></input>
        <label htmlFor="L">Large</label>
        <input id="name" type={"number"} defaultValue={10}></input>
        <label htmlFor="M">Medium</label>
        <input id="M" type={"number"} defaultValue={10}></input>
        <label htmlFor="s">Small</label>
        <input id="s" type={"number"} defaultValue={10}></input>
        <button type="submit">Add Product</button>
      </form>
    </Card>
  );
};
export default ShowsDescr;
