<template>
  <div class="col-full">
      <CategoryList
          v-for="category in categories"
          :category="category"
          :key="category['.key']"
      />
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
              categories: Object.values(sourceData.categories),
              posts: sourceData.posts,
              users: sourceData.users,
          };
      },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
