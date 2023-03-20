import React from 'react'

const Translation = ({sendQuery, setQuery}) => {


  return (
    <div className='translation-input'>
      <textarea className='text-area' name='text-area' cols="55" rows="10" onChange={(e) => setQuery(e.target.value)}></textarea>
      <button onClick={sendQuery}>SEND</button>
      <button>RESET</button>
    </div>
  )
}

export default Translation