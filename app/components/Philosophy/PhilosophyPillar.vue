<template>
    <div class="h-full p-5 bg-card/40 backdrop-blur-sm border border-grey/20 rounded-xl">
        <component :is="icon" :size="24" class="text-primary mb-3" aria-hidden="true" />
        <h3 class="text-white font-semibold mb-2">{{ title }}</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">{{ description }}</p>
    </div>
</template>

<script lang="ts" setup>
import type { TPhilosophyPillarProps } from '~/types/philosophy/TPhilosophyPillarProps';

defineProps<TPhilosophyPillarProps>();
</script>
