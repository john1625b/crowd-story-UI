import {Container, InputContainer, LineItem, LineList} from "./StoryBuilder.styles";
import {useState} from "react";

const userNameMock = 'John';

const StoryBuilder = () => {
    const [lineList, setLineList] = useState([]);
    const [inputText, setInputText] = useState('');

    const onSubmitClick = () => {
        const newLine = {
            user: userNameMock,
            text: inputText
        }
        setLineList([...lineList, newLine]);
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            const newLine = {
                user: userNameMock,
                text: inputText
            }
            setLineList([...lineList, newLine]);
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
                           <bold>User: {line.user} </bold>
                            {line.text}</LineItem>
                    ))
                }
            </LineList>
            <InputContainer>
                <input onChange={e => setInputText(e.target.value)}  onKeyDown={onEnter}/>
                <button onClick={onSubmitClick}>submit</button>
            </InputContainer>
        </Container>
    )
}

export default StoryBuilder;