import React, { useState } from 'react'

const useFormInput = (initialValue, options) => {
  const [value, setValue]  = useState(initialValue)

  const handleChange = (e) => {
    const { value } = e.target
    if (options) {
      options.includes(value) && setValue(e.target.value)
     } else {
      setValue(e.target.value)
     }
  }

  const result = {
    value,
    onChange: handleChange
  }


  options && Object.assign(result, { options })

  return result
}

export default useFormInput