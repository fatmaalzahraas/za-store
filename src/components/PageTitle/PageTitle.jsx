import React from 'react'
import { PageTitleWrapper } from './PageTitle.style';
const PageTitle = ({children, title}) => {
    document.title = `ZAStore - ${title}`;
  return (
    <PageTitleWrapper>{children}</PageTitleWrapper>
  )
}

export default PageTitle;