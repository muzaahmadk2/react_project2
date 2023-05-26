import { Fragment } from "react";
import ShowList from "./showList";
import ShowsDescr from "./ShowsDescr";


const Shows = props => {
    return <Fragment>
       <ShowsDescr />
        <ShowList />
    </Fragment>
};
export default Shows;