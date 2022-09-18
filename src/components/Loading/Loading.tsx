import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";


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

    return (
        <div>
            loading...
        </div>
    )
}

export default Loading;