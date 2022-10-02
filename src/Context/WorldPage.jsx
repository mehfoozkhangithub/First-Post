import React, { useState } from 'react'
import AllPages from '../Component/AllPages';
import styles from './Context.module.css' ; 

function WorldPage() {
  const [endPoint,setEndPoint] = useState({category:"general",country:'us'})

  return (
    <div className={styles.container}>
      <AllPages pageName={'World'} endPoint={endPoint}/>
    </div>
  )
}

export default WorldPage