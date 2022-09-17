import {Container, InputContainer, LineItem, LineList, Input, SubmitButtonStyles, Header} from "./StoryBuilder.styles";
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";


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

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then( (response) => {
                console.log('response', JSON.stringify( response.data.data, null, 2))
            })
            .catch( (error) => {
                console.error(error);
            })
    },[])

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