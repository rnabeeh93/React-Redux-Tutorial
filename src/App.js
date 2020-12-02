import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
import InputCakeContainer from './components/InputCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <hr/>
        <HooksCakeContainer/>
        <hr/>
        <InputCakeContainer/>
        <hr/>
        <IcecreamContainer/>
        <hr/>
        <ItemContainer cake/>
        <ItemContainer icecream/>
        <hr/>
        <UserContainer/>
      </div>
    </Provider>    
  );
}

export default App;
