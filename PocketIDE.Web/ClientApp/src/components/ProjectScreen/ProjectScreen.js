import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPencilAlt, faCode } from '@fortawesome/free-solid-svg-icons'
import UseWindowSize from '../../utils/UseWindowSize'
import Camera from 'react-dom-camera'

export default function ProjectScreen() {
  const [isMobile,] = UseWindowSize()
  const [code, setCode] = useState('_')
  const cam = useRef(null)

  const takePhoto = () => {
    cam.current.captureMediaStream()
  }

  const upload = async (photo) => {
    if (!photo) return

    setCode('processing...')

    var xhr = new XMLHttpRequest
    xhr.responseType = 'blob'
    xhr.onload = function () {
      var recoveredBlob = xhr.response

      var reader = new FileReader

      reader.onload = async () => {
        var blobAsDataUrl = reader.result
        const response = await fetch('/api/AzureReco', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            image: blobAsDataUrl.split('base64,')[1]
          })
        })
        const data = await response.json()
        const arr = data.analyzeResult.readResults[0].lines.map(l => l.text)
        setCode(arr.join('\n'))
      }
      reader.readAsDataURL(recoveredBlob)
    }
    xhr.open('GET', photo)
    xhr.send()
  }

  return (
    <div className={`project-screen ${isMobile ? '' : ''}`}>

      <div className={isMobile ? '' : 'pt-3'}>
        <Camera
          onTakePhoto={upload}
          facingMode={'user'}
          captureButtonRenderer={() => { }}
          ref={cam}
        />

        <div className='project-screen__buttons'>
          <div className='btn-primary pointer'>
            <FontAwesomeIcon icon={faPencilAlt} size='4x' className='red-col-2' />
          </div>
          <div className='btn-primary pointer' onClick={takePhoto}>
            <FontAwesomeIcon icon={faCamera} size='4x' className='red-col-2' />
          </div>
          <div className='btn-primary pointer'>
            <FontAwesomeIcon icon={faCode} size='4x' className='red-col-2' />
          </div>
        </div>
      </div>

      <div className='primary fill p-4'>
        <h3 className='roboto bold'>
          Output:
        </h3>
        <h3 className='pl-4 pr-4 pt-1 pb-1'>
          {code}
        </h3>
      </div>

    </div>
  )
}
