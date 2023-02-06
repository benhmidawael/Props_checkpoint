import React from 'react'
import propTypes from 'prop-types'

function ComponentProfile(props) {
    return (
        <div>
               <h1 style={{color:"blue",fontSize:"50px"}}>{props.fullName}</h1>
                <p style={{fontSize:"35px"}}>{props.bio}</p>
                <h3 style={{fontSize:"30px"}}>{props.profession}</h3> 
               {props.children} 
               {props.handleName(props.fullName)}

        </div>
  
    ) 
}


ComponentProfile.defaultProps={
    fullName:"This a default name",
    bio:"This a default bio",
    profession:"This is a default profession"
}


ComponentProfile.propTypes={
    fullName:propTypes.string.isRequired,
    bio:propTypes.string.isRequired,
    profession:propTypes.string.isRequired,
    handleName:propTypes.func

}

export default ComponentProfile