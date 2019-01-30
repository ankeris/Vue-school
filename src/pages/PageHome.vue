<template>
  <div class="col-full">
      <CategoryList :categories="categories"/>
  </div>
</template>

<script>
  import sourceData from '@/data.json';
  import CategoryList from '@/components/CategoryList';

export default {
      components: {
          CategoryList,
      },
      data() {
          return {
              posts: sourceData.posts,
              users: sourceData.users,
          };
      },
      computed: {
          categories() {
              return Object.values(sourceData.categories);
          },
      },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
