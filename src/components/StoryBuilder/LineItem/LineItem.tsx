import {AvatarStyles, TextContainer, LineItemContainer, LineItemNumber} from "./LineItem.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface ILineItemProps {
    number: number;
    text: string;
    user: string;
}

const LineItem = ({number, text, user}: ILineItemProps) => {
    return (
        <LineItemContainer>
            <LineItemNumber>
                {number + 1}
            </LineItemNumber>
            <FontAwesomeIcon icon={faCircleUser} style={AvatarStyles}/>
            <TextContainer>
                {text}
            </TextContainer>
        </LineItemContainer>
    )
}

export default LineItem;