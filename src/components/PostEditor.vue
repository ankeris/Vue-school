<template>
    <form action="" @submit.prevent="save">
            <div class="form-group">
                <textarea name="" id="" cols="30" rows="10" class="form-input"
                v-model="text"></textarea>
            </div>
            <div class="form-actions">
                <button v-if="isUpdate" @click.prevent="cancel" class="btn btn-ghost">Cancel</button>
                <button class="btn-blue">{{isUpdate ? 'Update' : 'Submit'}}</button>
            </div>
        </form>
</template>

<script>
export default {
    data() {
        return {
            text: this.post ? this.post.text : '',
        };
    },
    props: {
        threadId: {
            type: String,
            required: false,
        },
        post: {
            type: Object,
            validator: (obj) => {
                const keyIsValid = typeof obj['.key'] === 'string';
                const textIsValid = typeof obj.text === 'string';
                return keyIsValid && textIsValid;
            },
        },
    },
    computed: {
        isUpdate() {
            return !!this.post;
        },
    },
    methods: {
        save() {
            this.persist().then((post) => {
                this.$emit('save', { post });
            });
        },
        cancel() {
            this.$emit('cancel');
        },
        create() {
            const postId = `greatPost${Math.random()}`;
            const post = {
                text: this.text,
                threadId: this.threadId,
            };

            this.text = '';
            return this.$store.dispatch('createPost', post);
        },
        update() {
            const payload = {
                id: this.post['.key'],
                text: this.text,
            };
            return this.$store.dispatch('updatePost', payload);
        },
        persist() {
            return this.isUpdate ? this.update() : this.create();
        },
    },
};
</script>

<style scoped>
    
</style>
