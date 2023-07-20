import Header from './common/header'
import store from './store'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Provider} from 'react-redux'
import DetailPage from "./pages/detail/loadable";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path='/' exact element={<Home/>}></Route>
                  <Route path='/detail/:id' exact element={<DetailPage/>}></Route>
                  <Route path='/login' exact element={<Login/>}></Route>
              </Routes>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
