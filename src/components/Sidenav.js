import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function Sidenav() {
    return(
        <div className="sidenav">
            <ul>
                <DropListLink title="My Utilities" iconLeft={<FaIcons.FaToolbox className="nav-icon" />} text="My Utilities">
                    <ul className="sub-menu">
                        <NavItem title="Home" to="/" icon={<FaIcons.FaHome className="nav-icon" />} text="Home" />
                        <NavItem title="Dashboard" to="/dashboard" icon={<FaIcons.FaTachometerAlt className="nav-icon" />} text="Dashboard" />
                        <NavItem title="Tickets" to="/tickets" icon={<FaIcons.FaClipboardList className="nav-icon" />} text="Tickets" counter="99" />
                        <NavItem title="Inventory Management" to="/inventory-management" icon={<FaIcons.FaLaptop className="nav-icon" />} text="Inventory Management" />
                        <NavItem title="Notifications" to="/notifications" icon={<FaIcons.FaInbox className="nav-icon" />} text="Notifications" counter="5" />
                        <NavItem title="Knowledge Base Articles" to="/knowledge-base-articles" icon={<FaIcons.FaBook className="nav-icon" />} text="Knowledge Base Articles" />
                        <NavItem title="Upload a File" to="/upload-a-file" icon={<FaIcons.FaUpload className="nav-icon" />} text="Upload a File" />
                    </ul>
                </DropListLink>

                <DropListLink title="Stock Market" iconLeft={<FaIcons.FaDollarSign className="nav-icon" />} text="Stock Market">
                    <NavItem title="Live View" to="/live-view" icon={<FaIcons.FaChartLine className="nav-icon" />} text="Live View" />
                </DropListLink>

                <DropListLink title="God Powers" iconLeft={<FaIcons.FaLock className="nav-icon" />} text="God Powers">
                    <NavItem title="User Management" to="/user-management" icon={<FaIcons.FaUsers className="nav-icon" />} text="User Management" />
                    <NavItem title="Role Management" to="/role-management" icon={<FaIcons.FaKey className="nav-icon" />} text="Role Management" />
                    <NavItem title="Access Controls" to="/access-controls" icon={<FaIcons.FaTasks className="nav-icon" />} text="Access Controls" />
                    <NavItem title="Storage Management" to="/storage-management" icon={<FaIcons.FaHdd className="nav-icon" />} text="Storage Management" />
                    <NavItem title="Domain Computers" to="/domain-computers" icon={<FaIcons.FaTerminal className="nav-icon" />} text="Domain Computers" />
                    <NavItem title="Software Transfer" to="/software-transfer" icon={<FaIcons.FaShareSquare className="nav-icon" />} text="Software Transfer" />
                    <NavItem title="Patch Management" to="/patch-management" icon={<FaIcons.FaCheckDouble className="nav-icon" />} text="Patch Management" />
                </DropListLink>
            </ul>
        </div>
    );
}

function DropListLink(props) {
    const [open, setOpen] = useState(false);

    return(
        <li className="nav-link nav-title" title={props.title}>
            <div className="sub-menu-header" onClick={() => setOpen(!open)}>
                {props.iconLeft}
                <p className="nav-text">{props.text}</p>
                <FaIcons.FaCaretDown className="nav-icon icon-right" />
            </div>
            <div className="sub-menu-container">
                <div className="sub-menu-content">
                    {open && props.children}
                </div>
            </div>
        </li>
    );
}

function NavItem(props) {
    return(
        <li className="nav-link" title={props.title}>
            <NavLink exact to={props.to} className="nav-item">
                {props.icon}
                <p className="nav-text">{props.text}</p>
                {props.counter ? <span className="nav-icon-counter">+{props.counter}</span> : ""}
            </NavLink>
        </li>
    );
}