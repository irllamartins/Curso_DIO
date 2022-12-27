import React from "react";
import { CardContainer, Content, HasInfo,ImageBackground, PostInfo, UserInfo, UserPicture } from "./styles";
import {FiThumbsUp} from 'react-icons/fi'

export const Card =({name,image,title,content,like})=>{
    return(
       <CardContainer>
        <ImageBackground src={image}/>
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/39415559?s=400&u=fc2fe5da173a8bb3937a9301e41559f2e6be1201&v=4"/>
                <div>
                    <h4>{name}</h4>
                    <p>Há 1 mim</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>{title}</h4>
                <p>{content} <strong>veja aqui</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS</h4>
                <p>
                    <FiThumbsUp/> {like}
                </p>
            </HasInfo>
        </Content>
       </CardContainer>
    )
}