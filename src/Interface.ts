export interface WorkModel {
    company: string;
    title: string;
    start: string;
    end: string;
    image: string;
    description: string;
}

export interface SkillModel {
    [key: string]: string[]
}