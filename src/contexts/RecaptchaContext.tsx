'use client'

import React, { createContext, useContext, useRef, useState, useEffect } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

interface RecaptchaContextType {
  recaptchaRef: React.RefObject<ReCAPTCHA>
  recaptchaToken: string | null
  setRecaptchaToken: (token: string | null) => void
  recaptchaLoaded: boolean
  executeRecaptcha: () => Promise<string | null>
  resetRecaptcha: () => void
}

const RecaptchaContext = createContext<RecaptchaContextType | undefined>(undefined)

export const useRecaptcha = () => {
  const context = useContext(RecaptchaContext)
  if (!context) {
    throw new Error('useRecaptcha must be used within a RecaptchaProvider')
  }
  return context
}

export const RecaptchaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)

  const executeRecaptcha = async (): Promise<string | null> => {
    if (recaptchaRef.current) {
      try {
        const token = await recaptchaRef.current.executeAsync()
        setRecaptchaToken(token)
        return token
      } catch (error) {
        console.error('reCAPTCHA execution error:', error)
        return null
      }
    }
    return null
  }

  const resetRecaptcha = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset()
      setRecaptchaToken(null)
    }
  }

  const handleRecaptchaLoad = () => {
    console.log('reCAPTCHA loaded successfully')
    setRecaptchaLoaded(true)
  }

  const handleRecaptchaChange = (token: string | null) => {
    console.log('reCAPTCHA onChange triggered with token:', token)
    setRecaptchaToken(token)
  }

  // Fallback to ensure reCAPTCHA is considered loaded after a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setRecaptchaLoaded(true)
    }, 3000) // 3 second fallback

    return () => clearTimeout(timer)
  }, [])

  const value: RecaptchaContextType = {
    recaptchaRef,
    recaptchaToken,
    setRecaptchaToken,
    recaptchaLoaded,
    executeRecaptcha,
    resetRecaptcha
  }

  return (
    <RecaptchaContext.Provider value={value}>
      {children}
      {/* Hidden reCAPTCHA that loads globally */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
          onChange={handleRecaptchaChange}
          onLoad={handleRecaptchaLoad}
          theme="light"
          size="invisible"
        />
      </div>
    </RecaptchaContext.Provider>
  )
}
