import { Container, InputContainer, LineItem, LineList, Input } from "./StoryBuilder.styles";
import React, { useState } from "react";

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
            <h3>Crowd Story</h3>
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
                <button onClick={onSubmitClick}>submit</button>
            </InputContainer>
        </Container>
    )
}

export default StoryBuilder;