<template>
    <div class="col-large push-top">
        <h2>{{thread.title}}</h2>
        <p>
            By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt"/>.
            <span style="float:right; margin-top: 2px;" class="hide-mobile text-faded text-small">5 replies by 3 contributors</span>
        </p>
        <PostList :posts="posts"/>
        <PostEditor
        :threadId="id"
        />
    </div>
</template>

<script>
    import PostList from '@/components/PostList';
    import sourceData from '@/data.json';
    import PostEditor from '@/components/PostEditor';

    export default {
        components: {
            PostList,
            PostEditor,
        },
        props: {
            id: {
                required: true,
                type: String,
            },
        },
        computed: {
            thread() {
                return this.$store.state.threads[this.id];
            },
            posts() {
                const postIds = Object.values(this.thread.posts);
                return Object.values(sourceData.posts).filter(post => postIds.includes(post['.key']));
            },
        },
    };
</script>

<style>

</style>
