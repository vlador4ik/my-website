<template>
    <section id="skills" aria-labelledby="skills-title" class="container mx-auto px-4 my-16">
        <h2 id="skills-title" class="section-title">Skills & Expertise</h2>
        <p class="section-subtitle">
            A comprehensive toolkit for building modern web applications
        </p>

        <div class="flex flex-wrap justify-center gap-4 mt-10">
            <SkillItem
                v-for="group in skillGroups"
                :key="group.title"
                :title="group.title"
                :skills="group.skills"
                class="scroll-reveal-child"
            />
        </div>
    </section>
</template>

<script setup lang="ts">
import SkillItem from '~/components/Skills/SkillItem.vue';
import { skillGroups } from '~/data/skillGroups';
</script>
