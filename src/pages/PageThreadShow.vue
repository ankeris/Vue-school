<template>
    <div class="col-large push-top">
        <h2>{{thread.title}}</h2>
        <PostList :posts="posts"/>
        <PostEditor
        :threadId="id"
        @save="addPost"
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
        methods: {
            addPost(data) {
                const post = data.post;
                const postId = post['.key'];
                this.$set(sourceData.posts, postId, post);
                this.$set(this.thread.posts, postId, postId);
            // if user doesn't have posts yet, create an object
                if (!sourceData.users[post.userId].posts) {
                    sourceData.users[post.userId].posts = {};
                }
                this.$set(sourceData.users[post.userId].posts, postId, postId);
            },
        },
    };
</script>

<style>

</style>
