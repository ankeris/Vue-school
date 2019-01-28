<template>
    <div class="col-large push-top">
        <h2>{{thread.title}}</h2>
        <PostList
        :posts="posts"
        />
    </div>
</template>

<script>
    import PostList from '@/components/PostList';
    import sourceData from '@/data.json';

    export default {
        components: {
            PostList,
        },
        props: {
            id: {
                required: true,
                type: String,
            },
        },
        data() {
            return {
                thread: sourceData.threads[this.id],
            };
        },
        computed: {
            posts() {
                const postIds = Object.values(this.thread.posts);
                return Object.values(sourceData.posts).filter(post => postIds.includes(post['.key']));
            },
        },
    };
</script>

<style>

</style>
