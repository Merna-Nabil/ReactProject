import React from 'react';
import {HomeSec,HomeInfo,H2,Btn,P} from './HomeStyle';

const Home =()=>{
    return(
        <HomeSec>
            <div className="home">
            <HomeInfo>
           <H2>Welcome to LUMIA</H2>
           <P>
           We are team of talanted designers making websites with BootstraP
           </P>
           <Btn>get started</Btn>
        </HomeInfo>
        </div>
        </HomeSec>
    )
}
export default Home;