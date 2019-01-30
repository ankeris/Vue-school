<template>
    <div class="categories-list__item">
        <h1 class="list-title"><router-link :to="{name: 'PageCategory', params: {id: category['.key']}}">{{category.name}}</router-link></h1>
        <ForumList
            :forums="forums"
        ></ForumList>
    </div>
</template>

<script>
    import ForumList from '@/components/ForumList';
    import sourceData from '@/data.json';

    export default {
        name: 'CategoryListItem',
        components: {
            ForumList,
        },
        props: {
            category: {
                required: true,
                type: Object,
            },
        },
        computed: {
            forums() {
                return Object.values(sourceData.forums).filter(forum => forum.categoryId === this.category['.key']);
            },
        },
    };
</script>

<style scoped>
</style>
