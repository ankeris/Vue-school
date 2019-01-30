<template>
    <div class="categories-list">
        <CategoryListItem v-for="category in categories" :category="category" :key="category['.key']" ></CategoryListItem>
    </div>
</template>

<script>
    import CategoryListItem from '@/components/CategoryListItem';

    export default {
        name: 'CategoryList',
        components: {
            CategoryListItem,
        },
        props: {
            categories: {
                required: true,
                type: Array,
            },
        },
    };
</script>

<style scoped>
    .categories-list {
        width: 100%;
        border: 1px solid green;
    }
</style>
