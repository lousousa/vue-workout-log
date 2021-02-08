<template lang="pug">
    div
        .p-4(v-if='! list.length')
            p.text-center.text-xs.text-gray-600 You have no log.
        .p-4(v-else)
            .border.rounded
                .w-full.text-center.text-xs.p-2.text-gray-400.border-b
                    h1 LOGS
                .flex.flex-wrap.items-center.bg-gray-100.border-b
                    .text-center.p-2(class='w-1/4')
                        p.text-xs.text-gray-600.font-bold Date
                    .text-center.p-2(class='w-1/4')
                        p.text-xs.text-gray-600.font-bold Activity
                    .text-center.p-2(class='w-1/4')
                        p.text-xs.text-gray-600.font-bold Time
                    .text-center.p-2(class='w-1/4')
                .flex.flex-wrap.items-center(v-for='log, idx in getPaginatedList()' :key='idx')
                    .text-center.p-2(class='w-1/4')
                        p.text-xs.text-gray-600 {{ log.date }}
                    .text-center.p-2(class='w-1/4')
                        p.text-xs.text-gray-600 {{ log.activity }}
                    .text-center.p-2(class='w-1/4')
                        p.text-xs.text-gray-600 {{ log.minutes }} min
                    .text-center.p-2(class='w-1/4')
                        a(href='javascript:;' @click='removeItem(idx)')
                            i.jam.jam-trash.text-gray-600
                .flex.justify-center.items-center.bg-gray-100.border-t.p-2
                    a.flex.items-center.justify-center.w-5.h-5.mx-2.text-md.text-green-600.font-bold(v-if='pagination.currentPage > 1'
                        href='javascript:;'
                        @click='pagination.currentPage--')
                        i.jam.jam-chevron-left
                    a.flex.items-center.justify-center.rounded-full.w-5.h-5.mx-2.text-xs.font-bold(v-for='page, idx in getPagesArray()'
                        :key='idx'
                        href='javascript:;'
                        @click='pagination.currentPage = page'
                        :class="{ 'bg-turquoise-200 text-white': pagination.currentPage === page, 'text-green-600': pagination.currentPage != page }") {{ page }}
                    a.flex.items-center.justify-center.w-5.h-5.mx-2.text-md.text-green-600.font-bold(v-if='pagination.currentPage < getPagesArray().length'
                        href='javascript:;'
                        @click='pagination.currentPage++')
                        i.jam.jam-chevron-right
                .w-full.text-center.text-xs.p-2.text-gray-600.border-t
                    p Total spent: <b>{{ list.map(log => log.minutes).reduce((sum, val) => sum + val) }} min</b>
</template>

<script>
    export default {
        created () {
            this.list = this.$store.state.logs
        },
        data () {
            return {
                list: [],
                pagination: {
                    currentPage: 1,
                    perPage: 2
                }
            }
        },
        methods: {
            removeItem (idx) {
                this.$store.commit('removeFromLogs', idx)
            },
            getPaginatedList () {
                let start = (this.pagination.currentPage - 1) * this.pagination.perPage
                return this.list.slice(start, start + this.pagination.perPage)
            },
            getPagesArray () {
                let pages = []
                for (let i = 1; i <= Math.ceil(this.list.length / this.pagination.perPage); i++) pages.push(i)
                return pages
            }
        }
    }
</script>