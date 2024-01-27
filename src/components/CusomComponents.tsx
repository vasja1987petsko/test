import styled from 'styled-components'

export const TimeBlock = styled.div`
    position: absolute;
    top: 0px;
    width: 100px;
    left: -150px;
    height: 100%;
`

export const IconWrapper = styled.div`
    position:relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border: solid 1px #000;
    border-radius: 50%;
    background: #fff;
`
export const VerticalLine = styled.div`
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 0;
    right: 25px;
    border-left: 1px solid #000;
`

