<template>
    <div class="container mx-auto px-4">

        <h2 class="text-6xl text-white font-bold text-center mb-2">About Me</h2>
        <p class="text-lg text-center">
            Passionate about creating exceptional digital experiences
        </p>
        <div class="grid grid-cols-2 gap-4">
            <img src="#" alt="Vlad Horobets" class="w-48 h-48 rounded-full object-cover mr-8">
            <div class="my-4">
                
                <p class="text-lg mb-2">I'm a <span class="text-primary">Senior Front-End Developer</span> with 6 years of experience building modern web applications. I specialize in <span class="text-primary">Vue.js</span> and <span class="text-primary">Nuxt 3/4</span>, with a strong focus on architecture, state management, and code quality.</p>
                <p class="text-lg">My approach combines technical excellence with product thinking. I believe in writing code that's not just functional, but maintainable, scalable, and a joy to work with.</p>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <Card v-for="card in cards" :key="card.title">
                        <component :is="card.icon" class="text-primary" :size="32"/>
                        <p class="text-4xl font-bold text-white mt-4 mb-1">{{ card.title }}</p>
                        <p class="text-sm text-muted-foreground/80">
                            {{ card.description }}
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { Briefcase, Users, Award, GitBranch } from 'lucide-vue-next';
    import type { TCard } from '~/types/cards/TCard';

    const cards = ref<TCard[]>([
        {
            icon: Briefcase,
            title: '6+',
            description: 'Years Experience',
        },
        {
            icon: GitBranch,
            title: '200+',
            description: 'PR Reviews',
        },
        {
            icon: Award,
            title: 'Expert',
            description: 'Architecture',
        },
        {
            icon: Users,
            title: 'Multiple',
            description: 'Industries',
        },
    ])
</script>