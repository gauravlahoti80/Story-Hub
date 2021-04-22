import React from 'react';
import { StyleSheet, Text, View, Image   } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Writestory from './screens/writestory';
import Readstory from './screens/readstory';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Readstory: {screen: Readstory},
  Writestory: {screen: Writestory},
},
{
  defaultNavigationOptions : ({navigation}) => ({
    tabBarIcon : ({})=>{
      const routeName = navigation.state.routeName
      if (routeName === 'Readstory'){
        return(
          <Image
            source = {require('./assets/read.png')}
            style = {{width : 40, height : 40}}/>
        )
      }
      else if (routeName === 'Writestory'){
        return(
          <Image
            source = {require('./assets/write.png')}
            style = {{width : 30, height : 40}}/>
        )
      }
    }
  })
}
);


const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
