<template>
    <div class="forum-listing">
        <div class="forum-details">
            <router-link :to="{name: 'PageForum', params: {id: forum['.key']}}" class="text-xlarge">{{forum.name}}</router-link>
            <p>{{forum.description}}</p>
        </div>
        <div class="threads-count">
            <p class="count">{{threadsCount}}</p> {{threadsCount === 1 ? 'thread' : 'threads'}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ForumListItem',
        props: {
            forum: {
                required: true,
                type: Object,
            },
        },
        computed: {
            threadsCount() {
                return this.forum.threads ? Object.values(this.forum.threads).length : 0;
            },
        },
    };
</script>

<style scoped>

</style>
