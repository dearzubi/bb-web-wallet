import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CreateAccountP from './pages/CreateAccountP';
import CreateAccountNP from './pages/CreateAccountNP';

function App() {

  return (

    <main>
      <Routes>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateAccountP />} > </Route>
        <Route path='/createNP' element={<CreateAccountNP />} > </Route>
      </Routes>
    </main>
  );
}

export default App;