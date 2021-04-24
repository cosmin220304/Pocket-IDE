import React, {useState, useEffect} from 'react'

function FetchData() {
  const [readText, setReadText] = useState()
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async() => {
    //const response2 = await fetch('api/AzureReco');
    //const data2 = await response2.json();
    //const arr = data2.analyzeResult.readResults[0].lines.map(l => l.text)
    //setReadText(arr.join('\n'))
  }

  return (
      <div>
          Text:
      {readText}
    </div>
  )
}

export default FetchData