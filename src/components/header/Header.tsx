import React from "react";
import "./headerStyle.css";
import { Button } from "@mui/material";

const Header = () => {
  const LogoSrc = require("../../assets/Screenshot 2022-12-05 at 10.42.43.png");
  return (
    <div className={"container"}>
      <img className={"logo"} src={LogoSrc} />
      <Button className={"header-btn"} color={"primary"} variant={"contained"}>
        login
      </Button>
      <Button
        className={"header-btn"}
        color={"secondary"}
        variant={"contained"}
      >
        reg
      </Button>
    </div>
  );
};

export default Header;
