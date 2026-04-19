<template>
    <div class="p-6 bg-card backdrop-blur-sm border border-grey/20 rounded-b-2xl flex-1 border-t-primary border-t-4 hover:border-primary/50 transition-all duration-300 w-auto">
        <h3 class="text-white text-xl my-4 font-bold">{{ title }}</h3>
        <ul class="list-none list-inside mt-2">
            <li class="mb-1" v-for="skill in skills" :key="skill.name">
                <span class="text-primary text-xl mr-3">•</span>{{ skill.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import type { TSkillItem } from '~/types/skills/TSkillItem';
defineProps<{
    title: string;
    skills: TSkillItem[];
}>();
</script>
