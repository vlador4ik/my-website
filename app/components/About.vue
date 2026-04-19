<template>
    <section id="about" aria-labelledby="about-title" class="container mx-auto px-4">
        <h2 id="about-title" class="section-title">About Me</h2>
        <p class="section-subtitle">
            Passionate about creating exceptional digital experiences
        </p>
        <div class="grid grid-cols-2 gap-4">
            <div class="w-48 h-48 rounded-full bg-card border border-grey/20 flex items-center justify-center text-grey text-sm mr-8" aria-hidden="true">
                VH
            </div>
            <div class="my-4">
                <p class="text-lg mb-2">I'm a <span class="text-primary">Senior Front-End Developer</span> with 6 years of experience building modern web applications. I specialize in <span class="text-primary">Vue.js</span> and <span class="text-primary">Nuxt 3/4</span>, with a strong focus on architecture, state management, and code quality.</p>
                <p class="text-lg">My approach combines technical excellence with product thinking. I believe in writing code that's not just functional, but maintainable, scalable, and a joy to work with.</p>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <Card v-for="card in cards" :key="card.title" class="scroll-reveal-child">
                        <component :is="card.icon" class="text-primary" :size="32" />
                        <h3 class="text-4xl font-bold text-white mt-4 mb-1">{{ card.title }}</h3>
                        <p class="text-sm text-muted-foreground/80">
                            {{ card.description }}
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { cards } from '~/data/cards';
</script>
