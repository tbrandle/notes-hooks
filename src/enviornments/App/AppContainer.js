import { useEffect, useState, useRef } from 'react'

export function useCustomProps(props) {

  //state
  const [items, setItems] = useState([1, 2, 3])
  const [names, setNames] = useState(['tim', 'didi', 'sierra', 'lily'])

  //handlers


  
  

  return {
    items,
    setItems,
    names,
    setNames
  }
}
