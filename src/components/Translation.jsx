const Translation = ({sendQuery, setQuery, result}) => {
  return (
    <div className='translation-input'>
      <textarea className='text-area' name='text-area' cols="55" rows="10" onChange={(e) => setQuery(e.target.value)}></textarea>
      <button onClick={sendQuery}>SEND</button>
      {result && <h3 className="result-text">{result}</h3>}
      {/* <button>RESET</button> */}
    </div>
  )
}

export default Translation