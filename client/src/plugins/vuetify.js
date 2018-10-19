import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
        primary: colors.pink.base,
        secondary: colors.indigo.darken1,
        accent: colors.pink.base,
        error: colors.red.darken2,
        warning: colors.amber.base,
        info: colors.blue.base,
        success: colors.green.base
    }
})
