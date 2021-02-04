<template lang='pug'>
    .max-w-2xl.mx-auto.bg-white(class='md:my-4 md:border md:rounded')
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