<template>
     <div class="post">
            <div class="user-info">
                <a class="user-name" href="#">{{user.name}}</a>
                <a href="#">
                    <img class="avatar-large" :src="user.avatar" alt="">
                </a>
                <p class="desktop-only text-small">{{userPostsCount}}</p>
            </div>
            <div class="post-content">
                <div>
                    {{post.text}}
                </div>
            </div>
         <div class="post-date text-faded">
            <AppDate :timestamp="post.publishedAt"></AppDate>
         </div>
    </div>
</template>
<script>
import sourceData from '@/data.json';

export default {
    props: {
        post: {
            required: true,
            type: Object,
        },
    },
    computed: {
        user() {
            return sourceData.users[this.post.userId];
        },
        userPostsCount() {
            if (this.user.posts) {
                return Object.keys(this.user.posts).length;
            }
            return 0;
        },

    },
};
</script>
