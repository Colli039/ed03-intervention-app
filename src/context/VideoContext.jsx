import { createContext, useState, useContext, useEffect } from 'react'

const VideoContext = createContext()

export const useVideoContext = () => useContext(VideoContext)

export const VideoInfoProvider = ({ children }) => {
  const [isVideoEnded, setIsVideoEnded] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')

  const toKebabCase =(text)=> {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

  const value = {
    isVideoEnded,
    setIsVideoEnded,
    videoUrl,
    setVideoUrl,toKebabCase
  }

  return (<VideoContext.Provider value={value}>{children}</VideoContext.Provider>)
}
