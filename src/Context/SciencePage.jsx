import React, { useState } from 'react'
import AllPages from '../Component/AllPages';
import styles from './Context.module.css' ; 

function SciencePage() {
  const [endPoint,setEndPoint] = useState({category:"science",country:'in',query:null})

  return (
    <div className={styles.container}>
      <AllPages pageName={'Science'} endPoint={endPoint}/>
    </div>
  )
}

export default SciencePage ; 