type TranslationKey = string;

export interface TemplateItem {
    id: string;
    name: string;
    description: TranslationKey;
    details: TranslationKey;
    weeks: string;
    githubUrl: string;
    liveUrl: string;
}

export const templateLayout: TemplateItem[] = [
    {
        id: 'join',
        name: 'Join',
        description: 'TRANSLATE.P_VIEW_JOIN_DESC',
        details: 'TRANSLATE.P_VIEW_JOIN_DETAILS',
        weeks: '8',
        githubUrl: 'https://github.com/davorjezernik/Join',
        liveUrl: 'https://github.com/davorjezernik'
    },
    {
        id: 'pollo',
        name: 'El Pollo Loco',
        description: 'TRANSLATE.P_VIEW_POLLO_DESC',
        details: 'TRANSLATE.P_VIEW_POLLO_DETAILS',
        weeks: '5',
        githubUrl: 'https://github.com/davorjezernik/elPolloLoco',
        liveUrl: 'https://github.com/davorjezernik'
    },
    {
        id: 'bubble',
        name: 'DABubble',
        description: 'TRANSLATE.P_VIEW_BUBBLE_DESC',
        details: 'TRANSLATE.P_VIEW_BUBBLE_DETAILS',
        weeks: 'N/A',
        githubUrl: 'https://github.com/davorjezernik',
        liveUrl: 'https://github.com/davorjezernik'
    }
];
