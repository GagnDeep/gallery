import React, { Component } from 'react';
import Layout from './components/layout/layout'
import imagess from './assets/jotImages/jotJSON';
let images = Array.from(new Set(imagess))
// console.log(images[0])
class App extends Component {
  state = {
      backgroundImage: getRandomImage()
    }
  render() {
    // let imgs = images.map(el => {return (<img src = {el}/>)})
    return (
      
        <Layout img = {this.state.backgroundImage} nextClickHandler = {this.nextClickHandler} previousClickHandler = {this.previousClickHandler}>
            
        </Layout>
      
    );
    
  }
  nextClickHandler = () => {
      let url = this.state.backgroundImage;
      let i = images.findIndex(el=>el===url);
      clearInterval(this.interval);
      this.setState({
        backgroundImage: images[(i+1)%(images.length-1)]
      })
  }
  previousClickHandler = () => {
      let url = this.state.backgroundImage;
      let i = images.findIndex(el=>el===url);
      if(i === 0) i+=images.length-1
      clearInterval(this.interval);
      this.setState({
        backgroundImage: images[+(i-1)%(images.length-1)]
      })
      console.log(i,+((i-1)%(images.length-1)))
  }
  componentDidMount(){
    this.interval = setInterval(this.changeBackground,3000)
  }
  changeBackground = ()=>{
      this.setState({
        backgroundImage: getRandomImage()
      })
    }
}
function getRandomImage(){
  return images[Math.floor(Math.random()*images.length)];
}

export default App;
