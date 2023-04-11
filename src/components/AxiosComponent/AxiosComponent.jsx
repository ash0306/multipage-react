import React, { Component } from 'react'
import './AxiosComponent.css'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import axios from 'axios'

export default class AxiosComponent extends Component {
  constructor() {
    super()
    this.state = {
      comics: [],
      error: ''
    }
  }

  componentDidMount(){
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then(response =>{
      console.log(response);
      this.setState({comics:response.data.results})
    })
    .catch(err =>{
      console.log(err)
      this.setState({error:'Error retrieving data'})
    })
  }

  render() {
    const {comics, error} = this.state
    return (
      <div className='axios-main'>
        <HeaderComponent/>
        <h1>Rick and Morty</h1>
        <br/><br/>
        <div className='comic'>
          {comics.length ? comics.map(comic => 
          <div>
            <img className='comic-img' src={comic.image} alt=''/>
            <p><strong>Name:</strong>{comic.name}</p>
            <p><strong>Species:</strong>{comic.species}</p>
            <p><strong>Status:</strong>{comic.status}</p>
          </div>) : null}
          {error ? <div>{error}</div> : null}
        </div>
      </div>
    )
  }
}