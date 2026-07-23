import { Mail, Send } from 'lucide-vue-next';
import type { TContactMethodProps } from '~/types/contact/TContactMethodProps';

export const contactMethods: TContactMethodProps[] = [
    {
        icon: Mail,
        label: 'Email',
        value: 'vlad_horob@ukr.net',
        href: 'mailto:vlad_horob@ukr.net',
    },
    {
        icon: Send,
        label: 'Telegram',
        value: '@vladhorobets',
        href: 'https://t.me/vladhorobets',
    },
];
