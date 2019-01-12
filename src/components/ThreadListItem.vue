<template>
    <div v-if="thread" class="thread">
        <div>
            <p>
            <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']}}">
                {{thread.title}}
                </router-link>
            </p>
            <p class="text-faded text-xsmall">
                By <a href="#">{{user.name}}, {{thread.publishedAt}}</a>.
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
    import sourceData from '../data.json';

    export default {
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
                return sourceData.users[this.thread.userId];
            },
        },
    };
</script>

<style>

</style>
