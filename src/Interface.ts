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

export interface TrainingModel {
    name: string;
    date: string;
    image: string;
}

export interface EducationModel {
    image: string
    school: string;
    degree: string;
    department: string;
    start: string;
    end: string;
    status: string;
}