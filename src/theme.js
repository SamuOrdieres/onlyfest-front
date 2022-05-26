import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const defaultTheme = createTheme({
	breakpoints: {
		values: {
		  mobile: 0,
		  tablet: 640,
		  laptop: 1024,
		  desktop: 1200,
		},
	  },
	
});

const theme = createTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
	},
	typography: {
		fontFamily: [
		  '-apple-system',
		  'BlinkMacSystemFont',
		  '"Segoe UI"',
		  'Roboto',
		  '"Helvetica Neue"',
		  'Arial',
		  'sans-serif',
		  '"Apple Color Emoji"',
		  '"Segoe UI Emoji"',
		  '"Segoe UI Symbol"',
		].join(','),
	  },
	components: {
		MuiCard: {
			styleOverrides:{
				root:{
					marginBottom: '2rem',
					[defaultTheme.breakpoints.up('mobile')]: {
						maxWidth: 300
					},
					[defaultTheme.breakpoints.up('tablet')]: {
						maxWidth: 500					  
					},
					[defaultTheme.breakpoints.up('laptop')]: {
						maxWidth: 800					
					},
					[defaultTheme.breakpoints.up('desktop')]: {
						maxWidth: 1200					  
					}
				}
			}
		}
	},
})



export default theme;
