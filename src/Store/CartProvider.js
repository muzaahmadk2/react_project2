import CartContext from "./Cart-Context";
import { useCallback, useEffect, useState } from "react";
import axios from 'axios';

const CartProvider = (props) => {
  const [listItems, setListItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  function postCartItem(item) {
    axios({
      method: "post",
      url: 'https://crudcrud.com/api/88462c6811a34df3a90fef599c3dccd2/cart',
      data: item,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  function postListItem(item) {
    axios({
      method: "post",
      url: 'https://crudcrud.com/api/88462c6811a34df3a90fef599c3dccd2/list',
      data: item,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  const getdata = useCallback( async ()=> {
    try {
      const res = await axios.get(
        'https://crudcrud.com/api/88462c6811a34df3a90fef599c3dccd2/cart'
      )
      
        let items = [];
        let total = 0;
          for(let i in res.data){
            let item = res.data[i];
            total += item.prise;
            const existingCartItemIndex = items.findIndex(
                (itm) => itm.id === item.id && itm.size === item.size);
            const existingCartItem = items[existingCartItemIndex];
            if(existingCartItem){
                if(item.size === "l" && item.large){
                    items[existingCartItemIndex].quantity += 1;
                    items[existingCartItemIndex].large -= 1;
                    // listItems[existingCartItemIndex1].large -= 1;
                    // setCartItems(cartItems);
                    // setListItems(listItems);
                }
                if(item.size === "m" && item.medium){
                    items[existingCartItemIndex].quantity += 1;
                    items[existingCartItemIndex].large -= 1;
                    // listItems[existingCartItemIndex1].large -= 1;
                    // setCartItems(cartItems);
                    // setListItems(listItems);
                }
                if(item.size === "s" && item.small){
                    items[existingCartItemIndex].quantity += 1;
                    items[existingCartItemIndex].large -= 1;
                    // listItems[existingCartItemIndex1].large -= 1;
                    // setCartItems(cartItems);
                    // setListItems(listItems);
                }
          }else{
            items.push(item);
          }
      
    }
    setTotalAmount(total);
    setCartItems(items) ;
    } catch (error) {
      console.log(error);
    }
  },[]);

  const getlist = async () => {
    try {
      const res = await axios.get(
        'https://crudcrud.com/api/88462c6811a34df3a90fef599c3dccd2/list'
      )
          let items=[];
          for(let i in res.data){
            items.push(res.data[i]);
          }
          setListItems(items);
    } catch (error) {
      console.log(error);
    }
  };
  function updatelist(item) {
    axios({
        method: "PUT",
        url: 'https://crudcrud.com/api/88462c6811a34df3a90fef599c3dccd2/list',
        data: item,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        await getlist(); // Wait for getlist to complete and update listItems
        getdata(); // Call getdata after listItems is updated
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);
  
  

  const addProductToListHandler = (list) => {
    setListItems([...listItems, list]);
    
  };
  
  const addItemToCartHandler = (item) => {
    setTotalAmount(totalAmount + item.prise);
    const existingCartItemIndex1 = listItems.findIndex(
        (itm) => itm.id === item.id );
    const existingCartItemIndex = cartItems.findIndex(
        (itm) => itm.id === item.id && itm.size === item.size);
    const existingCartItem = cartItems[existingCartItemIndex];
    if(existingCartItem){
        if(item.size === "l" && item.large){
            cartItems[existingCartItemIndex].quantity += 1;
            cartItems[existingCartItemIndex].large -= 1;
            listItems[existingCartItemIndex1].large -= 1;
            setCartItems(cartItems);
            setListItems(listItems);
        }
        if(item.size === "m" && item.medium){
            cartItems[existingCartItemIndex].quantity += 1;
            cartItems[existingCartItemIndex].medium -= 1;
            listItems[existingCartItemIndex1].medium -= 1;
            setCartItems(cartItems);
            setListItems(listItems);
        }
        if(item.size === "s" && item.small){
            cartItems[existingCartItemIndex].quantity += 1;
            cartItems[existingCartItemIndex].small -= 1;
            listItems[existingCartItemIndex1].small -= 1;
            setCartItems(cartItems);
            setListItems(listItems);
        }
    }
    else{
        if(item.size === "l"){
            listItems[existingCartItemIndex1].large -= 1;
            item.large -=1;
            setListItems(listItems);
        }
        if(item.size === 'm'){
            listItems[existingCartItemIndex1].medium -= 1;
            item.medium -=1;
            setListItems(listItems);
        }
        if(item.size === 's'){
            listItems[existingCartItemIndex1].small -= 1;
            item.small -= 1;
            setListItems(listItems);
        }
        
        setCartItems([...cartItems,item])
    }
    postCartItem(item);
    updatelist(listItems);
  };
  const removeItemFromCartHandler = (id,size) => {
    const existingCartItemIndex = cartItems.findIndex(
        (itm) => itm.id === id && itm.size === size);
    const existingCartItemIndex1 = listItems.findIndex(
            (itm) => itm.id === id );
    setTotalAmount(totalAmount - cartItems[existingCartItemIndex].prise);
    if(cartItems[existingCartItemIndex].quantity === 1){
        setCartItems(cartItems.filter((item) => item.id !== id || item.size !== size));
        if(size === 'l')
            listItems[existingCartItemIndex1].large += 1;
        else if(size === 'm')
            listItems[existingCartItemIndex1].medium += 1;
        else
            listItems[existingCartItemIndex1].small += 1;
    }
    else{
        cartItems[existingCartItemIndex].quantity -= 1;
        setCartItems(cartItems);
        if(size === 'l')
            listItems[existingCartItemIndex1].large += 1;
        else if(size === 'm')
            listItems[existingCartItemIndex1].medium += 1;
        else
            listItems[existingCartItemIndex1].small += 1
    }
  };

  const cartContext = {
    lists: listItems,
    items: cartItems,
    totalAmount: totalAmount,
    addProduct: addProductToListHandler,
    addItem: addItemToCartHandler,
    addList: postListItem,
    removeItem: removeItemFromCartHandler,
  };

  return(<CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
  );
};

export default CartProvider;
