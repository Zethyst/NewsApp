import React, { Component } from 'react'
import Loader from './1495.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loader} alt="Loading" className=' m-auto'/>
      </div>
    )
  }
}
