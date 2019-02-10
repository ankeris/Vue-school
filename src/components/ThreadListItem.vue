<template>
    <div v-if="thread" class="thread">
        <div>
            <p>
                <router-link :to="{name: 'PageThreadShow', params: {id: thread['.key']}}">
                {{thread.title}}
                </router-link>
            </p>
            <p class="text-faded text-xsmall">
                By <a href="#">{{user.name}}</a>. <AppDate :timestamp="thread.publishedAt"></AppDate>
            </p>
        </div>

        <div class="activity">
            <p class="replies-count">
                {{countPosts}}
            </p>
        </div>
    </div>
</template>

<script>

    import App from '../App';

    export default {
        components: {
            App,
        },
        props: {
            thread: {
                required: true,
                type: Object,
            },
        },
        computed: {
            countPosts() {
                return Object.keys(this.thread.posts).length - 1;
            },
            user() {
                return this.$store.state.users[this.thread.userId];
            },
        },
    };
</script>

<style>

</style>
