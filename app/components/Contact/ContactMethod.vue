<template>
    <a
        :href="href"
        :target="isExternal ? '_blank' : undefined"
        :rel="isExternal ? 'noopener noreferrer' : undefined"
        class="group flex items-center gap-4 p-4 bg-card backdrop-blur-sm border border-grey/20 rounded-2xl hover:border-primary/50 transition-all duration-300"
    >
        <div class="shrink-0 p-3 rounded-xl bg-primary/10 text-primary">
            <component :is="icon" :size="22" aria-hidden="true" />
        </div>
        <div class="min-w-0 text-left">
            <div class="text-white font-semibold">{{ label }}</div>
            <div class="text-sm text-muted-foreground truncate">{{ value }}</div>
        </div>
    </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { TContactMethodProps } from '~/types/contact/TContactMethodProps';

const props = defineProps<TContactMethodProps>();

const isExternal = computed(() => props.href.startsWith('http'));
</script>
