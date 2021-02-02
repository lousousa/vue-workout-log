<template lang="pug">
    div
        form
            h1.text-center.text-xs.text-gray-400 INSERT AN ITEM
            .flex.flex-wrap.items-end
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs Minutes spent
                    input.border.w-full.rounded.p-1
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs Activity
                    input.border.w-full.rounded.p-1
                .p-1(class='w-1/4')
                    label.text-gray-600.text-xs Date
                    input.border.w-full.rounded.p-1
                .p-1(class='w-1/4')
                    button.text-xs.w-full.bg-turquoise-100.rounded.p-2.border.border-turquoise-200.text-turquoise-500(type='submit') Add
</template>