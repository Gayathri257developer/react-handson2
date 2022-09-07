import React from "react"


const ShowUser = (props) => {
  return(
      <>
      <div className="form">
      <h1> Emoplyee Feedback Form</h1>
     Name:<input value={props.name} type="text" onChange={props.updateName} />
      <br />
     Department:<input value={props.depart} type="text" onChange={props.updateDepartment}/>
     <br/>
     Rating:<input value={props.rating} type="number" onChange={props.updateRating}/>
      
      </div>

      <div id="formdata">
      {
        props.users.map(item => { 
          return  <div className="databox">Name: {`${item.name} || Department: ${item.depart} || Rating: ${item.rating}`}
          </div>  
          
        })
    }
      </div>
     </> 
  )
}

export default ShowUser
