import styled from 'styled-components'

export const HomeSec =styled.div`
position: relative;
min-height: 500px;
background-image: url('images/hero-bg.jpg');
background-size: cover;
background-position: center;
`
export const HomeInfo =styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
`
export const H2=styled.h2`
font-weight: bolder;
color:#fff;
`
export const P=styled.p`
color: #ccc;
font-weight: bold;
`
export const Btn =styled.button`
font-weight: 400;
font-size: 13px;
letter-spacing: 2px;
display: inline-block;
padding: 12px 28px;
border-radius: 4px;
transition: ease-in-out 0.3s;
color: #fff;
background: #3498db;
text-transform: uppercase;
`
