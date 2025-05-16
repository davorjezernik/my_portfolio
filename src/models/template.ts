export interface TemplateItem {
    id: string;
    name: string;
    description: string;
    details: string;
    weeks: string;
    stack: string;
    imgDisplay: string[];
}

export class TemplateProject {
    templateLayout: TemplateItem[] = [
        {
            id: 'join',
            name: 'Join',
            description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
            details: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way',
            weeks: '8 weeks',
            stack: 'HTML; CSS, JavaScript, FireBase',
            imgDisplay: []
        },
        {
            id: 'pollo',
            name: 'El Pollo Loco',
            description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
            details: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way',
            weeks: '5 weeks',
            stack: 'HTML, CSS, JavaScript',
            imgDisplay: []
        },
        {
            id: 'bubble',
            name: 'DABubble',
            description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
            details: 'Work in progress',
            weeks: 'N/A',
            stack: 'N/A',
            imgDisplay: []
        }
    ];
}
