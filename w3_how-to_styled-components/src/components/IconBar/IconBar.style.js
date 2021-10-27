import styled from "styled-components"

export const Vertical = styled.section`
  width: auto;
  height: 400px;
`

export const VrBar = styled.nav`
  width: 100px;
  height: 100%;

  margin-right: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
`

export const VrHome = styled.div`
  width: 100%;
  color: white;
  background-color: #52B875;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  & .navIcon {
    width: 33px;
    height: auto;
  }
`

export const VrItem = styled.div`
  width: 100%;
  color: white;
  background-color: #555;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  & .navIcon {
    width: 33px;
    height: auto;
  }

  &:hover {
    background-color: black;
    transition: all 0.5s;
  }
`

export const Horizontal = styled.section`
  width: 100%;
  height: 100px;
`

export const HrBar = styled.nav`
  width: 100%;
  height: 100px;

  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;

  cursor: pointer;
`

export const HrHome = styled.div`
  width: 100%;
  color: white;
  background-color: #52B875;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  & .navIcon {
    width: 33px;
    height: auto;
  }
`

export const HrItem = styled.div`
  width: 100%;
  color: white;
  background-color: #555;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  & .navIcon {
    width: 33px;
    height: auto;
  }

  &:hover {
    background-color: black;
    transition: all 0.5s;
  }
`