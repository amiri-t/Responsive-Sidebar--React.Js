import React from "react";
import "./sidebar.css";
import { MdDashboard } from "react-icons/md";
import { BiBarChartSquare, BiStoreAlt } from "react-icons/bi";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { FiSettings, FiTruck, FiLogOut } from "react-icons/fi";
import { BsCreditCard } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <span>LogoExample</span>
        </div>
        <div className="res-logo">
          <span>LX</span>
        </div>
        <div className="searchBar">
          <FaSearch className="searchIcon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="center">
        <div className="list-item">
          <MdDashboard className="icon" />
          <span>Dashboard</span>
        </div>
        <div className="list-item">
          <FaRegUser className="icon" />
          <span>Users</span>
        </div>
        <div className="list-item">
          <BiStoreAlt className="icon" />
          <span>Products</span>
        </div>
        <div className="list-item">
          <BsCreditCard className="icon" />
          <span>Orders</span>
        </div>
        <div className="list-item">
          <FiTruck className="icon" />
          <span>Delivery</span>
        </div>
        <div className="list-item">
          <BiBarChartSquare className="icon" />
          <span>Stats</span>
        </div>
        <div className="list-item">
          <FiSettings className="icon" />
          <span>Settings</span>
        </div>
      </div>
      <div className="bottom">
        <div className="ad">
          <p>Amazing features are waiting for you</p>
          <button>Discover Pro</button>
        </div>
        <div className="list-item">
          <FiLogOut className="icon" />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
