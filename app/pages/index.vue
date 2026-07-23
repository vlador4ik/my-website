<template>
    <div class="font-custom bg-black text-grey">
        <MainHeader />
        <main>
            <HeroSection />
            <About ref="about" />
            <Skills ref="skills" />
            <Experience ref="experience" />
            <Projects ref="projects" />
            <Philosophy ref="philosophy" />
            <Contact ref="contact" />
        </main>
        <MainFooter />
    </div>
</template>

<script setup lang="ts">
type SectionRef = { $el: HTMLElement } | null;

const about = useTemplateRef<SectionRef>('about');
const skills = useTemplateRef<SectionRef>('skills');
const experience = useTemplateRef<SectionRef>('experience');
const projects = useTemplateRef<SectionRef>('projects');
const philosophy = useTemplateRef<SectionRef>('philosophy');
const contact = useTemplateRef<SectionRef>('contact');

useScrollReveal(about);
useScrollReveal(skills);
useScrollReveal(experience);
useScrollReveal(projects);
useScrollReveal(philosophy);
useScrollReveal(contact);

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
