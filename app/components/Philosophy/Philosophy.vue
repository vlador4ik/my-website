<template>
    <section id="philosophy" aria-labelledby="philosophy-title" class="container mx-auto px-4 my-24">
        <article class="relative overflow-hidden rounded-3xl border border-grey/20 bg-gradient-to-br from-secondary/15 via-primary/10 to-card px-6 py-12 md:px-16 md:py-16">
            <div class="relative max-w-4xl mx-auto text-center">
                <Pause :size="28" class="mx-auto text-primary fill-primary mb-6" aria-hidden="true" />

                <h2 id="philosophy-title" class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    Readable code is scalable code.
                </h2>

                <p class="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    I believe in writing code that's not just functional, but elegant and maintainable.
                    Every line should serve a purpose, every component should be reusable, and every decision
                    should be documented. This is how we build products that last.
                </p>

                <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none text-left my-10">
                    <li v-for="pillar in philosophyPillars" :key="pillar.title">
                        <PhilosophyPillar
                            :icon="pillar.icon"
                            :title="pillar.title"
                            :description="pillar.description"
                        />
                    </li>
                </ul>

                <p class="text-sm text-muted-foreground/80 max-w-2xl mx-auto">
                    With 6 years of experience and 150+ code reviews, I've learned that great code is about
                    empathy - for your users, your team, and your future self.
                </p>
            </div>
        </article>
    </section>
</template>

<script lang="ts" setup>
import { Pause } from 'lucide-vue-next';
import PhilosophyPillar from '~/components/Philosophy/PhilosophyPillar.vue';
import { philosophyPillars } from '~/data/philosophyPillars';
</script>
