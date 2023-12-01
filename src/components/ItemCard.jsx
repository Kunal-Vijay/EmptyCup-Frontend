import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { BiHide } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsBookmarkHeartFill } from "react-icons/bs";
import Rating from "@mui/material/Rating";

export default function ItemCard({ designer,setDesigners }) {
  const host = process.env.REACT_APP_BASE_URL;
  const handleToggle = async (id,shortlisted) => {
    try {
      const response = await fetch(`${host}/designers/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          shortlisted: !shortlisted,
        }),
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }
      const updatedDesigner = await response.json();

      setDesigners((prevDesigners) =>
        prevDesigners.map((designer) =>
          designer._id === updatedDesigner._id ? { ...designer, shortlisted: updatedDesigner.shortlisted } : designer
        )
      );
      console.log("updated");

    } catch (error) {
      console.error("Error updating shortlisted status:", error);
    }
  };
  return (
    <div className="item-card">
      <div className="item-card-details">
        <h1>{designer.name}</h1>
        <Rating
          name="half-rating-read"
          precision={0.1}
          style={{ color: "black" }}
          value={designer.rating}
          readOnly
        />
        <p>{designer.desc}</p>
        <div className="item-stats">
          <div>
            <span>{designer.projects}</span>
            <span>Projects</span>
          </div>
          <div>
            <span>{designer.Years}</span>
            <span>Years</span>
          </div>
          <div>
            <span>{designer.Price}</span>
            <span>Price</span>
          </div>
        </div>
        <div className="item-contact">
          <span>{designer.Phone1}</span>
          <span>{designer.Phone2}</span>
        </div>
      </div>
      <div className="item-card-menu">
        <div className="icon-container">
          <FaArrowRight className="icon icon-colored" />
          <span>Details</span>
        </div>
        <div className="icon-container">
          <BiHide className="icon icon-colored" />
          <span>Hide</span>
        </div>
        <div className="icon-container">
          {designer.shortlisted ? (
            <BsBookmarkHeartFill
              className="icon icon-colored"
              onClick={()=>handleToggle(designer._id,designer.shortlisted)}
            />
          ) : (
            <BsBookmarkHeart
              className="icon icon-colored"
              onClick={()=>handleToggle(designer._id,designer.shortlisted)}
            />
          )}
          <span>Shortlist</span>
        </div>
        <div className="icon-container">
          <MdErrorOutline className="icon icon-colored" />
          <span>Report</span>
        </div>
      </div>
    </div>
  );
}
