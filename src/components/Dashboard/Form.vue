<template lang="pug">
    div
        form(@submit='handleSubmit')
            h1.text-center.text-xs.text-gray-400 INSERT AN ITEM
            .flex.flex-wrap.items-end
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs Date:
                    DatePicker(v-model='model.date')
                        template(v-slot="{ inputValue, inputEvents }")
                            input.w-full.p-2.border.rounded.text-xs(class='focus:outline-none focus:border-blue-300' :value='inputValue' v-on='inputEvents')
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs Activity:
                    select.border.w-full.rounded.p-2.text-xs(v-model='model.activity' class='focus:outline-none focus:border-blue-300')
                        option.text-xs(v-for='activity, idx in options.activities' :key='idx' :value='activity.value') {{ activity.label }}
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs Minutes spent:
                    masked-input.border.w-full.rounded.p-2.text-xs(class='focus:outline-none focus:border-blue-300' :mask='inputMask.minutes' :guide='false' v-model='model.minutes')
                .p-1(class='w-1/4')
                    button.text-xs.w-full.bg-turquoise-100.rounded.p-2.border.border-turquoise-200.text-turquoise-500(class='focus:outline-none' type='submit') Add
</template>

<script>
    import DatePicker from 'v-calendar/lib/components/date-picker.umd'
    export default {
        components: { DatePicker },
        data () {
            return {
                model: {
                    minutes: null,
                    activity: null,
                    date: null
                },
                inputMask: {
                    minutes: [/\d/, /\d/, /\d/]
                },
                options: {
                    activities: [
                        { label: 'Run', value: 'Run' },
                        { label: 'Swimming', value: 'Swimming' },
                        { label: 'Bike', value: 'Bike' },
                        { label: 'Surfing', value: 'Surfing' },
                        { label: 'Skate', value: 'Skate' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (ev) {
                ev.preventDefault()
                let entry = Object.assign({}, this.model)
                entry.date = this.$root.moment(entry.date).format('DD/MM/YYYY')
                entry.minutes = parseInt(entry.minutes)
                console.log(entry)
                // this.$store.commit('addToLogs', entry)
            }
        }
    }
</script>