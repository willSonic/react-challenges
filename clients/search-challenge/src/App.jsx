import React, {Component} from 'react';
import './App.css';


const searchUrl = "https://mobile-staging.gametime.co/v1/search?q=";
const imgURL = 'http://localhost:8080/assets/logos/360px-Gap_1972.png';

export default class App extends Component{
  constructor(props){
     super(props);
     this.state={
       searchResults:[]
     }
  }


  componentDidMount(){
    this.searchField.focus();
  }

  fetchSearchResults = async(query) =>{
   console.log('fetchSearchResults = ', query);
   const response = await fetch(`${searchUrl}`+query);
   return await response.json();
  };


  handleSearchInput = async(e) =>{
   const searchResponse = await this.fetchSearchResults(e.currentTarget.value);
  console.log('Search Response = ', searchResponse);
   if(searchResponse){
        const events = 'events' in  searchResponse && searchResponse.events.slice(0,3).map( (item)=>{
           return {
             type:'event',
             image: item.performers[0].hero_image_url,
             title: item.event.name,
             subTitle: item.venue.name
           }
        });
        const performers = 'performers' in  searchResponse && searchResponse.performers.slice(0,3).map( (item)=>{
           return {
             type:'performer',
             image: item.hero_image_url,
             title: item.name,
             subTitle: item.category
           }
        });
        const venues= 'venues' in searchResponse && searchResponse.venues.slice(0,3).map( (item)=>{
           return {
             type:'venue',
             image: item.image_url,
             title: item.name,
             subTitle: item.city
           }
        });
        this.setState({'searchResults':[...events, ...performers, ...venues ]})
   }else{
      this.setState({'searchResults':[]})
   }
  };


  renderSearchResults =()=>{
    const { searchResults } = this.state;
    console.log('renderSearchResults =', searchResults);
    return(
      <div className={"search-result-list"}>
        <ul>
          {searchResults.map((item, index)=>{
                return (
                   <li key={ index+item.type}>
                    <div className="result-img">
                       <img src={item.image}/>
                    </div>
                    <div className="result-info">
                        <div className="result-title">
                          { item.title}
                        </div>
                        <div className="result-sub-title">
                          { item.subTitle}
                        </div>
                    </div>
                </li>
                )
              })
          }
        </ul>
      </div>
    )
  };


  render() {
    const { searchResults } = this.state;

    return (
      <div className="App">
          <img src={imgURL} className="App-logo" alt="logo" />
          <div className="search-field">
            <input
              type="text"
              placeholder="Search"
              onChange={this.handleSearchInput}
              ref={(input) => { this.searchField = input; }}
            />
            { searchResults.length>1 && this.renderSearchResults()}
          </div>
      </div>
    );
  }
}
