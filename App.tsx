import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/router/rootNavigator'
 import {Provider} from "react-redux"
 import {store} from "./src/store/store"
const App: React.FC = () => {
  return (

  <Provider store={store} >
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>

  </Provider>

  )
}



export default App
