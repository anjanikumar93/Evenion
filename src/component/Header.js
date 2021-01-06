import React from "react";
import "../style/Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="myHeader">
        <div className="myList">
          <li id="myNotes">
            <p>Simple Notes Application</p>
          </li>
        </div>
      </div>
    );
  }
}

export default Header;
