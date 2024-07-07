import React from "react";
import { NavLink } from "react-router-dom";
import css from './Header.module.css';

export const Header = () => {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <Navlink
                    to="/"
                    className={({ isActive }) => (isActive ? css.linkActive : css.link)}
                    end>
                    Home
                </Navlink>
                <Navlink
                    to="/movies"
                    className={({ isActive }) => (isActive ? css.linkActive : cs.link)}
                >
                    Movies
                </Navlink>
            </nav>
        </header>
    );
};
