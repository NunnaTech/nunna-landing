<template>
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        v-bind="propsIcon"
        :class="classValues" 
        :style="stylesValues"
        v-html="content"
    >
    </svg>
</template>

<script>
    import {defineComponent} from 'vue'
    import { IconData } from '../../data-components/IconData.js';
    import { MixinIcon } from '../../mixins/MixinIcon.js';

    export default defineComponent({
        name: "Icon",
        data() {
            return IconData;
        },
        mixins: [MixinIcon]
    })
</script>