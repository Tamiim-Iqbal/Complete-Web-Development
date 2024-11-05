import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({asset}) => {

    const gift = useContext(AssetContext)
    return (
        <div>
            <h2>Special</h2>
            <p>{asset}</p>
            <p>{gift}</p>
        </div>
    );
};

export default Special;