import { createTheme } from "@rneui/themed";

// colour palette for this theme
const themePalette = {
    primary: '#28282B',
    primaryLight: '#E7E7DB',
    maroon: '#9E0B0F',
    blue: '#5EA2C1',
    white: '#ffffff',
    black: '#000000'
}

// components > [ComponentType] > [ComponentStyle]
export const monstersTheme = createTheme({
    components: {
        Button: (buttonProps) => ({
            buttonStyle: {
               raise: false,
               borderRadius: 10
            },
            titleStyle: {
                color: themePalette.white
            },
        }),
        Text: {
            h1Style: {
                color: '#F7F2D6',
                fontFamily: 'Poppins_900Black',
                fontSize: 26
                
            },
            h2Style: {
                color: themePalette.white,
                fontFamily: 'RobotoCondensed_700Bold',
                fontSize: 24
            },

            h3Style: {
                color: themePalette.black,
                fontFamily: 'RobotoCondensed_700Bold',
                fontSize: 20
            },
            style: {
                color: themePalette.black,
                fontFamily: 'Poppins_400Regular',
                fontSize: 18
            }
        },
        Card: {
            containerStyle: {
                backgroundColor: themePalette.primary
            },
            wrapperStyle: {
                width: 300,
                height: 350
            }
        }
    }
});