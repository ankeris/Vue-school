<template>
    <span :title="timestamp | humanFriendlyDate">
        {{timestamp | howLongAgo }}
    </span>
</template>

<script>
    import moment from 'moment';

    export default {
        name: 'AppDate',
        props: {
            timestamp: {
                required: true,
                type: Number,
            },
        },
        filters: {
            humanFriendlyDate(date) {
                return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a');
            },
            howLongAgo(date) {
                return moment.unix(date).fromNow();
            },
        },
    };
</script>

<style scoped>

</style>
