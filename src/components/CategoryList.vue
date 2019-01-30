<template>
    <div class="categories-list">
    <h1 style="color: blue; background-color: black">{{category.name}}</h1>
    <ForumList
        :forums="forums"
    ></ForumList>
    </div>
</template>

<script>
    import ForumList from '@/components/ForumList';

    export default {
        name: 'CategoryList',
        components: {
            ForumList,
        },
        props: {
            category: {
                required: true,
                type: Object,
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
