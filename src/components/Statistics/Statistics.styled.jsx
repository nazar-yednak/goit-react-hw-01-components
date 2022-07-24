import styled from "@emotion/styled";


export const StatisticsSection = styled.section`
  width: 700px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;

  background-color: rgba(218, 214, 242, 0.501);

  border: 2px;

`

export const Title = styled.h2`
display: flex;
  justify-content: center;
`

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`
export const StatItem = styled.li`
  width: 50%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: content-box;

  border: 1px;
  border-style: inset;

`
export const StatLabel = styled.span`
font-size: 24px;
font-weight: 500;
 `

export const StatPercentage = styled.span`
font-size: 28px;
font-weight: 700;
 `