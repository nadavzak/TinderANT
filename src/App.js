import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import Header from './layout/Header';
import Like from './Components/like';
import RandomCard from './Components/randomCard';
import Age from './Components/Age';
import Gender from './Components/Gender';
import Submit from './Components/Submit';
import { Route } from 'react-router-dom';
import { Switch, Link, withRouter } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import SelectAge from './Components/user';
import { Alert } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import LikedUsers from './Components/LikedUsers';



class App extends Component {
constructor(props){
super(props);
this.handler = this.handler.bind(this);
this.handlerMinAge=this.handlerMinAge.bind(this);
this.handlerMaxAge=this.handlerMaxAge.bind(this);


this.state = {
 users : [
    {
        id: uuid.v4(),
        name: 'David Matos',
        gender: 'male',
        age: 30,
        height: 174,
        location: 'Eilat',
        image: 'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
        premium: false
    },
    {
        id: uuid.v4(),
        name: 'Amir Buzaglo',
        gender: 'male',
        age: 24,
        height: 181,
        location: 'Tel-Aviv',
        image: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        premium: true,
        hobbies: ['Bar', 'Party']

     },
    {
        id: uuid.v4(),
        name: 'Nadav Katan',
        gender: 'male',
        age: 28,
        height: 178,
        location: 'Netanya',
        image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        premium: true,
        hobbies: ['TV', 'Dance']

     },
    {
      id: uuid.v4(),
        name: 'Leo Kaplan',
        gender: 'male',
        age: 21,
        height: 181,
        location: 'Ashdod',
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        premium: true,
        hobbies: ['Friends', 'TV']

     },
    {
        id: uuid.v4(),
        name: 'Cristiano Aronade',
        gender: "male",
        age: 30,
        height: 188,
        location: "Jerusalem",
        image: "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        premium: false
    },
    {
        id: uuid.v4(),
        name: "Zinadine Zakzak",
        gender: "male",
        age: 30,
        height: 179,
        location: "Kfar-Saba",
        image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        premium: false
    },
    {
        id: uuid.v4(),
        name: 'Eitan Tayeb',
        gender: 'male',
        age: 47,
        height: 176,
        location:'Petah Tikva',
        image: 'https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        premium: true,
        hobbies: ['Bar', 'Friends'],

     },
    {
      id: uuid.v4(),
        name: 'Xavi Shifta',
        gender: 'male',
        age: 38,
        height: 170,
        location: 'Tel-Aviv',
        image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        premium: false
    },
    {
        id: uuid.v4(),
        name: 'Almog Maniac',
        gender: 'male',
        age: 21,
        height: 180,
        location: 'Eilat',
        image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        premium: true,
        hobbies: ["Bar", "Party"]

     },
    {
        id: uuid.v4(),
        name: 'Yossi Cohen',
        gender: 'male',
        age: 30,
        height: 170,
        location: 'Netanya',
        image: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        premium: false
},
{
        id: uuid.v4(),
        name: 'Sapir Matok',
        gender: 'female',
        age: 27,
        height: 163,
        location: 'Netanya',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        premium: true,
        hobbies: ['Friends', 'Party'],


 },
{
    id: uuid.v4(),
    name: 'Noam Klil',
    gender: 'female',
    age: 22,
    height: 167,
    location: 'Kfar-Saba',
    image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    premium: true,
    hobbies: ['Bar', 'TV']

 },
{
    id: uuid.v4(),
    name: 'Odelia Levi',
    gender: 'female',
    age: 24,
    height: 170,
    location: 'Ashdod',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    premium: true,
    hobbies: ['TV', 'Party']

 },
{
    id: uuid.v4(),
    name: 'Nicole Lomashu',
    gender: 'female',
    age: 40,
    height: 171,
    location: 'Eilat',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    premium: false
},
{
    id: uuid.v4(),
    name: 'Nati Hazan',
    gender: 'female',
    age: 32,
    height: 170,
    location: 'Tel-Aviv',
    image: 'https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    premium: true,
    hobbies: ['Bar', 'Dance']

 },
{
  id: uuid.v4(),
  name: 'Roni Til',
    gender: 'female',
    age: 25,
    height: 169,
    location: 'Jerusalem',
    image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    premium: true,
    hobbies: ["TV", "Friends"]
},
{
  id: uuid.v4(),
  name: 'Gili Hatul',
    gender: 'female',
    age: 30,
    height: 170,
    location: 'Jerusalem',
    image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    premium: false
},
{
    id: uuid.v4(),
    name: 'Viki Lover',
    gender: "female",
    age: 22,
    height: 165,
    location: 'Eilat',
    image: 'https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500s',
    premium: false
},
{
    id: uuid.v4(),
    name: 'Noga Knafo',
    gender: 'female',
    age: 28,
    height: 171,
    location: 'Tel-Aviv',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    premium: false
},

{
    id: uuid.v4(),
    name: 'Shira Yafa',
    gender: 'female',
    age: 35,
    height: 173,
    location: 'Petah Tikva',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    premium: true,
    hobbies: ['TV', 'Bar']

}
],
seacrchAge:'',
userIndex: 1,
filter_Gender:'',
filter_MinAge:18,
filter_MaxAge:99,
filtered_Array:[],
likes_Arr:[],
likes_index:0,
show_liked:'',
}

}

handlerMinAge(passMinAge) {
  this.setState({
    filter_MinAge: passMinAge
  });
}

handlerMaxAge(passMaxAge) {
  this.setState({
    filter_MaxAge: passMaxAge
  });
}

handler(passGender) {
  this.setState({
    filter_Gender: passGender
  });

}
nextUser = () =>{
  this.setState({
    userIndex:this.state.userIndex+1
  });
}

showall = () =>{
  var show_liked='';
   this.state.likes_Arr.forEach(element => {
   this.show_liked = <div> {element.name} <p > {element.age}</p> <p>{element.location}</p> <p>{element.image}</p></div> ;

   });
   this.setState({
    show_liked:show_liked
 })
 }
 


handlerFiltered_Array(arr) {
  this.setState({
    filtered_Array: arr
  });
}

// handlerLiked_Array(arrLikes) {
//   this.setState({
//     likes_Arr: arrLikes
//   });
// }

filter_tinder=()=>{
  this.handler(this.state.filter_Gender);
  var filterArr=[];
  var filter_index=0
  this.state.users.forEach(element => {
  if(element.gender==this.state.filter_Gender && element.age>=this.state.filter_MinAge && element.age<=this.state.filter_MaxAge ){
    filterArr[filter_index]=element;
    filter_index++;
  }
});   
this.handlerFiltered_Array(filterArr);

}

Add_To_Likes_Arr=()=>{
  const arr1 =[this.state.users[this.state.userIndex]];
  const arr2= this.state.likes_Arr;
  const arr3= arr1.concat(arr2);
  this.setState({likes_Arr: arr3});
  console.log(this.state.likes_Arr);
}


 


