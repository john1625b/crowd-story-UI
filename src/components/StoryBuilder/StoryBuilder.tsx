import { Container, InputContainer, LineItem, LineList } from "./StoryBuilder.styles";
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
            Story Builder
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
                <input value={inputText} onChange={e => setInputText(e.target.value)}  onKeyDown={e => onEnter(e)}/>
                <button onClick={onSubmitClick}>submit</button>
            </InputContainer>
        </Container>
    )
}

export default StoryBuilder;