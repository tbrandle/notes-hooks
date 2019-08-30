import React, { createContext, useState } from 'react'
import { useFormInput } from 'helpers'

const LanguageContext = createContext({})

const LanguageProvider = (props) => {
  const language = useFormInput('EN', ['EN', 'SP', 'RUS'])

  return (
    <LanguageContext.Provider value={language}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageProvider }