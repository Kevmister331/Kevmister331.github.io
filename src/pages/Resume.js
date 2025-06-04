import * as React from "react"
import resume from '../images/Kevin Hu Resume.pdf'

const Resume = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={resume}
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
        title="Resume"
      />
    </div>
  )
}

export default Resume 