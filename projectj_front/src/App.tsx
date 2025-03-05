import { Route, Routes } from 'react-router-dom';
import Container from './layouts/Container';

function App() {
  return (
    <Routes>
      <Route element={<Container />} >
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
