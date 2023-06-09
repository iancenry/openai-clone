const Translation = ({sendQuery, setQuery, result, resetOptions}) => {
  return (
    <div className='translation-input'>
      <textarea className='text-area' name='text-area' cols="55" rows="10" onChange={(e) => setQuery(e.target.value)}></textarea>
      <button onClick={sendQuery}>SEND</button>
      <button onClick={resetOptions}>GO BACK</button>
      {result && <h3 className="result-text">{result}</h3>}
    </div>
  )
}

export default Translation