import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";


const Loading = () => {

    // this will be api call
    const getStoryId = (): string => {
        return "urmom"
    }

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(`story/${getStoryId()}`);
        }, 3000)
    }, [])

    useEffect(() => {
        axios.post('/story/create', {
            userName: 'user1',
            lineContent: ''
        })
    }, [])

    return (
        <div>
            loading...
        </div>
    )
}

export default Loading;