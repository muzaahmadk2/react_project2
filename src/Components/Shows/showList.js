import { useContext } from "react";
import ListItem from "./ListItem";
import CartContext from "../../Store/Cart-Context";
import Card from "../UI/Card";

const ShowList = (props) => {
  const crtCtx = useContext(CartContext);

  const showLists = (
    <ul>
    {crtCtx.lists.map((list) => (
    <ListItem
      key={list.id}
      id={list.id}
      name={list.name}
      descr={list.description}
      prise={+list.prise}
      large={list.large}
      medium={list.medium}
      small={list.small}
    />
  ))}
  </ul>
  );

  return (
    <Card >
      {showLists}
      
    </Card>
  );
};

export default ShowList;
