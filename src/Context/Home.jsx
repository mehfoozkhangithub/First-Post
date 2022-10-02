import styles from './Context.module.css' ; 
import { getData, getData2 } from '../Api/api';
import { useEffect, useState } from 'react';
import AllPages from '../Component/AllPages';



function Home() {
    const [endPoint,setEndPoint] = useState({category:"general",country:'in'})

    // useEffect(()=>{
    //     getData2()
    //     .then(res=>{
    //         console.log(res)
    //     })
    // })
    
    return(    
        <div className={styles.container}>
            <AllPages pageName={'The Big'} endPoint = {endPoint}/>
        </div>
    )

}
export default Home ; 