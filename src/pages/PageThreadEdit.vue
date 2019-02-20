<template>
    <div class="col-full push-top">
        <h1>Editing <i>{{thread.name}}</i></h1>

        <ThreadEditor
            :title="thread.title"
            :text="text"
            @save="save"
            @cancel="cancel"
        />

    </div>
</template>

<script>
    import ThreadEditor from '@/components/ThreadEditor';

    export default {
        components: {
            ThreadEditor,
        },
        name: 'PageThreadEdit',
        props: {
            id: {
                type: String,
                required: true,
            },
        },
        methods: {
            save({ title, text }) {
                this.$store.dispatch('updateThread', {
                    id: this.id,
                    title,
                    text,
                }).then((thread) => {
                    this.$router.push({ name: 'PageThreadShow', params: { id: thread['.key'] } });
                });
            },
            cancel() {
                this.$router.push({ name: 'PageThreadShow', params: { id: this.id } });
            },
        },
        computed: {
            thread() { return this.$store.state.threads[this.id]; },
            text() { return this.$store.state.posts[this.thread.firstPostId].text; },
        },
    };
</script>

<style scoped>

</style>
