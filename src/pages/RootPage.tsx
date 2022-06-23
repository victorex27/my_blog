import React, {FC} from "react";

interface ChildrenPropType {
    children: React.HTMLAttributes<HTMLAreaElement>
};

const RootPage : FC<ChildrenPropType> = (props) =>{

    return <> {props.children} </>;
}

export default RootPage;