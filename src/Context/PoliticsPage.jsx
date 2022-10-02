import React, { useState } from 'react'
import AllPages from '../Component/AllPages';
import styles from './Context.module.css' ; 

function PoliticsPage() {
  const [endPoint,setEndPoint] = useState({category:"politics",country:'us'})

  return (
    <div className={styles.container}>
      <AllPages pageName={'Politics'} endPoint={endPoint}/>
    </div>
  )
}

export default PoliticsPage