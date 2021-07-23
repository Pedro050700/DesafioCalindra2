import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Icon1, Icon2, Icon3, Title, Contacts } from "./styles";

function Footer() {
  return (
    <>
      <footer className="sticky-footer">
        <div className="container">
          <Title>
            <h2>Follow Us</h2>
            <div className="Icone" style={{ display: "flex", justifyContent:"center", marginRight: "10px"}}>
              <Icon1>
                <YouTubeIcon className="svgIcon" />
              </Icon1>
              <Icon2>
                <FacebookIcon className="svgIcon" />
              </Icon2>
              <Icon3>
                <TwitterIcon className="svgIcon" />
              </Icon3>
            </div>
          </Title>
          <Contacts>
            <h2>Contacts</h2>
            <texto>
              2490 Leisure Lane
              <br />
              San Luis Obispo <br />
              California
            </texto>
          </Contacts>
        </div>
      </footer>
    </>
  );
}

export default Footer;
