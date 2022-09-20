import './App.css';
import Main from './components/pages/main/main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Main/>
      <ToastContainer />
    </div>
  );
}

export default App;
