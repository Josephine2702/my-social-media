import React from "react";
import c from "./Header.module.css";

const Header = () => {
    return (
        <header className={c.header}>
            <img className={c.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Thunderbird_Logo%2C_2018.svg/800px-Thunderbird_Logo%2C_2018.svg.png" alt="logo" />
        </header>
    )
}

export default Header;