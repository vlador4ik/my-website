<template>
    <Card class="relative">
        <div class="flex items-start justify-between gap-4">
            <div class="min-w-0">
                <h3 class="text-2xl font-bold text-white break-words">{{ company }}</h3>
                <p class="text-lg text-primary">{{ title }}</p>
            </div>
            <div class="shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase :size="20" />
            </div>
        </div>

        <div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-grey">
            <span class="inline-flex items-center gap-1">
                <Calendar :size="14" />
                {{ duration }}
            </span>
            <span class="inline-flex items-center gap-1">
                <MapPin :size="14" />
                {{ location }}
            </span>
        </div>

        <ul class="mt-4 space-y-2">
            <li v-for="(item, index) in description" :key="index" class="flex gap-2 text-grey text-sm">
                <span class="text-primary text-xl leading-none" aria-hidden="true">•</span>
                <span>{{ item }}</span>
            </li>
        </ul>

        <ul
            v-if="technologies && technologies.length"
            class="list-none mt-5 flex flex-wrap gap-2"
        >
            <li
                v-for="tech in technologies"
                :key="tech"
                class="text-white text-xs bg-primary/20 border-primary/60 border px-3 py-1 rounded-full"
            >
                {{ tech }}
            </li>
        </ul>
    </Card>
</template>

<script lang="ts" setup>
import { Briefcase, Calendar, MapPin } from 'lucide-vue-next';
import type { TExperienceProps } from '~/types/experience/TExperienceProps';

defineProps<TExperienceProps>();
</script>
