import {Container, InputContainer, Input, SubmitButtonStyles, Header, SubmitButton} from "./StoryBuilder.styles";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faCircleUser} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import LineItem from "./LineItem/LineItem";
import {AvatarStyles} from "./LineItem/LineItem.style";


const userNameMock: string = 'John';

interface Line {
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
        console.log([...lineList, newLine])
        setLineList([...lineList, newLine]);
        setInputText("")
    }

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSubmitClick();
        }
    }

    useEffect(() => {
        axios.get('/api/users?page=2')
            .then((response) => {
                console.log('response', JSON.stringify(response.data.data, null, 2))
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    return (
        <Container>
            <Header>Crowd Story</Header>
            <div>
                {
                    lineList.map(({text, user}, index) => (
                        <LineItem number={index} text={text} user={user}/>
                    ))
                }
            </div>
            <InputContainer>
                <FontAwesomeIcon icon={faCircleUser} style={AvatarStyles}/>
                <Input value={inputText} onChange={e => setInputText(e.target.value)} onKeyDown={e => onEnter(e)}
                       placeholder={'Enter your text for the next line in the story'}
                />
                <SubmitButton onClick={onSubmitClick}>
                    Post
                    <FontAwesomeIcon icon={faAngleRight} fontVariant={'light'} style={SubmitButtonStyles}/>
                </SubmitButton>
            </InputContainer>
        </Container>
    )
}

export default StoryBuilder;