import * as React from "react"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    box-sizing: border-box;
    font-family: sans-serif;
  }

  *, :after, :before {
    box-sizing: inherit;
  }
`

const PageContent = styled.div`
  max-width: 100vw;
  max-height: 100vh;
`

export const Page = ({ children }) => (
  <PageContent>
    {children}
    <GlobalStyle />
  </PageContent>
)
