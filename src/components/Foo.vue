<template>
    <q-card style="width: 500px;">
        <q-input v-model="text" />
        <q-btn v-clipboard="text">Copy</q-btn>
    </q-card>
</template>

<script>
    import {
        QCard,
        QInput,
        QBtn,
    } from 'quasar';

    export default {
        name: 'foo',

        components: {
            QCard,
            QInput,
            QBtn,
        },

        data() {
            return {
                text: ''
            };
        }
    };
</script>

<style scoped>

</style>
