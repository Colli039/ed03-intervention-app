import { createContext, useState, useContext, useEffect } from 'react'

const VideoContext = createContext()

export const useVideoContext = () => useContext(VideoContext)

export const VideoInfoProvider = ({ children }) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  const value = {
    isVideoEnded,
    setIsVideoEnded,
    videoUrl,
    setVideoUrl
  }

  return (<VideoContext.Provider value={value}>{children}</VideoContext.Provider>)
}
