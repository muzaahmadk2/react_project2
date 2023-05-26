import { useContext } from "react";
import CartContext from "../../Store/Cart-Context";

const ListItem = (props) => {

    const crtCtx = useContext(CartContext);
    const addLargeItemHandler = (event) => {
        event.preventDefault();
        crtCtx.addItem({...props, size:"l",quantity:1});
    }
    const addMediumItemHandler = (event) => {
        event.preventDefault();
        crtCtx.addItem({...props, size:"m",quantity:1});
    }
    const addSmallItemHandler = (event) => {
        event.preventDefault();
        crtCtx.addItem({...props, size:"s",quantity:1});
    }

  return (
    <li>
      <div>
        <h3>{props.name}</h3>
        {props.descr}
        <span style={{marginLeft: '.5rem'}}>${props.prise}</span>
          <button style={{marginLeft: '.5rem'}} onClick={addLargeItemHandler}>
            <div>Large</div>
            {props.large}
          </button>
          <button style={{marginLeft: '.5rem'}} onClick={addMediumItemHandler}>
            <div>Medium</div>
            {props.medium}
          </button>
          <button style={{marginLeft: '.5rem'}} onClick={addSmallItemHandler}>
            <div>Small</div>
            {props.small}
          </button>
        </div>
    </li>
  );
};
export default ListItem;
