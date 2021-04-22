import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

export default class Writestory extends React.Component {
constructor(){
  super();
  this.state = {
    title : "",
    submitPressed : false,
    story : "",
    authorName : ""
  }
}
render(){
  return(
    <View style={styles.container}>
      <Image style = {styles.imageIcon}
      source = {require('../assets/icon.png')}
      ></Image>
      <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              title: this.state.title,
              submitPressed: false,
              
            });
          }}
          value={this.state.text}
          placeholder = "Give a Title"
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              authorName: this.state.authorName,
              submitPressed: false,
            });
          }}
          value={this.state.text}
          placeholder = "Author Name"
        />
        <TextInput
          style={styles.storyBox}
          onChangeText={(text) => {
            this.setState({
              story: this.state.story,
              submitPressed: false,
            });
          }}
          value={this.state.text}
          placeholder = "Describe your Story"
        />
        <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.setState = {
                submitPressed : true
              }
            }}>
            <Text style={styles.searchText}>Submit</Text>
        </TouchableOpacity>        
        </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  inputBox: {
    marginTop: 10,
    width: '30%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  storyBox : {
    marginTop: 10,
    width: '30%',
    alignSelf: 'center',
    height: 200,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  imageIcon: {
    marginTop: 30,
    width: 150,
    height: 150,
  },
  searchButton: {
    width: '10%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 20,
  },
  searchText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})