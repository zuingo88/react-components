import styled from "styled-components"

export const MyTable = styled.table`
  width: 100%;

  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ddd;

  & th, td {
  text-align: center;
  padding: 16px;
}

  & th:first-child,
  td:first-child {
    text-align: left;
  }

  & tr:nth-child(odd) {
  background-color: #f2f2f2;

  & .icons {
    width: 20px;
    height: auto;
  }
}
`

export const MyThead = styled.thead`
  & * {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
  }
`

export const MyTbody = styled.tbody`
  & * {
    font-size: 20px;
    font-weight: normal;
    text-transform: capitalize;
  }

  /* & th {
    display: flex;
    justify-content: center;
    align-items: center;
  } */
`