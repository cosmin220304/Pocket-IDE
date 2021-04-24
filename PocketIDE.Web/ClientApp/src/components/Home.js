import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Home() {
    const [photo, setPhoto] = useState()
    const [readText, setReadText] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const changeHandler = (e) => {
        if (e.target.files.length > 0) {
            var reader = new FileReader()
            reader.onload = (e) => setPhoto(btoa(e.target.result))
            reader.readAsBinaryString(e.target.files[0])
        }
    } 

    const upload = async () => {
        if (!photo) return

        setIsLoading(true)
        const response = await fetch('/api/AzureReco', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image: photo
            })
        })
        const data = await response.json()
        const arr = data.analyzeResult.readResults[0].lines.map(l => l.text)
        setReadText(arr.join('\n'))
        setIsLoading(false)
    }

    const renderResults = () => {
        if (isLoading) {
            return (
                <div>
                    Loading...
                </div>
            )
        }

        if (!photo) return

        return (
            <div>
                {readText}
            </div>
        )
    }

    return (
        <div>
            <input type='file' name='file' onChange={changeHandler} />
            <div>
          <button className='btn-primary' onClick={() => { }}>Submit <FontAwesomeIcon icon={faUserCircle} size="2x" /></button>
            </div>
            <p>
                {renderResults()}
            </p>
        </div>
    )
}

export default Home