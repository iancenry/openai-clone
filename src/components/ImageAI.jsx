import React from 'react'

const ImageAI = (props) => {
  return (
    <div className="main">
      <h1>Generate an AI Image</h1>
      <input
        type="text"
        placeholder="Type Image Query"
        className="main-input"
        name="prompt"
        value={props.prompt}
        onChange={(e) => props.setPrompt(e.target.value)}
      />
      <button onClick={props.generateImage}>Generate an Image</button>

      {props.imgresult.length > 0 && (
        <img src={props.imgresult} alt="result" className="result-image" />
      )}
    </div>
  )
}

export default ImageAI
