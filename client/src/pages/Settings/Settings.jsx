import React from "react";
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
