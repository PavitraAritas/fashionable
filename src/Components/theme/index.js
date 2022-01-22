import React from "react";
import {
  CustomizeTheme,
  Card,
  ChooseSize,
  FontSize,
  Color,
  ChooseColor,
  Background,
  ChooseBg,
  Bg1,
  Bg2,
  Bg3,
} from "./styles/theme";

export default function ThemeBox({ children, ...restProps }) {
  return <CustomizeTheme {...restProps}>{children}</CustomizeTheme>;
}

ThemeBox.Card = function ThemeCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

ThemeBox.FontSize = function ThemeFontSize({ children, ...restProps }) {
  return <FontSize {...restProps}>{children}</FontSize>;
};

ThemeBox.Size = function ThemeSize({ children, ...restProps }) {
  return <ChooseSize {...restProps}>{children}</ChooseSize>;
};

ThemeBox.Color = function ThemeColor({ children, ...restProps }) {
  return <Color {...restProps}>{children}</Color>;
};

ThemeBox.ChooseColor = function ThemeChooseColor({ children, ...restProps }) {
  return <ChooseColor {...restProps}>{children}</ChooseColor>;
};

ThemeBox.Background = function ThemeBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
};

ThemeBox.ChooseBg = function ThemeChooseBg({children, ...restProps}){
    return <ChooseBg {...restProps}>{children}</ChooseBg>
 }

 ThemeBox.Bg1 = function ThemeBg1({children, ...restProps}){
    return <Bg1 {...restProps}>{children}</Bg1>
 }

 ThemeBox.Bg2 = function ThemeBg2({children, ...restProps}){
    return <Bg2 {...restProps}>{children}</Bg2>
 }

 ThemeBox.Bg3 = function ThemeBg3({children, ...restProps}){
    return <Bg3 {...restProps}>{children}</Bg3>
 }