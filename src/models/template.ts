export interface TemplateItem {
    id: string;
    name: string;
    description: string;
    details: string;
    weeks: string;
    stack: string;
    imgDisplay: string[];
}

export const templateLayout: TemplateItem[] = [
    {
        id: 'join',
        name: 'Join',
        description: 'Task manager inspired by the Kanban System...',
        details: 'Short text that describes your role...',
        weeks: '8 weeks',
        stack: 'HTML; CSS, JavaScript, FireBase',
        imgDisplay: []
    },
    {
        id: 'pollo',
        name: 'El Pollo Loco',
        description: 'Jump, run and throw game...',
        details: 'Short text that describes your role...',
        weeks: '5 weeks',
        stack: 'HTML, CSS, JavaScript',
        imgDisplay: []
    },
    {
        id: 'bubble',
        name: 'DABubble',
        description: 'This App is a Slack Clone App...',
        details: 'Work in progress',
        weeks: 'N/A',
        stack: 'N/A',
        imgDisplay: []
    }
];
