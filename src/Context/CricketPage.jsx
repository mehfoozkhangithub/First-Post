import React, { useState } from 'react'
import AllPages from '../Component/AllPages';
import styles from './Context.module.css' ; 

function CricketPage() {
  const [endPoint,setEndPoint] = useState({category:'sports',country:'in',query:null})

  return (
    <div className={styles.container}>
      <AllPages pageName={'Cricket'} endPoint={endPoint}/>
    </div>
  )
}

export default CricketPage