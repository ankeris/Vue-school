<template>
    <header class="header" id="header">
    <router-link
        :to="{name: 'Home'}"
        class="logo"
    >
        <img src="../assets/vueschool.svg" alt="">
    </router-link>

    <nav class="navbar">
        <ul>
            <li class="navbar-user">
                <router-link :to="{name: 'PageProfile'}">
                    <img class="avatar-small" :src="user.avatar" alt="">
                    <span>
                        {{user.name}}
                        <img src="../assets/arrow.svg" alt="arrow" class="icon-profile">
                    </span>
                </router-link>
            </li>
        </ul>
    </nav>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex';
    
    export default {
        name: 'TheNavbar',
        computed: {
            ...mapGetters({
                user: 'authUser',
            }),
        },
    };
</script>

<style scoped>

</style>
