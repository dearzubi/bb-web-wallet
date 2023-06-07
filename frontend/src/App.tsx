import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

  return (

    <main>
      <Routes>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default App;