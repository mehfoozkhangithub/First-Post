import React, { useState } from 'react'
import AllPages from '../Component/AllPages';
import styles from './Context.module.css' ; 

function EntertainmentPage() {
  const [endPoint,setEndPoint] = useState({category:"Entertainment",country:'in'})

  return (
    <div className={styles.container}>
      <AllPages pageName={'Entertainment'} endPoint={endPoint}/>
    </div>
  )
}

export default EntertainmentPage