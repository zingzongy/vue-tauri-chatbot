<script setup lang="ts">
interface Props {
    text: string; // Define the type of the prop
}
//no logic rn, just here so vue knows its a setup script
const props = defineProps<Props>();
</script>

<template>
    <button class="simple-button">
        {{ props.text }}
    </button>
</template>

<style scoped>
/*basic styling to make it look like a button*/
.simple-button {
    background-color: #898989; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    box-shadow: 5px 5px 15px rgb(18, 18, 18);
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
}

.simple-button:hover {
    background-color: #5c5c5c; /* Darker green on hover */
}
.simple-button:active {
    background-color: #3e3e3e; /* Even darker green on click */
}
</style>