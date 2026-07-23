<template>
    <article class="flex flex-col bg-card backdrop-blur-sm border border-grey/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
        <div :class="['relative h-48 bg-gradient-to-br', gradient]">
            <img
                v-if="image"
                :src="image"
                :alt="`${title} preview`"
                class="absolute inset-0 w-full h-full object-cover"
            />
            <component v-else :is="icon" :size="56" class="absolute inset-0 m-auto text-white/40" aria-hidden="true" />
        </div>
        <div class="p-6 flex flex-col gap-4 flex-1">
            <h3 class="text-white text-xl font-bold">{{ title }}</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">{{ description }}</p>
            <ul class="flex flex-wrap gap-2 mt-auto list-none pt-2">
                <li
                    v-for="tech in technologies"
                    :key="tech"
                    class="px-3 py-1 bg-card/50 border border-border rounded-full text-xs font-medium text-foreground/80"
                >
                    {{ tech }}
                </li>
            </ul>
        </div>
    </article>
</template>

<script lang="ts" setup>
import type { TProjectProps } from '~/types/projects/TProjectProps';

defineProps<TProjectProps>();
</script>
