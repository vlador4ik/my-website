<template>
    <section id="projects" aria-labelledby="projects-title" class="container mx-auto px-4 my-16">
        <h2 id="projects-title" class="section-title">Featured Projects</h2>
        <p class="section-subtitle">
            A selection of recent work showcasing my expertise
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ProjectCard
                v-for="project in projects"
                :key="project.title"
                :title="project.title"
                :description="project.description"
                :technologies="project.technologies"
                :gradient="project.gradient"
                :icon="project.icon"
                :image="project.image"
                class="scroll-reveal-child"
            />
        </div>

        <div class="flex justify-center mt-10">
            <a
                href="#"
                class="inline-flex items-center gap-2 px-6 py-3 bg-card backdrop-blur-sm border border-grey/20 rounded-full text-white hover:border-primary/50 hover:scale-105 transition-all"
            >
                <span>View All Projects</span>
                <ExternalLink :size="16" />
            </a>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ExternalLink } from 'lucide-vue-next';
import ProjectCard from '~/components/Projects/ProjectCard.vue';
import { projects } from '~/data/projects';
</script>
