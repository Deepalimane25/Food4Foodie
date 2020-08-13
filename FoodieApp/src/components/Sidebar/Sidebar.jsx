import "./Sidebar.scss";
import React from "react";

const Sidebar = ({ width, height, children }) => {
  // const [xPosition, setX] = React.useState(-width);

  // const toggleMenu = () => {
  //   if (xPosition < 0) {
  //     setX(0);
  //   } else {
  //     setX(-width);
  //   }
  // };

  // React.useEffect(() => {
  //   setX(-width);
  // }, []);
  return (
    <React.Fragment>
      <div className="side-bar"
        // style={{
        //   transform: `translatex(${xPosition}px)`,
        //   width: width,
        //   minHeight: height
        // }}
        id="mySidepanel"
      >
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
        <div className="content">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;