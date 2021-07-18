import React from 'react';
import './cards.css'
//import { propTypes } from 'react-bootstrap/esm/Image';
// import propTypes from 'prop-types' 

function Card({title, imageSource, text, url}){
  return(
    <div className="card text-center bg-dark">
      
      <div className="overflow">
        <img src={imageSource} alt="" className="card-img-top"></img>
      </div>
      
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {
            text ? text: 'Lorem lefhakda aldjahnlfkandfca asdlkasdandadf dclakdncacldka ajkdasdbs,s asjdasajs xaldasjxlbasdalkdfasdjsdklnasxas.xnax.asx lkedfnnldkansdasd'
          }
        </p>
        <a href={url} className="btn btn-outline-secondary rounded-0" target="_blank" rel="noreferrer">
          Go to this website
        </a>
      </div>
    </div>
  )
}


// Card.PropTypes = { title: propTypes.string.isRequired, url: propTypes.string, imageSource:
// propTypes.string, text: propTypes.string.isRequired}
export default Card;