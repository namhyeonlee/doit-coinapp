import React, { PureComponent } from 'react'
import {Provider} from 'react-redux'
import AppLayout from './components/AppLayout';
import CoinOverview from './components/main/CoinOverview';
import MainPage from './components/main/MainPage';
import configureStore from './store/configureStore'



class App extends PureComponent {
store = configureStore()
  render() {
    return (
       <Provider store={this.store}>
     
      <AppLayout>
        <MainPage/>
       </AppLayout> 
    </Provider>
      
    )
  }
}

export default App;
