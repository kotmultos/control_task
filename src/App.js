
import {Route, Routes} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from "./routes/main_page/MainPage";
import NotFound from "./routes/not_found_page/NotFound";
import Admin from "./routes/admin/Admin";

function App() {
  return (
    <div>
      <Routes>
          <Route path={'/'} exact element={<MainPage/>}/>
          <Route path={'/admin'} element={<Admin/>}/>
          <Route path={'*'} element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
