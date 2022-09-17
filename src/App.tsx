import React, {FC} from "react";

import {MasterContainer, Header, AppTitle} from "./App.styles";
import Router from "./components/Routing/Router";


import StoryBuilder from "./components/StoryBuilder/StoryBuilder";
import axios from "axios";

axios.defaults.baseURL = 'https://reqres.in'
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';


const App: FC = () => {
    return (
        <div>
            <Header>
                <AppTitle>Crowd Story</AppTitle>
            </Header>
            <MasterContainer>
                <Router/>
            </MasterContainer>
        </div>
    )
}

export default App;
