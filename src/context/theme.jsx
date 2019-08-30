import React, { createContext, useState } from 'react'
import { useFormInput } from 'helpers'

const ThemeContext = createContext({})

const ThemeProvider = (props) => {
  const theme = useFormInput('dark', ['dark', 'magenta'])

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }