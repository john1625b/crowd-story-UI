import {Container, InputContainer, LineItem, LineList, Input, SubmitButtonStyles, Header} from "./StoryBuilder.styles";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'


const userNameMock : string = 'John';

interface Line{
    user: string,
    text: string
}

const StoryBuilder = () => {
    const [lineList, setLineList] = useState<Line[]>([]);
    const [inputText, setInputText] = useState<string>('');

    const onSubmitClick = () => {
        const newLine = {
            user: userNameMock,
            text: inputText
        }
        setLineList([...lineList, newLine]);
        setInputText("")
    }

    const onEnter = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSubmitClick();
        }
    }
    console.log('line list', lineList)

    return (
        <Container>
            <Header>Crowd Story</Header>
            <LineList>
                {
                    lineList.map(line => (
                        <LineItem>
                           <strong>User: {line.user} </strong>
                            {line.text}</LineItem>
                    ))
                }
            </LineList>
            <InputContainer>
                <Input value={inputText} onChange={e => setInputText(e.target.value)}  onKeyDown={e => onEnter(e)}/>
                <FontAwesomeIcon icon={faCircleArrowRight} style={SubmitButtonStyles} onClick={onSubmitClick}/>
            </InputContainer>
        </Container>
    )
}

export default StoryBuilder;