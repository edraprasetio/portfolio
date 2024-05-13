import '@emotion/react'
/**
 * Define a theme type, in other words, the theme interface
 */
declare module '@emotion/react' {
    export interface Theme {
        primaryColor: {
            black: {
                1: string
            }
            blue: {
                1: string
            }
            white: string
        }
    }
}