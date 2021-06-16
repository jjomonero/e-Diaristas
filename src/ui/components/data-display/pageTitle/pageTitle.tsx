
import React from 'react'
import { PageTitleContainer, PageTitleStyled } from './pageTitle.style'

interface PageTitleProps {
    title: string,
    subtitle?: string | JSX.Element,
    children?:any,
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled> {props.title} </PageTitleStyled>
            
            {props.subtitle}
        </PageTitleContainer>
    )
}

export default PageTitle