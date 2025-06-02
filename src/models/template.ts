export interface TemplateItem {
    id: string;
    name: string;
    description: string;
    details: string;
    weeks: string;
    githubUrl: string;
    liveUrl: string;
}

export const templateLayout: TemplateItem[] = [
    {
        id: 'join',
        name: 'Join',
        description: 'Task manager inspired by the Kanban System...',
        details: 'Short text that describes your role...',
        weeks: '8',
        githubUrl: 'https://github.com/davorjezernik',
        liveUrl: 'https://github.com/davorjezernik'
    },
    {
        id: 'pollo',
        name: 'El Pollo Loco',
        description: 'Jump, run and throw game...',
        details: 'Short text that describes your role...',
        weeks: '5',
        githubUrl: 'https://github.com/davorjezernik/elPolloLoco',
        liveUrl: 'https://github.com/davorjezernik'
    },
    {
        id: 'bubble',
        name: 'DABubble',
        description: 'This App is a Slack Clone App...',
        details: 'Work in progress...',
        weeks: 'N/A',
        githubUrl: 'https://github.com/davorjezernik',
        liveUrl: 'https://github.com/davorjezernik'
    }
];
