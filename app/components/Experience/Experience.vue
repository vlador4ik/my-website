<template>
    <section id="experience" aria-labelledby="experience-title" class="container mx-auto px-4 my-16">
        <h2 id="experience-title" class="section-title">Experience</h2>
        <p class="section-subtitle">
            Building great products across industries
        </p>

        <div class="relative mt-12">
            <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-grey/30 md:-translate-x-1/2" aria-hidden="true"></div>

            <ol class="space-y-10 list-none">
                <li
                    v-for="(experience, index) in experiences"
                    :key="experience.company"
                    class="relative md:grid md:grid-cols-2 md:gap-12"
                >
                    <span class="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/30 -translate-x-1/2" aria-hidden="true"></span>

                    <ExperienceItem
                        :title="experience.title"
                        :company="experience.company"
                        :duration="experience.duration"
                        :location="experience.location"
                        :description="experience.description"
                        :technologies="experience.technologies"
                        class="scroll-reveal-child ml-12 md:ml-0"
                        :class="index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1'"
                    />
                </li>
            </ol>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { experiences } from '~/data/experiences';
</script>
