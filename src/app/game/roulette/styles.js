
export const muiStyles = {
  dark: {
    palette: {
      // generally we want white
      primary: {
        main: '#fff',
        main1: '#8c8fdf',
        main2: '#c59df2',
        main3: '#ef7c71',
        gradient: 'linear-gradient(90deg, #681DDB 0%, #D82633 100%)',
      },
      dark: {
        bg: '#121212',
        card: '#282828',
        button: '#3f3f3f',
        navbar: '#575757',
        modal: '#717171',
        bgText: '#8b8b8b'
      },
      accent: { // purple
        main: '#c59df2',
        dark: '#681ddb',
        light: '#b486ed'
      },
      accent2: { // red
        main: '#ef7c71',
        dark: '#d82633',
        light: '#f9a89e'
      },
      accent3: { // blue
        main: '#8c8fdf',
        dark: '#465CCD',
        light: '#b4b3ea'
      },
      // the actual dark background
      bg: {
        light: '#1a1a1a',
        main: '#131319',
        primary: '#330e6d'
      },
      text: {
        focus: '#fff',
        accent: '#c59df2',
      },
      game: {
        green: '#14D854',
        red: '#d82633'
      },
      mode: 'dark'
    },
    typography: {
      fontFamily: 'Roboto',
      color: '#fff'
    }
  },
}