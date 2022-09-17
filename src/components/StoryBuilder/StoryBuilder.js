import {Container, InputContainer, LineItem, LineList} from "./StoryBuilder.styles";
import {useState} from "react";

const StoryBuilder = () => {
    const [lineList, setLineList] = useState([]);
    const [inputText, setInputText] = useState('');

    const onSubmitClick = () => {
        console.log('submit');
        setLineList([...lineList, inputText]);
    }

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            setLineList([...lineList, inputText]);
        }
    }
    console.log(lineList)
    return (
        <Container>
            Story Builder
            <LineList>
                {
                    lineList.map(line => (
                        <LineItem>{line}</LineItem>
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