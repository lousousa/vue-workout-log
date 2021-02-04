<template lang="pug">
    div
        .p-4(v-if='! logs.length')
            p.text-center.text-xs.text-gray-600 You don't create any log.
        .p-4(v-else)
            .border.rounded
                .w-full.text-center.text-xs.p-2.text-gray-400.border-b
                    h1 LOGS
                .flex.flex-wrap(v-for='log, idx in logs' :key='idx')
                    .text-center.p-2(class='w-1/3')
                        p.text-xs.text-gray-600 {{ log.date }}
                    .text-center.p-2(class='w-1/3')
                        p.text-xs.text-gray-600 {{ log.activity }}
                    .text-center.p-2(class='w-1/3')
                        p.text-xs.text-gray-600 {{ log.minutes }} min
                .w-full.text-center.text-xs.p-2.text-gray-600.border-t
                    p Total spent: <b>{{ logs.map(log => log.minutes).reduce((sum, val) => parseInt(sum) + parseInt(val)) }} min</b>
</template>

<script>
    export default {
        created () {
            this.logs = this.$store.state.logs
        },
        data () {
            return {
                logs: []
            }
        }
    }
</script>