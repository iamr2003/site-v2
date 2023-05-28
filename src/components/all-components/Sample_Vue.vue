<script lang="ts">
export default {
    data() {
        return {
            val: 0
        }
    }
}
</script>

<template>
    Hi, I'm a vue component:
    <button @click="val--">-</button>
    {{ val }}
    <button @click="val++">+</button>
    My code is:
    <img src="./sample_vue.png" />
</template>
