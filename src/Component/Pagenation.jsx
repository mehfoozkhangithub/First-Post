import { Pagination } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {yellow} from '@ant-design/colors'
import { Box } from '@chakra-ui/react';
// const onShowSizeChange = (current, pageSize) => {
//   console.log(current, pageSize);
// };

const Paginations = ({pageData,currentPage,changingPage}) => {
    // console.log(currentPage)
    // console.log(pageData)
    // console.log(current)
    return (
        <Box  mt={110} >
            <Pagination onChange={changingPage}  defaultCurrent={currentPage} total={pageData} pageSize={20}/>

        </Box>
    )
}
  
  
  
    
        

export default Paginations;

// import { Pagination } from 'antd';
// import React, { useState } from 'react';

// const App = ({currentPage,pageData,handlePage}) => {
//   const [current, setCurrent] = useState(3);

//   const onChange = (page) => {
//     console.log(page);
//     setCurrent(page);
//   };

//   return <Pagination current={current} onChange={onChange} total={50} />;
// };

// export default App;