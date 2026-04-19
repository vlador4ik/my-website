<template>
    <div class="font-custom bg-black text-grey">
        <MainHeader />
        <main>
            <HeroSection />
            <About ref="about" />
            <Skills ref="skills" />
            <Experience ref="experience" />
        </main>
    </div>
</template>

<script setup lang="ts">
type SectionRef = { $el: HTMLElement } | null;

const about = useTemplateRef<SectionRef>('about');
const skills = useTemplateRef<SectionRef>('skills');
const experience = useTemplateRef<SectionRef>('experience');

useScrollReveal(about);
useScrollReveal(skills);
useScrollReveal(experience);

useHead({
    htmlAttrs: { lang: 'en' },
});

useSeoMeta({
    title: 'Vlad Horobets — Senior Front-End Developer',
    description: 'Senior Front-End Developer specializing in Vue.js and Nuxt. Building scalable, high-performance web applications with 6+ years of experience.',
    ogTitle: 'Vlad Horobets — Senior Front-End Developer',
    ogDescription: 'Senior Front-End Developer specializing in Vue.js and Nuxt.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Vlad Horobets — Senior Front-End Developer',
    twitterDescription: 'Senior Front-End Developer specializing in Vue.js and Nuxt.',
});
</script>
