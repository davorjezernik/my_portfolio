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
        liveUrl: 'http://projects.davorjezernik.com/Join'
    },
    {
        id: 'pollo',
        name: 'El Pollo Loco',
        description: 'TRANSLATE.P_VIEW_POLLO_DESC',
        details: 'TRANSLATE.P_VIEW_POLLO_DETAILS',
        weeks: '5',
        githubUrl: 'https://github.com/davorjezernik/elPolloLoco',
        liveUrl: 'http://projects.davorjezernik.com/elPolloLoco'
    },
        {
        id: 'bubble',
        name: 'bubble',
        description: 'TRANSLATE.P_VIEW_POLLO_DESC',
        details: 'TRANSLATE.P_VIEW_POLLO_DETAILS',
        weeks: '8',
        githubUrl: 'https://github.com/davorjezernik/DaBubble_',
        liveUrl: 'https://github.com/davorjezernik/DaBubble_'
    },
];
