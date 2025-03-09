import { Route, Routes } from 'react-router-dom';
import Container from './layouts/Container';
import Home from './views/Home';

function App() {
  return (
    <Routes>
      <Route element={<Container />} >
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
