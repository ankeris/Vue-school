<template>
    <div class="col-large push-top">
        <h2>{{thread.title}}</h2>
        <div class="post-list">
            <div class="post" v-for="postId in thread.posts" v-bind:key="postId">
                <div class="user-info">
                    <a class="user-name" href="#">{{users[posts[postId].userId].name}}</a>
                    <a href="#">
                        <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
                    </a>
                    <p class="desktop-only text-small">aaa</p>
                </div>

                <div class="post-content">
                    <div>
                        {{posts[postId].text}}
                    </div>
                </div>

                <div class="post-date text-faded">
                    {{posts[postId].publishedAt}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import sourceData from '../data.json';

    export default {
        props: {
            id: {
                required: true,
                type: String,
            },
        },
        data() {
            return {
                thread: sourceData.threads[this.id],
                posts: sourceData.posts,
                users: sourceData.users,
            };
        },
    };
</script>

<style>

</style>
