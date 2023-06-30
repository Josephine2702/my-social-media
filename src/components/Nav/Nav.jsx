import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import c from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className={c.nav}>
      <div className={c.link}>
        <NavLink to='/profile'>Profile</NavLink>
      </div>
      <div className={c.link}>
        <NavLink to='/dialogs'>Messages</NavLink>
      </div>
      <div className={c.link}>
        <NavLink to='1#'>News</NavLink>
      </div>
      <div className={c.link}>
        <NavLink to='1#'>Music</NavLink>
      </div>
      <div className={c.link}>
        <NavLink to='1#'>Settings</NavLink>
      </div>

      <Friends friends={props.stateF.dialogs} />
    </nav>
    )
}

export default Nav;