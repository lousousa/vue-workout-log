<template lang="pug">
    div
        form(@submit='handleSubmit')
            h1.text-center.text-xs.text-gray-400 INSERT AN ITEM
            .flex.flex-wrap.items-end
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs Date:
                    input.border.w-full.rounded.p-2.text-xs(v-model='model.date')
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs Activity:
                    select.border.w-full.rounded.p-2.text-xs(v-model='model.activity')
                        option.text-xs(v-for='activity, idx in options.activities' :key='idx' :value='activity.value') {{ activity.label }}
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs Minutes spent:
                    input.border.w-full.rounded.p-2.text-xs(v-model='model.minutes')
                .p-1(class='w-1/4')
                    button.text-xs.w-full.bg-turquoise-100.rounded.p-2.border.border-turquoise-200.text-turquoise-500(type='submit') Add
</template>

<script>
    export default {
        data () {
            return {
                model: {
                    minutes: null,
                    activity: null,
                    date: null
                },
                options: {
                    activities: [
                        { label: 'Run', value: 'run' },
                        { label: 'Swimming', value: 'swimming' },
                        { label: 'Bike', value: 'bike' },
                        { label: 'Surfing', value: 'surfing' },
                        { label: 'Skate', value: 'skate' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (ev) {
                ev.preventDefault()
                this.$store.commit('addToLogs', Object.assign({}, this.model))
            }
        }
    }
</script>