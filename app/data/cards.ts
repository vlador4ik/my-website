import { Briefcase, Users, Award, GitBranch } from 'lucide-vue-next';
import type { TCard } from '~/types/cards/TCard';

export const cards: TCard[] = [
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
];
