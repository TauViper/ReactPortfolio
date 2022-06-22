import React from "react";
import { FooterBottom } from "./FooterBottom";
import { FooterCenter } from "./FooterCenter";
import { FooterHead } from "./FooterHead";

export const Footer = () => {
  return (
    <footer>
      <FooterHead />
      <FooterCenter />
      <FooterBottom />
    </footer>
  );
};
