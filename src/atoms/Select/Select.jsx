import React from 'react'
// import Select from 'react-select'

const CustomSelect = (props) => {
  return (
    <select {...props}>
      {
        props.options.map(o => <option value={o}>{o}</option>)
      }
    </select>
  )
}

export default CustomSelect