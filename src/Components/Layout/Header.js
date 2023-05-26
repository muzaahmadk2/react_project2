import { Fragment } from "react";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Show Commerce</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div>
       <h1>aaaaaaa
       </h1>
      </div>
    </Fragment>
  );
};

export default Header;
