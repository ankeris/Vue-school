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
            <div class="post-date text-faded"
            :title="post.publishedAt | humanFriendlyDate"
            >
                {{post.publishedAt | howLongAgo }}
            </div>
    </div>
</template>
<script>
import sourceData from '@/data.json';
import moment from 'moment';

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
