import React, { useState, useEffect } from "react";
import "./foodCard.scss";

// import Button from '@material-ui/core/Button';
const FoodCard = ({ recipe }) => {
  const [textShow, setTextShow] = useState(false);
  const [divshow, setdivshow] = useState("nodivshow");
  const {
    name,
    featured_image,
    timings,
    location,
    user_rating,
    average_cost_for_two,
  } = recipe.restaurant;

  useEffect(() => {
    if (textShow) {
      setdivshow("divshow");
    } else {
      setdivshow("nodivshow");
    }
  });

  return (
    <div
      className="foodcard"
      id={recipe.key}
      onMouseEnter={() => setTextShow(true)}
      onMouseLeave={() => setTextShow(false)}
    >
      <a href="/">
        <img src={featured_image} alt={name} />
        <div className="container1">
          <h3 style={{ fontWeight: "bold", paddingTop:"5px" }}>
            {name}
          </h3>
          <h4 style={{ fontSize: ".8rem", paddingTop: "10px", color: "#686b78", paddingBottom: "10px" }}>{location.city}</h4>
          {/* <div>
            <span><i className="fa fa-star" aria-hidden="true"></i> <b>{user_rating.aggregate_rating}</b></span>.
            <span><b>{timings}</b></span>.
            <span><b><i class="fa fa-rupee"></i> {average_cost_for_two} For Two</b></span>
            </div> */}
          <div className="data">
            <div className="rating"
            >
              <i className="fa fa-star">{" " + user_rating.aggregate_rating}</i>
            </div>

            <div> &bull;
             </div>
            <div className="timing">
              <i> {timings} </i>
            </div>
            <div>&bull;</div>
            <div>
              <i className="fa fa-rupee">
                {" " + average_cost_for_two + " for two"}
              </i>{" "}
            </div>
          </div>
          <div className={divshow}>
            <hr />
            {/* <Button
              disableRipple
              size="small"
            > */}
            <a href="#" className="btn" style={{
                backgroundColor: "rgb(72, 196, 121)",
                color: "white",
                padding: "10px 4px 10px 10px",
                textAlign: "center",
              }}>Quick View</a>
            {/* </Button> */}
          </div>
        </div>
      </a>
    </div>
    
  );
};

export default FoodCard;
