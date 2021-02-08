<template lang="pug">
    div
        .p-4(v-if='! list.length')
            p.text-center.text-xs.text-gray-600 You have no log.
        .p-4(v-else)
            .border.rounded
                .w-full.text-center.text-xs.p-2.text-gray-400.border-b
                    h1 LOGS
                .flex.flex-wrap.items-center.bg-gray-100.border-b
                    .flex.items-center.justify-center.text-center.p-1.text-gray-600.font-bold.cursor-pointer(class='w-1/4' @click="sort('date')")
                        .text-xs Date
                        .ml-2.text-md
                            i.jam(:class="{ 'jam-chevron-square-down': sortBy.date === -1, 'jam-chevron-square-up': sortBy.date === 1 }")
                    .flex.items-center.justify-center.text-center.p-1.text-gray-600.font-bold.cursor-pointer(class='w-1/4' @click="sort('activity')")
                        .text-xs Activity
                        .ml-2.text-md
                            i.jam(:class="{ 'jam-chevron-square-down': sortBy.activity === -1, 'jam-chevron-square-up': sortBy.activity === 1 }")
                    .flex.items-center.justify-center.text-center.p-1.text-gray-600.font-bold.cursor-pointer(class='w-1/4' @click="sort('minutes')")
                        .text-xs Time
                        .ml-2.text-md
                            i.jam(:class="{ 'jam-chevron-square-down': sortBy.minutes === -1, 'jam-chevron-square-up': sortBy.minutes === 1 }")
                    div(class='w-1/4')
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
                    a.flex.items-center.justify-center.w-5.h-5.mx-1.text-md.text-green-600.font-bold(v-if='pagination.currentPage > 1'
                        href='javascript:;'
                        @click='pagination.currentPage--')
                        i.jam.jam-chevron-left
                    a.flex.items-center.justify-center.rounded-full.w-5.h-5.mx-1.text-xs.font-bold(v-for='page, idx in getPagesArray()'
                        :key='idx'
                        href='javascript:;'
                        @click='pagination.currentPage = page'
                        :class="{ 'bg-turquoise-200 text-white': pagination.currentPage === page, 'text-green-600': pagination.currentPage != page }") {{ page }}
                    a.flex.items-center.justify-center.w-5.h-5.mx-1.text-md.text-green-600.font-bold(v-if='pagination.currentPage < getPagesArray().length'
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
                    perPage: 6
                },
                sortBy: {
                    date: 1,
                    activity: 0,
                    minutes: 0
                }
            }
        },
        methods: {
            removeItem (idx) {
                this.$store.commit('removeFromLogs', idx)
            },
            getPaginatedList () {
                let start = (this.pagination.currentPage - 1) * this.pagination.perPage
                let sorted = Object.assign([], this.list)

                Object.keys(this.sortBy).forEach(key => {
                    if (this.sortBy[key] === 1) {
                        sorted.sort((a, b) => {
                            return a[key] >= b[key] ? 1 : -1
                        })
                    } else if (this.sortBy[key] === -1) {
                        sorted.sort((a, b) => {
                            return a[key] <= b[key] ? 1 : -1
                        })
                    }
                })

                return sorted.slice(start, start + this.pagination.perPage)
            },
            getPagesArray () {
                let pages = []
                for (let i = 1; i <= Math.ceil(this.list.length / this.pagination.perPage); i++) pages.push(i)
                return pages
            },
            sort(key) {
                Object.keys(this.sortBy).forEach(k => {
                    if (k !== key) this.sortBy[k] = 0
                })
                if (! this.sortBy[key]) this.sortBy[key] = 1
                else this.sortBy[key] *= -1
            }
        }
    }
</script>