import {itemsContext} from "../App";
import React, {useContext} from 'react';
import {Link} from "react-router-dom";

export default function Dropdown() {
    const [headSlider1, dropdownInfo] = useContext(itemsContext);
    return (
        <div>
            <div className="row dropt">
                {dropdownInfo.map(item => (
                <div key={item.id} className="col" style={{paddingLeft: "1.5vw", paddingRight: "1.5vw"}}>
                    <section>{item.name}
                        <img src={item.image} alt="" />
                    </section>
                    <hr />
                    <div>
                        <Link to="/">{item.name1}</Link>
                        <Link to="/">{item.name2}</Link>
                        <Link to="/">{item.name3}</Link>
                        <Link to="/">{item.name4}</Link>
                        <Link to="/">{item.name5}</Link>
                        <Link to="/">{item.name6}</Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
