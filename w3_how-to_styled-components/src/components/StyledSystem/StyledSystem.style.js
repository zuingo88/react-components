import styled from "styled-components";
import {
  color,
  layout,
  space,
  fontSize,
  fontWeight,
  typography,
  flexbox,
  shadow,
  border, 
  variant
} from 'styled-system';
import { theme } from "./theme";

export const Box0 = styled.div`
  ${color};
  ${space};
  ${flexbox};
  border: solid 1px #000;
`

export const Black0 = styled(Box0)`
  background-color: #444448;
`

export const Box1 = styled.div`
  ${space};
  ${layout};
  ${color};
  border: solid 1px #8F23FF;
`

export const Text = styled.p`
  ${color};
  ${fontSize}
  ${fontWeight};
  border: solid 1px #8F23FF;
`

export const Container = styled.div`
  ${shadow};
  ${theme};
  ${variant({
    variants: {
      small: {
        m: 'sm',
        width: '60px',
        height: '60px',
        fontSize: 14,
        background: 'crimson',
        border: 'solid 1px black',
        boxShadow: 'small',
        borderRadius: 1,
      },
      normal: {
        m: 'md',
        width: '100px',
        height: '100px',
        fontSize: 'md',
        background: 'crimson',
        border: 'solid 1px black',
        boxShadow: 'default',
        borderRadius: 3,
      },
      large: {
        m: 'lg',
        width: '150px',
        height: '150px',
        fontSize: 35,
        background: 'crimson',
        border: 'solid 1px black',
        boxShadow: 'large',
        borderRadius: 5,
      },
    }
  })}
`

Container.defaultProps = {
  variant: 'normal',
}
