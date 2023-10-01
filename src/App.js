import './App.css';
import store from "./app/features/store"
import HijjaStore from './app/index.jsx';
import HomePage from './app/pages/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
const { BrowserRouter, Routes, Route } = require("react-router-dom");
function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HijjaStore />} >
                <Route path="" element={<HomePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
