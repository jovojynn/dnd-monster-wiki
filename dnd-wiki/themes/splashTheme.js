import { createTheme } from "@rneui/themed";

// colour palette for this theme
const themePalette = {
    primary: '#E7E7DB',
    greyDark: '#28282B',
    maroon: '#9E0B0F',
    blue: '#5EA2C1',
    white: '#fff',
    black: '#000'
}

// components > [ComponentType] > [ComponentStyle]
export const splashTheme = createTheme({
    components: {
        Button: (buttonProps) => ({
            buttonStyle: {
               raise: false,
               borderRadius: 10,
               backgroundColor: themePalette.greyDark
            },
            titleStyle: {
                color: themePalette.white
            },
        }),
        Text: {
            h1Style: {
                color: themePalette.black,
                fontFamily: 'Poppins_700Bold',
                fontWeight: '700',
                fontSize: 20
                
            },
            style: {
                color: themePalette.black,
                fontFamily: 'Poppins_400Regular',
                fontSize: 18
            }
        }     
    }
});