import React,{Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';




class App extends Component{
    state={displayBio:false};
    

    toggleDisplayBio=()=>{
        this.setState({displayBio: !this.state.displayBio});
    }
    render(){

   

        return(
            <div>
                <img src={profile} alt='profile'></img>
                <h1>hello!</h1>
                <p>My name is pravallika. I'm a software engineer</p>
                <p>I'm always looking for working on meaningful projects.</p>
                {
                      this.state.displayBio?   (
                     <div>
                      <p>I live in Andhra Pradesh and code everyday</p>
                           <p>My favorite language is java</p>
                         <p>Besides coding, I also love music and food!</p>
                         <button onClick={this.toggleDisplayBio}>Show less</button>
                         </div>
                          ):(
                              <div>
                                  <button onClick={this.toggleDisplayBio}>Read more</button>
                              </div>
                          )
                           }
                           <hr/>
                           <Projects/>
                           <hr/>
                           <SocialProfiles/>
                           
                      
                           
                
            </div>
        )
    }
}
export default App;


