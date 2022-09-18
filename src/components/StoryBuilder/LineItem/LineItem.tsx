import {AvatarStyles, TextContainer, LineItemContainer, LineItemNumber} from "./LineItem.style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface ILineItemProps {
    number: number;
    content: string;
    user: string;
}

const LineItem = ({number, content, user}: ILineItemProps) => {
    return (
        <LineItemContainer>
            <LineItemNumber>
                {number + 1}
            </LineItemNumber>
            <FontAwesomeIcon icon={faCircleUser} style={AvatarStyles}/>
            <TextContainer>
                {content}
            </TextContainer>
        </LineItemContainer>
    )
}

export default LineItem;