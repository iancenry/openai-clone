import React from 'react'

const Options = ({arrayItems, selectOption}) => {
  return (
    <div className='options'>
      <h2>Dive Into AI</h2>
      <div className='options-grid'>
        {arrayItems.map(item => {
          return (
            <div key={item.id} className='options-grid__child' onClick={()=> selectOption(item.option)}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Options