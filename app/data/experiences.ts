import type { TExperienceProps } from '~/types/experience/TExperienceProps';

export const experiences: TExperienceProps[] = [
    {
        title: 'Senior Front-End Developer',
        company: 'NuxGame',
        duration: '2024 – 2026',
        location: 'Remote',
        description: [
            'Led architecture decisions for large-scale Vue 3 applications',
            'Conducted 150+ code reviews, improving team code quality by 40%',
            'Implemented state management patterns with Pinia',
            'Mentored junior developers on best practices',
        ],
        technologies: ['Vue 3', 'Nuxt 3', 'TypeScript', 'Pinia'],
    },
    {
        title: 'Front-End Developer',
        company: 'Atlasiko',
        duration: '2020 – 2024',
        location: 'Remote',
        description: [
            'Built and shipped 10+ production features for e-commerce platform',
            'Optimized application performance, reducing load time by 60%',
            'Collaborated with design team to implement pixel-perfect UIs',
            'Established testing standards and increased test coverage to 85%',
        ],
        technologies: ['Vue 2/3', 'Vuetify', 'SCSS', 'REST API'],
    },
    {
        title: 'Junior Front-End Developer',
        company: 'Dott.pro',
        duration: '2019',
        location: 'On-site',
        description: [
            'Developed responsive web interfaces for healthcare platform',
            'Integrated third-party APIs and payment gateways',
            'Participated in agile development process',
            'Learned modern web development best practices',
        ],
        technologies: ['JavaScript', 'Vue.js', 'CSS3', 'Git'],
    },
];
