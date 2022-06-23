import React, {FC} from "react";
import NavBar from "../components/NavBar";

interface ChildrenPropType {
    children: React.HTMLAttributes<HTMLAreaElement>
};

const RootPage : FC<ChildrenPropType> = (props) =>{

    return <> 
    <NavBar/>
    {props.children} 
    </>;
}

export default RootPage;