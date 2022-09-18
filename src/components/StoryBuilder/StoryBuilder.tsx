import {
    Container,
    InputContainer,
    Input,
    SubmitButtonStyles,
    SubmitButton,
    LineListContainer
} from "./StoryBuilder.styles";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight, faCircleUser} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import LineItem from "./LineItem/LineItem";
import {AvatarStyles} from "./LineItem/LineItem.style";
import {useNavigate, useParams} from "react-router-dom";

const placeHolderTextInitial = 'Enter your first line to begin your new story!'
const placeHolderTextNonInitial = 'Enter your text for the next line in the story!'

const userNameMock: string = 'user1';

interface Line {
    user: string,
    content: string
}

const StoryBuilder = () => {
    const [lineList, setLineList] = useState<Line[]>([]);
    const [inputText, setInputText] = useState<string>('');
    const [firstLine, setFirstLine] = useState<boolean>(true);
    const {storyId} = useParams<{ storyId?: string }>();

    const navigate = useNavigate();
    const onSubmitClick = () => {
        if (inputText === '') return;

        if (firstLine) {
            axios.post('/story/create', {
                userName: userNameMock,
                lineContent: inputText
            }).then(res => {
                navigate(`/story/${res.data.payload._id}`);
                setLineList(res.data.payload.lines);
            })
            setFirstLine(false)
        } else {
            axios.post('/story/add-line', {
                userName: userNameMock,
                storyId: storyId,
                lineContent: inputText,
            }).then(res => {
                setLineList(res.data.payload.lines);
            })
        }

        setInputText("")
    }

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSubmitClick();
        }
    }

    useEffect(() => {
        axios.get
    }, [])

    return (
        <Container>
            <LineListContainer>
                {
                    lineList.map(({content, user}, index) => (
                        <LineItem key={index} number={index} content={content} user={user}/>
                    ))
                }
            </LineListContainer>
            <InputContainer>
                <FontAwesomeIcon icon={faCircleUser} style={AvatarStyles}/>
                <Input value={inputText} onChange={e => setInputText(e.target.value)} onKeyDown={e => onEnter(e)}
                       placeholder={lineList.length === 0 ? placeHolderTextInitial : placeHolderTextNonInitial}
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