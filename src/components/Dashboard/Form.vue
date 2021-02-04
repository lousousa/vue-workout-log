<template lang="pug">
    div
        form(@submit.prevent='handleSubmit')
            h1.text-center.text-xs.text-gray-400 INSERT AN ITEM
            .flex.flex-wrap.items-end
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs(:class="{ 'text-red-400 ': submitted && $v.model.date.$error }") Date:
                    DatePicker(v-model='$v.model.date.$model' locale='en')
                        template(v-slot="{ inputValue, inputEvents }")
                            input.w-full.p-2.border.rounded.text-xs(
                                class='focus:outline-none focus:border-blue-300'
                                :class="{ 'border-red-300 ': submitted && $v.model.date.$error }"
                                :value='inputValue'
                                v-on='inputEvents')
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs(:class="{ 'text-red-400 ': submitted && $v.model.activity.$error }") Activity:
                    select.border.w-full.rounded.p-2.text-xs.cursor-pointer(
                        v-model='$v.model.activity.$model'
                        class='focus:outline-none focus:border-blue-300'
                        :class="{ 'border-red-300 ': submitted && $v.model.activity.$error }")
                        option.text-xs(v-for='activity, idx in options.activities' :key='idx' :value='activity.value') {{ activity.label }}
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs(:class="{ 'text-red-400 ': submitted && $v.model.minutes.$error }") Minutes spent:
                    masked-input.border.w-full.rounded.p-2.text-xs(
                        v-model='$v.model.minutes.$model'
                        class='focus:outline-none focus:border-blue-300'
                        :mask='inputMask.minutes'
                        :class="{ 'border-red-300 ': submitted && $v.model.minutes.$error }"
                        :guide='false')
                .p-1(class='w-1/4')
                    button.text-xs.w-full.bg-turquoise-100.rounded.p-2.border.border-turquoise-200.text-turquoise-500(class='focus:outline-none' type='submit') Add
</template>

<script>
    import DatePicker from 'v-calendar/lib/components/date-picker.umd'
    import { required, minValue } from 'vuelidate/lib/validators'
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
                },
                submitted: false
            }
        },
        validations () {
            let v = {
                model: {
                    minutes: { required, minValue: minValue(1) },
                    activity: { required },
                    date: { required, dateValid: val => this.$root.moment(val).isValid() }
                }
            }
            return v
        },
        methods: {
            handleSubmit () {
                
                this.submitted = true
                this.$v.$touch(); if (this.$v.$invalid) return 0

                let entry = Object.assign({}, this.model)
                entry.date = this.$root.moment(entry.date).format('MM/DD/YYYY')
                entry.minutes = parseInt(entry.minutes)
                console.log(entry)
                // this.$store.commit('addToLogs', entry)
            }
        }
    }
</script>