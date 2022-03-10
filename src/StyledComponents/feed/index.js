import React from "react";

import {Body, Stories, Story, PostBar, Post, Head, User, Photo, ActionButtons} from './styles/feed'

export default function Middle({children, ...restProps}){
    return <Body {...restProps}>{children}</Body>
}

Middle.Stories = function FeedStories({children, ...restProps}){
    return <Stories {...restProps}>{children}</Stories>
}

Middle.Story = function FeedStory({children, ...restProps}){
    return <Story {...restProps}>{children}</Story>
}

Middle.PostBar = function FeedPostBar({children, ...restProps}){
    return <PostBar {...restProps}>{children}</PostBar>
}

Middle.Post = function FeedPost({children, ...restProps}){
    return <Post {...restProps}>{children}</Post>
}

Middle.Head = function FeedHead({children, ...restProps}){
    return <Head {...restProps}>{children}</Head>
}

Middle.User = function FeedUser({children, ...restProps}){
    return <User {...restProps}>{children}</User>
}

Middle.Photo = function FeedPhoto({children, ...restProps}){
    return <Photo {...restProps}>{children}</Photo>
}

Middle.ActionButtons = function FeedActionButtons({children, ...restProps}){
    return <ActionButtons {...restProps}>{children}</ActionButtons>
}