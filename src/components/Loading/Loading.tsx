import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Loading = () => {

  // this will be api call
  const getStory = () : string => {
    return "urmom"
  }

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(`/${getStory()}`);
    }, 3000)
  }, [])

  
  return (
    <div>
      loading...
    </div>
  )
}

export default Loading;