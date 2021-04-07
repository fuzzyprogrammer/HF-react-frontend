import React from "react";
import useSettings from 'app/hooks/useSettings';
import logo from "./Hidayah-logo-web-Text.png";

const MatxLogo = ({className}) => {
  const { settings } = useSettings();  
  const theme = settings.themes[settings.activeTheme];
  
  return <img src={logo} alt="Hidayah Foundation Logo" style={{
    textAlign: "center",
    width: "100%",
  }}/>;
};

export default MatxLogo;
