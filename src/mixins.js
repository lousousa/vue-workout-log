import moment from 'moment'
moment.locale('en-us')

export default [{
    methods: {
        moment,
        formatPrice (val) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val)
        }
    }
}]