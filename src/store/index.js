import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from '@/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ...sourceData,
        authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3',
    },
    getters: {
        authUser(state) {
            return state.users[state.authId];
        },
    },
    actions: {
        createPost(context, post) {
            // set post
            // append post to thread
            // if user doesn't have posts yet, create an object
            // append post to user
            /* eslint-disable */
            const postId = `greatPost${Math.random()}`;
            post['.key'] = postId;
            context.commit('setPost', { post, postId });
            context.commit('appendPostToThread', { postId, threadId: post.threadId  });
            context.commit('appendPostToUser', { postId, userId: post.userId  });
        },
    },
    mutations: {
        setPost(state, { post, postId }) {
            Vue.set(state.posts, postId, post);
        },
        appendPostToThread(state, { postId, threadId }) {
            Vue.set(state.threads[threadId].posts, postId, postId);
        },
        appendPostToUser(state, { postId, userId }) {
            const user = state.users[userId];

            if (!user.posts) {
                user.posts = {};
            }
            Vue.set(user.posts, postId, postId);
        },
    },
});
