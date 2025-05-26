<script setup lang="ts">
//no logic rn, just here so vue knows its a setup script
</script>

<template>
    <button class="simple-button">
        Click Me
    </button>
</template>

<style scoped>
/*basic styling to make it look like a button*/
.simple-button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
}

.simple-button:hover {
    background-color: #45a049; /* Darker green on hover */
}
.simple-button:active {
    background-color: #3e8e41; /* Even darker green on click */
}
</style>