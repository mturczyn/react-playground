import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
    components: {
        MuiButton:{
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    backgroundColor: 'green',
                    '&:hover':{
                        backgroundColor: 'transparent'
                    }
                }
            }
        }
    }
})