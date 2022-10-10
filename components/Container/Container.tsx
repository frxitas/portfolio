import React, { FC } from 'react'

import * as Styles from './Container.styles'

interface ChildrenProps {
  children: JSX.Element ;
}

const Container: FC<ChildrenProps> = ({children}) => {
  return (
    <Styles.Container>{children}</Styles.Container>
  )
}

export default Container