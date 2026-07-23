import type { Component } from 'vue';

export type TProjectProps = {
    title: string;
    description: string;
    technologies: string[];
    gradient: string;
    icon: Component;
    image?: string;
}
