import { Github, Linkedin, Mail } from 'lucide-vue-next';
import type { TSocial } from '~/types/socials/TSocial';

export const socials: TSocial[] = [
    {
        component: Github,
        url: 'https://github.com/vlador4ik',
        label: 'GitHub profile',
    },
    {
        component: Linkedin,
        url: 'https://www.linkedin.com/in/vlad-horobets/',
        label: 'LinkedIn profile',
    },
    {
        component: Mail,
        url: 'mailto:vlad_horob@ukr.net',
        label: 'Send email',
    },
];
