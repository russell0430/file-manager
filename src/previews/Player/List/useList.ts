import { off } from "process"
import React, { useRef, useState, useEffect } from "react"

const useList = () => {
  const [curIndex, setCurIndex] = useState(0)
  const [showing, setShowing] = useState(true)

  const listRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClick:React.MouseEventHandler<HTMLDivElement>=(e)=>{
        let target:Element?;
        
        if( (e.target as HTMLDivElement).tagName.toUpperCase()==="LI"){
            target=e.target as Element
        }else {
            target=(e.target as Element).parentElement
        }
        // const audioIndex=parseInt()
        

    }
    // listRef.current?.addEventListener('click',())
  })
}
