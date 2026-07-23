import { Code2, Layers, Zap, Shield } from 'lucide-vue-next';
import type { TPhilosophyPillarProps } from '~/types/philosophy/TPhilosophyPillarProps';

export const philosophyPillars: TPhilosophyPillarProps[] = [
    {
        icon: Code2,
        title: 'Readable',
        description: 'Code should tell a story that any developer can follow',
    },
    {
        icon: Layers,
        title: 'Scalable',
        description: 'Architecture that grows with your product needs',
    },
    {
        icon: Zap,
        title: 'Performant',
        description: 'Every millisecond matters for user experience',
    },
    {
        icon: Shield,
        title: 'Maintainable',
        description: 'Write code that future you will thank you for',
    },
];
