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
    width: 75%;
    background-color: #898989; /* Green */
    border: none;
    color: white;
    padding: 0.75em 1.5em;
    box-shadow: 5px 5px 15px rgb(18, 18, 18);
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    border-radius: 4px;
    white-space: nowrap;
}

.simple-button:hover {
    background-color: #5c5c5c; /* Darker green on hover */
}
.simple-button:active {
    background-color: #3e3e3e; /* Even darker green on click */
}
</style>