import styled from 'styled-components'

export const Wraper = styled.div`
  width:100%;
  flex-direction: row;
`

export const ColumnWraper = styled.div`
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
 
 @media only screen and (max-width:384px){
    height: 170px;
 }
`

export const MarginV = styled.div`
 margin:25px 0px;
 width: 100%;
`