  render(){

  return (


    
    <Router>
      <div className="App">
      <Header/>

      <div className="App-body">
        
             {/* <div>
              <h1>Min Age: {this.state.filter_MinAge}  Max Age:  {this.state.filter_MaxAge }</h1>
                <h1>Gender: {this.state.filter_Gender}</h1>
            </div> 
        */}

            <Switch>
              <Route exact path ="/">
                <Gender handler={this.handler} filter_Gender={this.filter_Gender} genderSelectDDL={this.genderSelectDDL}/>
                <Age filter_tinder={this.filter_tinder} usersList= {this.users} user_gender={this.user_gender} setGender={this.setGender} filter_MinAge={this.filter_MinAge} handlerMaxAge={this.handlerMaxAge} handlerMinAge={this.handlerMinAge}  filter_Gender={this.filter_Gender} />
                
              </Route>

              <Route path="/filter">
                <RandomCard usersList={this.state.filtered_Array} userIndex={this.state.userIndex} />
                <Like userIndex={this.userIndex}  nextUser={this.nextUser} Add_To_Likes_Arr={this.Add_To_Likes_Arr} likes_Arr={this.likes_Arr} showall={this.showall}/>       
              </Route>

              <Route path ="/mylikes">
                <LikedUsers likes_Arr={this.likes_Arr} show_liked={this.show_liked}/>
              </Route>

            </Switch>
        
        </div>

      </div>
   </Router>
  );
  }     
}

export default App;
