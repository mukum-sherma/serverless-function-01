import React from "react"
import axios from 'axios'
import { useState, useEffect } from "react"

export default function Home() {
  /********************************************************** 
   *  USING useState
   * **********************************************************/
  const [name, setName] = useState(null)

  useEffect(() => {
    // development
    // axios('http://localhost:9000/getInfo').then(res => {
    
    //production
    axios('/.netlify/functions/getInfo').then(res => {
      console.log('infooo : ', res.data)
      setName(res.data.name)
    })
  }, [])
  
  /********************************************************** 
   *  USING functio
   * ********************************************************
  // function getInfo() {
  //   axios('http://localhost:9000/getInfo').then(res => {
  //     return <h1>Hey</h1>
  //   })
  // }
  ********************/
  
  return (
    <div>
      welcome
      { name }
     </div>
  )
}
