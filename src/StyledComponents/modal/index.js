import React from "react";

import {Background, Wrapper, Photo, Content, CloseModalButton} from "./styles/modal";

export default function ModalPage({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

ModalPage.Wrapper = function ModalWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

ModalPage.Photo = function ModalPhoto({ children, ...restProps }) {
    return <Photo {...restProps}>{children}</Photo>;
  };

  ModalPage.Content = function ModalContent({ children, ...restProps }) {
    return <Content {...restProps}>{children}</Content>;
  };

  ModalPage.Button = function ModalContent({ children, ...restProps }) {
    return <CloseModalButton {...restProps}>{children}</CloseModalButton>;
  };


