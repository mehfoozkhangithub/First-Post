import React, { useState } from 'react'
import AllPages from '../Component/AllPages';
import styles from './Context.module.css' ; 

function SportsPage() {
  const [endPoint,setEndPoint] = useState({category:"sports",country:'in'})

  return (
    <div className={styles.container}>
      <AllPages pageName={'Sports'} endPoint={endPoint}/>
    </div>
  )
}

export default SportsPage