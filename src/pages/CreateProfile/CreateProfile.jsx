import {useState } from "react"

function CreateProfile (props) {
  return(
    <>
    <h1>Tell us more about you .. ( Create Profile ) </h1>
      <div className="create-profile">
        <label>Species</label>
        <label>Who you want to date?</label>
        <label>Height: </label>
        <label>Do you eat brains? </label>
        <label>Bio: </label>
        <div className="btn">
          <button>Back:</button>
          <button>Submit</button>
        </div>
      

      </div>
    </>
  )
  
}

export default CreateProfile