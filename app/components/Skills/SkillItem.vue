<template>
    <div class="skill-item flex-1 p-6 bg-card backdrop-blur-sm">
        <svg class="skill-item__border" aria-hidden="true" focusable="false">
            <defs>
                <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#22c55e" />
                    <stop offset="50%" stop-color="#eab308" />
                    <stop offset="100%" stop-color="#3b82f6" />
                </linearGradient>
            </defs>
            <rect
                class="skill-item__border-rect"
                width="100%"
                height="100%"
                rx="16"
                ry="16"
                fill="none"
                :stroke="`url(#${gradientId})`"
                pathLength="100"
            />
        </svg>
        <h3 class="text-white text-xl my-4 font-bold">{{ title }}</h3>
        <ul class="list-none list-inside mt-2">
            <li class="mb-1" v-for="skill in skills" :key="skill.name">
                <span class="text-primary text-xl mr-3">•</span>{{ skill.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useId } from 'vue';
import type { TSkillItem } from '~/types/skills/TSkillItem';

defineProps<{
    title: string;
    skills: TSkillItem[];
}>();

const gradientId = `skill-border-${useId()}`;
</script>

<style lang="scss" scoped>
.skill-item {
    position: relative;
    border-radius: 1rem;
}

.skill-item__border {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
}

.skill-item__border-rect {
    fill: none;
    stroke-width: 1;
    stroke-dasharray: 35 65;
    animation: skill-item-trace 4s linear infinite;
}

@keyframes skill-item-trace {
    to {
        stroke-dashoffset: -100;
    }
}

@media (prefers-reduced-motion: reduce) {
    .skill-item__border-rect {
        animation: none;
        stroke-dasharray: none;
    }
}
</style>
