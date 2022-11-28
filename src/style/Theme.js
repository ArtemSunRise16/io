import { extendTheme } from "@chakra-ui/react"

export const Theme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          height: '100vh',
          width: '100%',
          lineHeight: '1',
          fontSize: '20px',
          fontFamily: 'Nunito',
          bg: '#EA5959',
          display: 'flex',
          justifyContent: 'center',
        },
        button: {
          color: 'black',
          bg: 'none',
        },
      },
    },
  })

  // _hover: {
    // color: '#EA5959'
  // },

  