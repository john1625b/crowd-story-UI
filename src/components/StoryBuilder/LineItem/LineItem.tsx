import {AvatarStyles, TextContainer, LineItemContainer, LineItemNumber, UserNameContainer} from "./LineItem.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface ILineItemProps {
    number: number;
    content: string;
    userName: string;
}

const LineItem = ({number, content, userName}: ILineItemProps) => {
    return (
        <LineItemContainer>
            <LineItemNumber>
                {number + 1}
            </LineItemNumber>
            <FontAwesomeIcon icon={faCircleUser} style={AvatarStyles(userName)}/>
            <UserNameContainer>{userName}: </UserNameContainer>
            <TextContainer>
                {content}
            </TextContainer>
        </LineItemContainer>
    )
}

export default LineItem;