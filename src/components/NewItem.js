import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    let {title,description,imageURL,newsURL,date,source}=this.props;
    let d=new Date(date);
    return (
        <div className="relative mx-8 my-6 rounded-2xl flex flex-col justify-center items-center w-64 transition-all duration-500 ease-out hover:scale-105" style={{backgroundColor:"rgb(255 255 255)",height:"340px"}}>
          <span className="absolute -top-3 left-1/2 transform -translate-x-1/2  badge rounded-pill bg-danger">{source}</span>
        <img src={imageURL?imageURL:"https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=740"} className="h-32 w-52 rounded-lg" alt="Image"/>
        <div className="flex flex-col my-2 w-48">
            <p className="font-sans text-md text-left leading-6 font-semibold paragraph-ellipsis">{title}</p>
            <p className="font-sans text-stone-600 text-xs my-1 w-44 h-8 paragraph-ellipsis-description">{description?description:"No Description..."}</p>
            <p className='font-sans text-center text-xs my-1 w-48 h-5'><small style={{color:'grey'}}>Published At {d.toDateString()}, {d.toLocaleTimeString()}</small></p>
        </div>
        <a href={newsURL} target='_blank' rel="noreferrer"><button className="bg-purple-700 hover:bg-purple-900 rounded-3xl font-semibold text-white h-8 w-48">Read More</button></a>
    </div>
    )
  }
}

export default NewItem