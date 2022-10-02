import React, { useState } from 'react'
import AllPages from '../Component/AllPages';
import styles from './Context.module.css' ; 

function CryptoPage() {
  const [endPoint,setEndPoint] = useState({category:null,country:null,query:'crypto'})

  return (
    <div className={styles.container}>
      <AllPages pageName={'Crypto'} endPoint={endPoint}/>
    </div>
  )
}

export default CryptoPage