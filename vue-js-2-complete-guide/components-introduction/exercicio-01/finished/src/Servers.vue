<template>
    <div id="servers" class="col-xs-12 col-sm-6">
        <p>Servers.vue</p>
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="index in 5">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped>
/* sem o scoped o css aqui é global */

#servers {
    background-color: red;
}
</style>
