import styled, { createGlobalStyle } from 'styled-components'
import Image from 'next/image'

const GlobalStyles = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    overflow: hidden;
  }
`

const Landing = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  background-color: #201d1e;

`

function Home() {

  return (
    <>
      <GlobalStyles />
      <Landing >
        <Image
          src="/media/logo.png"
          alt="Calle Acessórios"
          width={420}
          height={370}
        />
      </Landing>
    </>
  )
}

export default Home
