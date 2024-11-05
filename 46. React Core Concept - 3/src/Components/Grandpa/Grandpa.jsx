import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

export const AssetContext = createContext()
export const MoneyContext = createContext()

const Grandpa = () => {
    const [money, setMoney]= useState(1000)
    const asset = 'diamond'


    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <h3>Net Money : {money}</h3>
            <MoneyContext.Provider value={[money, setMoney]}>
            <AssetContext.Provider value="gold">
                <section className="flex">
                    <Dad asset={asset}></Dad>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </AssetContext.Provider>
            </MoneyContext.Provider>
            
        </div>
    );
};

export default Grandpa;