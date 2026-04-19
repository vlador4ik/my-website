<template>
    <section aria-labelledby="hero-title" class="relative h-screen flex items-center justify-center">
        <div class="relative z-10 max-w-2xl mx-auto text-center hero-wrapper">
            <div class="space-y-6 md:space-y-8">
                <h1 id="hero-title" class="text-5xl text-transparent sm:text-6xl md:text-7xl
                    lg:text-8xl font-bold bg-gradient-to-r from-white via-primary
                    to-secondary bg-clip-text">
                    Vlad Horobets
                </h1>
                <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">Senior Front-End Developer</p>
                <p class="text-lg sm:text-xl md:text-2xl text-muted-foreground mx-auto">
                    Building scalable, high-performance web applications with Vue &amp; Nuxt.
                </p>
                <p class="text-base sm:text-lg text-muted-foreground/80 mx-auto">
                    With 6 years of experience, I craft elegant solutions that prioritize code quality, scalability, and user experience.
                    I take ownership of projects from architecture to deployment, ensuring every line of code serves a purpose.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <button type="button" class="group relative px-8 py-4 bg-primary text-white flex gap-2 items-center
                        hover:scale-105 transition-transform
                        rounded-2xl font-semibold overflow-hidden w-full sm:w-auto">
                        <span class="relative z-10">View Projects</span>
                        <ArrowRight />
                    </button>
                    <button type="button" class="px-8 py-4 bg-card border-2 border-grey text-white
                        rounded-2xl font-semibold hover:border-primary/50 transition-colors w-full sm:w-auto">
                        Contact Me
                    </button>
                </div>
                <ul class="flex flex-wrap gap-3 justify-center pt-8 list-none">
                    <li v-for="skill in heroSkills" :key="skill" class="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium text-foreground/80">
                        {{ skill }}
                    </li>
                </ul>
                <ul class="flex gap-6 justify-center pt-8 list-none">
                    <li v-for="social in socials" :key="social.url">
                        <a
                            :href="social.url"
                            :aria-label="social.label"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="p-2 bg-card/50 backdrop-blur-sm border border-grey rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition inline-flex"
                        >
                            <component :is="social.component" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import { heroSkills } from '~/data/heroSkills';
import { socials } from '~/data/socials';
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
