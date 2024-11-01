import './App.css';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import { Provider } from 'react-redux';
import Store from './utils/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className='mainwrapper'>
        <Header/>
        <MainContainer/>
      </div>
    </Provider>
  );
}

export default App;
