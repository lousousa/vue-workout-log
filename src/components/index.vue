<template lang='pug'>
    .max-w-2xl.mx-auto.my-4.border.rounded.bg-white
        .p-4.border-b
            h1.font-bold.text-sm.text-center.text-turquoise-200 Workout Log
        .p-4.border-b
            Form
        .p-2
            List
</template>

<script>
    import Form from './Dashboard/Form'
    import List from './Dashboard/List'
    export default {
        components: { Form, List }
    }
</script>