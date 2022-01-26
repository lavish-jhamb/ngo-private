import React from "react";
import Style from "./Index.module.css";
import Card from "../../../../Components/Card/Index";
import MenubarLayout from "../../../Layout/Menubar/Main";
import {Link} from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";

function Donars() {
    const donarsList = [
        {
            id: 1,
            name: "Josephine Sans Auston",
            phone: "+91 7988065836",
            donation: "75000",
            date: "jan,11,2022",
        },
        {
            id: 2,
            name: "Josephine Sans Auston",
            phone: "+91 7988065836",
            donation: "75000",
            date: "jan,11,2022",
        },
        {
            id: 3,
            name: "Josephine Sans Auston",
            phone: "+91 7988065836",
            donation: "75000",
            date: "jan,11,2022",
        },
        {
            id: 4,
            name: "Josephine Sans Auston",
            phone: "+91 7988065836",
            donation: "75000",
            date: "jan,11,2022",
        },
        {
            id: 5,
            name: "Josephine Sans Auston",
            phone: "+91 7988065836",
            donation: "75000",
            date: "jan,11,2022",
        },
        {
            id: 6,
            name: "Josephine Sans Auston",
            phone: "+91 7988065836",
            donation: "75000",
            date: "jan,11,2022",
        },
        {
            id: 7,
            name: "Josephine Sans Auston",
            phone: "+91 7988065836",
            donation: "75000",
            date: "jan,11,2022",
        },
    ];

    return (
        <>
            <MenubarLayout>
                <div className={Style.donors}>
                    <h4>Manage Donors</h4>
                    <div className={Style.searchBar}>
                        <div className={Style.search}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search by name, phone"/>
                        </div>
                        <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    {donarsList.map((donor) => (
                        <Card key={donor.id} donor={donor}/>
                    ))}
                    <Link to={uris.createDonors}>
                        <button className="addBtn">
                            <i className="bx bx-plus bx-lg"></i>
                        </button>
                    </Link>
                </div>
            </MenubarLayout>
        </>
    );
}

export default Donars;
