<template>
  <div class="col-full">
      <ThreadList
      :threads="threads"
      ></ThreadList>
  </div>
</template>

<script>
  import sourceData from '../data.json';
  import ThreadList from './ThreadList';

export default {
      name: 'HelloWorld',
      components: {
          ThreadList,
      },
      data() {
          return {
              threads: Object.values(sourceData.threads),
              posts: sourceData.posts,
              users: sourceData.users,
          };
      },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
