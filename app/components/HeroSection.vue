<template>
    <div class="relative h-screen flex items-center justify-center">
        <div class="relative z-10 max-w-2xl mx-auto text-center hero-wrapper">
            <div class="space-y-6 md:space-y-8">
                <h1 class="text-5xl text-transparent sm:text-6xl md:text-7xl
                    lg:text-8xl font-bold bg-gradient-to-r from-white via-primary
                    to-secondary bg-clip-text">
                    Vlad Horobets
                </h1>
                <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Senior Front-End Developer</h2>
                <p class="text-lg sm:text-xl md:text-2xl text-muted-foreground mx-auto">
                    Building scalable, high-performance web applications with Vue &amp; Nuxt.
                </p>
                <p class="text-base sm:text-lg text-muted-foreground/80 mx-auto">
                    With 6 years of experience, I craft elegant solutions that prioritize code quality, scalability, and user experience.
                    I take ownership of projects from architecture to deployment, ensuring every line of code serves a purpose.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <button class="group relative px-8 py-4 bg-primary text-white flex gap-2 items-center
                        hover:scale-105 transition-transform
                        rounded-2xl font-semibold overflow-hidden w-full sm:w-auto" tabindex="0">
                        <span class="relative z-10">View Projects</span>
                        <ArrowRight />
                    </button>
                    <button class="px-8 py-4 bg-card border-2 border-grey text-white
                        rounded-2xl font-semibold hover:border-primary/50 transition-colors w-full sm:w-auto" tabindex="0">Contact Me</button>
                </div>
                <div class="flex flex-wrap gap-3 justify-center pt-8">
                    <div v-for="skill in skills" :key="skill" class="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-xl text-sm font-medium text-foreground/80">
                        {{ skill }}
                    </div>
                </div>
                <div class="flex gap-6 justify-center pt-8">
                    <a :href="social.href" aria-label="GitHub" v-for="social in socials" :key="social.href" class="p-2 bg-card/50 backdrop-blur-sm border border-grey rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition" tabindex="0">
                        <component :is="social.component" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-vue-next';

const skills = ['Vue 2/3', 'Nuxt 3', 'TypeScript', 'Pinia', 'Tailwind'];

const socials = [
    {
        component: Github,
        href: 'https://github.com/vlador4ik',
    },
    {
        component: Linkedin,
        href: 'https://www.linkedin.com/in/vlad-horobets/',
    },
    {
        component: Mail,
        href: 'mailto:vlad_horob@ukr.net',
    }
]
</script>

<style scoped lang="scss">
.hero-wrapper {
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
        z-index: -1;
    }
}

</style>