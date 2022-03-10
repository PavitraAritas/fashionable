import React from "react";

import {Background, LoginCard, Input, Button} from './styles/auth'

export default function AuthBody({children, ...restProps}){
    return <Background {...restProps}>{children}</Background>
}

AuthBody.Card = function AuthBodyLogin({children, ...restProps}){
    return <LoginCard {...restProps}>{children}</LoginCard>
}

AuthBody.Input = function AuthBodyInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>
}

AuthBody.Button = function AuthBodyButton({children, ...restProps}){
    return <Button {...restProps}>{children}</Button>
}