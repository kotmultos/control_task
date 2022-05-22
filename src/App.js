
import {Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./routes/main_page/MainPage";
import NotFound from "./routes/not_found_page/NotFound";
import Admin from "./routes/admin/Admin";
import ContextData from "./context/data/ContextData";
import {useReducer} from "react";
import ReducerData from "./context/data/ReducerData";
import StateData from "./context/data/StateData";

function App() {
    const [stateData, dispatchData] = useReducer(ReducerData, StateData);
    return (
        <div>
            <ContextData.Provider value={{stateData, dispatchData}}>
                <Routes>
                    <Route path={'/'} exact element={<MainPage/>}/>
                    <Route path={'/admin'} element={<Admin/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </ContextData.Provider>
        </div>
    );
}

export default App;
