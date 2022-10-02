import React, { useState } from 'react'
import AllPages from '../Component/AllPages';
import styles from './Context.module.css' ; 

function BusinessPage() {
  const [endPoint,setEndPoint] = useState({category:"business",country:'in',query:null})

  return (
    <div className={styles.container}>
      <AllPages pageName={'Business'} endPoint={endPoint}/>
    </div>
  )
}

export default BusinessPage