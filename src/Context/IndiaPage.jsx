import { useState } from 'react';
import AllPages from '../Component/AllPages';
import styles from './Context.module.css' ; 


const IndiaPage = ()=>{
    const [endPoint,setEndPoint] = useState({category:"general",country:'in',query:null})

    return (
        <div className={styles.container}>
            <AllPages pageName={'India'} endPoint={endPoint}/>
        </div>
    )
}
export default IndiaPage ; 
