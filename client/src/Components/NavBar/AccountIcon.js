import React, { useState } from "react";
import kittyImage from "../../kitty.jpeg";
import { GoogleData } from "../Login/LoginAPI";
import LogoutButton from "../Login/LogoutAPI";
import DropdownMenu from "../DropDownMenu/DDMenu";

import { CircleButtonWrapper } from "./NavbarElements";

const AccountIcon = () => {
  var loginImage = kittyImage;

  const handleButtonClick = () => {
    // Add your button click logic here
    console.log("Button clicked!");
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const dropdownItems = [<LogoutButton />];

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsDropdownOpen(false);
  };

  if (GoogleData !== undefined) {
    loginImage = GoogleData.profileObj.imageUrl;
    console.log(GoogleData);
  }

  return (
    <CircleButtonWrapper>
      <div style={circleStyle} onClick={handleButtonClick}>
        <img src={loginImage} alt="" style={imageStyle} />
        <div>
          {isDropdownOpen && (
            <DropdownMenu items={dropdownItems} onItemClick={handleItemClick} />
          )}
          {selectedItem && <p>You selected: {selectedItem}</p>}
        </div>
      </div>
    </CircleButtonWrapper>
  );
};

const circleStyle = {
  width: "90px",
  height: "90px",
  borderRadius: "50%",
  overflow: "hidden",
  cursor: "pointer",
  backgroundColor: "red", // Add a background color for testing
};
const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export default AccountIcon;