import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customLight = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#8BC34A',
    'primary-darken-1': '#7CB342',
    'primary-darken-2': '#689F38',
    'primary-darken-3': '#558B2F',
    'primary-darken-4': '#33691E',

    secondary: '#9CCC65',
    'secondary-lighten-2': '#AED581',
    'secondary-lighten-3': '#C5E1A5',
    'secondary-lighten-4': '#DCEDC8',
    'secondary-lighten-5': '#F1F8E9',

    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const customDark = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#121212',
    'surface-bright': '#1E1E1E',
    'surface-light': '#2C2C2C',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#BB86FC',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'customLight',
    themes: {
      customLight,
      customDark,
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
  components,
  directives,
})
