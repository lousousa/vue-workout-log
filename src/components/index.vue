<template lang='pug'>
    .max-w-2xl.mx-auto.my-4.border.rounded.bg-white
        .p-4.border-b
            h1.font-bold.text-sm.text-gray-600.text-center Workout Log
        .p-4
            Form
</template>

<script>
    import Form from './Dashboard/Form'
    export default {
        components: { Form }
    }
</script>