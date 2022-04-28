import React, { useEffect, useState } from 'react'

import './BackToTop.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggle = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggle)
    return () => {
      window.removeEventListener('scroll', toggle)
    }
  }, [])
  return (
    <div className='scroll-to-top'>
      {isVisible && (
        <div className='back-top-container' onClick={scrollToTop}>
          <ArrowUpwardIcon style={{ marginTop: '2px' }} />
          Back To Top
        </div>
      )}
    </div>
  )
}

export default BackToTop
