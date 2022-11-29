import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className="Layout">
            <NavLink to={'/'} style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}>
                Home
            </NavLink>
            <NavLink to={'/about'} style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}>
                About
            </NavLink>
            <NavLink to={'/cars'} style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}>
                Cars
            </NavLink>
            <Outlet />
        </div>
    );
}

export default Layout;