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
                <template v-if="!editing">
                    <div>
                        {{post.text}}
                    </div>
                    <a @click.prevent="editing = true" style="margin-left:auto"
                    class="link-unstyled" title="make a change">
                        <i class="fa fa-pencil"></i>
                    </a>
                </template>
                <div v-else>
                    <PostEditor
                        :post="post"
                        @save="editing = false"
                        @cancel="editing = false"
                    />
                </div>
            </div>
         <div class="post-date text-faded">
            <AppDate :timestamp="post.publishedAt"></AppDate>
         </div>
    </div>
</template>
<script>
    import { countObjectProperties } from '@/helpers/index';
    import PostEditor from './PostEditor';

    export default {
        data() {
            return {
                editing: false,
            };
        },
        components: {
            PostEditor,
        },
        props: {
            post: {
                required: true,
                type: Object,
            },
        },
        computed: {
            user() {
                return this.$store.state.users[this.post.userId];
            },
            userPostsCount() {
                return countObjectProperties(this.user.posts);
            },

        },
    };
</script>
