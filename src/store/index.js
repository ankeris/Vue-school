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
        createPost({ commit, state }, post) {
            // set post
            // append post to thread
            // if user doesn't have posts yet, create an object
            // append post to user
            /* eslint-disable */
            const postId = `greatPost${Math.random()}`;
            post.userId = state.authId;
            post['.key'] = postId;
            post.publishedAt = Math.floor(Date.now() / 1000),

            commit('setPost', { post, postId });
            commit('appendPostToThread', { postId, threadId: post.threadId  });
            commit('appendPostToUser', { postId, userId: post.userId  });
            return Promise.resolve(state.posts[postId])
        },
        createThread({state, commit, dispatch}, {text, title, forumId}) {
            return new Promise((res, rej) => {
                const userId = state.authId
                const publishedAt = Math.floor(Date.now() / 1000)
                const threadId = `greatThread${Math.random()}`;

                const thread = {
                    '.key': threadId,
                    title,
                    forumId,
                    publishedAt,
                    userId
                }

                commit('setThread', {threadId, thread})
                commit('appendThreadToUser', {threadId, userId})
                commit('appendThreadToForum', {threadId, forumId})
                dispatch('createPost', {text, threadId}).then(post => {
                    commit('setThread', {threadId, thread: {...thread, firstPostId: post['.key']}})
                })

                res(state.threads[threadId])
            })
        },
        updateThread({state, commit, dispatch}, {title, text, id}) {
            return new Promise((resolve, reject) => {
                const thread = state.threads[id];
                const post = state.posts[thread.firstPostId];
                console.log(title);
                const newThread = {...thread, title}
                const newPost ={...post, text}

                commit('setThread', {thread: newThread, threadId: id});
                commit('setPost', {post: newPost, postId: thread.firstPostId})
                resolve(newThread);
            })
        },
        updateUser({commit}, user) {
            commit('setUser', {userId: user['.key'], user})
        },
     },
    mutations: {
        setPost(state, { post, postId }) {
            Vue.set(state.posts, postId, post);
        },

        setThread(state, {threadId, thread}) {
            Vue.set(state.threads, threadId, thread)
        },

        setUser(state, { user, userId }) {
            Vue.set(state.users, userId, user);
        },

        appendPostToThread(state, { postId, threadId }) {
            const thread = state.threads[threadId]
            if (!thread.posts) {
                Vue.set(thread, 'posts', {})
            }
            Vue.set(thread.posts, postId, postId);
        },
        appendThreadToUser(state, {threadId, userId}) {
            const user = state.users[userId];
            if (!user.threads) {
                Vue.set(user, 'threads', {})
            }
            Vue.set(user.threads, threadId, threadId)
        },
        appendThreadToForum(state, {threadId, forumId}) {
            const forum = state.forums[forumId]
            if (!forum.posts) {
                Vue.set(forum, 'threads', {})
            }
            Vue.set(forum.threads, threadId, threadId);

        },
        appendPostToUser(state, { postId, userId }) {
            const user = state.users[userId];

            if (!user.posts) {
                Vue.set(user, 'posts', {})
            }
            Vue.set(user.posts, postId, postId);
        },
    },
});
