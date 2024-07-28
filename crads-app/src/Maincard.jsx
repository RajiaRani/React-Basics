import React from 'react';
import Card  from "./Card";
import "./Maincard.css";

export default function Maincard () {
   
    return(
        <div className="Maincard">
            <Card title="Deals in PCs" idx={0} shop="shop now"/>
            <Card title = "Refresh your place" idx={1} shop="shop now"/>
            <Card title="Home deco under $50" idx={2} shop="shop now"/>
            <Card title="Gadget Store" idx={3} shop="shop now"/>
            <Card title="Shop deals in Fashion" idx={4} shop="shop now"/>
            <Card title="Beauty steals under $25" idx={5} shop="shop now"/>
            <Card title="Toys under $25" idx={6} shop="shop now"/>
            <Card title="Fashion trends you like" idx={7} shop="shop now"/>
        
        </div>
    );
};