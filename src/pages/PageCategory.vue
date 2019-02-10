<template>
    <div class="forum-page">
        <h1>{{category.name}}</h1>
        <h2>Forums: </h2>
            <CategoryListItem :category="category"></CategoryListItem>
    </div>
</template>

<script>
    import CategoryListItem from '@/components/CategoryListItem';

    export default {
        name: 'PageCategory',
        components: {
            CategoryListItem,
        },
        props: {
            id: {
                required: true,
                type: String,
            },
        },
        computed: {
            category() {
                return this.$store.state.categories[this.id];
            },
        },
    };
</script>

<style scoped>
    .forum-page {
        width: 100%;
    }
</style>
