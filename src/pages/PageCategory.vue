<template>
    <div class="forum-page">
        <h1>{{category.name}}</h1>
        <h2>Forums: </h2>
        <ForumListItem v-for="forum in forums" :forum="forum" :key="forum['.key']"></ForumListItem>
    </div>
</template>

<script>
    import sourceData from '@/data.json';
    import ForumListItem from '@/components/ForumListItem';

    export default {
        name: 'PageCategory',
        components: {
            ForumListItem,
        },
        props: {
            id: {
                required: true,
                type: String,
            },
        },
        computed: {
            category() {
                return sourceData.categories[this.id];
            },
            forums() {
                return Object.values(sourceData.forums).filter(forum => forum.categoryId === this.id);
            },
        },
    };
</script>

<style scoped>
    .forum-page {
        width: 100%;
    }
</style>
