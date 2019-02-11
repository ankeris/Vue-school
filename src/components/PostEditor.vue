<template>
    <form action="" @submit.prevent="save">
            <div class="form-group">
                <textarea name="" id="" cols="30" rows="10" class="form-input"
                v-model="text"></textarea>
            </div>
            <div class="form-actions">
                <button class="btn-blue">Submit</button>
            </div>
        </form>
</template>

<script>
export default {
    data() {
        return {
            text: '',
        };
    },
    props: {
        threadId: {
            type: String,
            required: true,
        },
    },
    methods: {
        save() {
            const postId = `greatPost${Math.random()}`;
            const post = {
                text: this.text,
                threadId: this.threadId,
            };

            this.text = '';
            this.$store.dispatch('createPost', post);
            this.$emit('save', { post });
        },
    },
};
</script>

<style scoped>
    
</style>
