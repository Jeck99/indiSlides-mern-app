import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyles";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <div className="footer">
      <Box>
        <Heading><FacebookIcon/></Heading>
        <Heading><InstagramIcon/></Heading>
        <Heading><TwitterIcon/></Heading>
        <Heading><GitHubIcon/></Heading>
        <Heading><LinkedInIcon/></Heading>
      </Box>
    </div>
  );
}
