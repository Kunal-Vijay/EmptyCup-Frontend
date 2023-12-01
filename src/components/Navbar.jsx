import React, { useState } from "react";
import logo from "../assets/logo.png";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { RiContactsBookLine } from "react-icons/ri";
import { HiMiniPhoto } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { BsClipboard2Heart } from "react-icons/bs";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { BsClipboard2HeartFill } from "react-icons/bs";

export default function Navbar({showShortlisted, setShowShortlisted}) {
  
  const handleToggle = () => {
    setShowShortlisted((showShortlisted) => !showShortlisted);
  };
  return (
    <>
      <div className="navbar">
        <div>
          <img src={logo} alt="" />
        </div>
        <span>EmptyCup</span>
        <PiDotsThreeOutlineVerticalFill className="icon" />
      </div>
      <div className="menu">
        <div className="icon-container">
          <RiContactsBookLine className="icon icon-colored " />
          <span>Contacts</span>
        </div>{" "}
        <div className="icon-container">
          <HiMiniPhoto className="icon " />
          <span>Gallery</span>
        </div>{" "}
        <div className="icon-container">
          <IoLocationSharp className="icon " />
          <span>Map</span>
        </div>{" "}
        <div className="icon-container">
          {showShortlisted ? (
            <BsClipboard2HeartFill
              className="icon icon-colored"
              onClick={handleToggle}
            />
          ) : (
            <BsClipboard2Heart className="icon  " onClick={handleToggle} />
          )}
          <span>Shortlisted</span>
        </div>
        <div className="icon-container">
          <FaSortAmountDownAlt className="icon " />
          <span>Sort</span>
        </div>
      </div>
    </>
  );
}
