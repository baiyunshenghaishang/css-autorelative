<template>
    <div>
        <li v-for="route in list" :key="route.path">
            <router-link :to="route.path">{{ route.path }}</router-link>
        </li>
    </div>
</template>

<script>
import { routes } from './router'
export default {
    name: 'Main',
    computed: {
        list() {
            return routes
        },
    },
}
</script>
<style lang="scss" scoped>
li {
    height: 30px;
    background: #eee;
    &:nth-child(2n) {
        background: lightgray;
    }
}
</style>
