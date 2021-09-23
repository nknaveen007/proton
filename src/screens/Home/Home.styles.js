import styled from 'styled-components'
import bgImage from '../../images/imgs.jpg'




export const Wraper = styled.div`
  background:url(${bgImage}) no-repeat;
  height: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding:20px 20px;
  background-clip: border-box;
  min-height: 95vh;
  
`
export const Header = styled.div`
  width:100%;
  height:50px;
  background-color: #626ade;

`

