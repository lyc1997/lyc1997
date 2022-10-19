import Header from './common/header'
import store from './store'
import { BrowserRouter, Route, Routes } from'react-router-dom'
import {Provider} from 'react-redux'
import Detail from "./pages/detail";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <div>
              <Header/>
              <BrowserRouter>
                  <Routes>
                      <Route path='/' exact element={<Home/>}></Route>
                      <Route path='/detail' exact element={<Detail/>}></Route>
                  </Routes>
              </BrowserRouter>
          </div>
      </Provider>
    </div>
  );
}

export default App;
