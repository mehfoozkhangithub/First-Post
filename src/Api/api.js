// import axios from 'axios' ; 

// const apiKey = "pub_10553b3f4d4a1515c96566fba7af4c063dee6" ; 

// export function getData({endPoint}){
    
//     return axios.get(`https://newsdata.io/api/1/news?&apikey=${apiKey}&language=en`,{
//         params:{
//             category:endPoint.category,
//             country:endPoint.country
//         }
//     })
// }
import axios from 'axios' ; 

// const apiKey = "31e70d767f2542bebb0d276fc0210730" ; 
// const apiKey = "b5eddb8f032a450d841c215e4cc33d4f" ; 
// const apiKey = "863e4466318e4fdb94d0f95e537bcd85" ; 
const apiKey = "5c467578e399423e84cac438ee94e18e" ; 
// const apiKey = "20691abc5ccf42ab8a256c232b41cc45" ; 
// const apiKey = "b831b295c0d4462880f6889d41ca62d3" ; 
    // `https://newsapi.org/v2/everything?q=bitcoin&apiKey=`
export function getData({endPoint,current}){
    
    return axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}`,{
        params:{
            category:endPoint.category,
            country:endPoint.country,
            pageSize:21,
            q:endPoint.query,
            page:current
        }
    })
}

export function getData2(){
    return axios.get(`https://newsapi.org/v2/top-headlines?perPage=7&sources=bbc-news&apiKey=${apiKey}`,{
        
    })
}

export function getSinglePageData(id){
    return fetch(`https://newsapi.org/v2/everything?q=${id}/&apiKey=${apiKey}`)
    .then(res=>res.json()) 
}
// function getSinglePageData(id){
//     return fetch(`https://newsapi.org/v2/everything?q=${id}/&apiKey=${apiKey}`)
//     .then(res=>res.json()) 
// }
