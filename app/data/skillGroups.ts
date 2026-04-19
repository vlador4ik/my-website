import type { TSkillGroup } from '~/types/skills/TSkillGroup';

export const skillGroups: TSkillGroup[] = [
    {
        title: 'Frontend',
        skills: [
            { name: 'Vue 2/3' },
            { name: 'Nuxt 3/4' },
            { name: 'TypeScript' },
            { name: 'Pinia' },
            { name: 'Tailwind CSS' },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js' },
            { name: 'Express.js' },
            { name: 'Websockets' },
            { name: 'MongoDB' },
            { name: 'REST APIs' },
        ],
    },
    {
        title: 'Styling',
        skills: [
            { name: 'SCSS' },
            { name: 'Tailwind CSS' },
            { name: 'CSS Modules' },
            { name: 'Responsive Design' },
        ],
    },
    {
        title: 'Tooling',
        skills: [
            { name: 'Vite' },
            { name: 'Webpack' },
            { name: 'Git' },
            { name: 'npm/pnpm' },
        ],
    },
];
