import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import HomePage from './routes/homePage/homePage.component';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
