import React from "react";
import { Redirect } from "react-router-dom";
import {
  SettingsContainer,
  HeaderContainer,
  Brand,
  BannerContainer,
  Banner,
} from "./Settings.styles";
import SettingsForm from "../../components/SettingsForm/SettingsForm";
import Menu from "../../components/Menu/Menu";

const Settings = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <SettingsContainer>
      <HeaderContainer>
        <Brand to="/settings">
          <span>My</span>Route
        </Brand>
        <Menu settings={1} />
      </HeaderContainer>
      <BannerContainer>
        <Banner src={require("../../assets/images/settings.png")} />
      </BannerContainer>
      <SettingsForm />
    </SettingsContainer>
  );
};

export default Settings;
