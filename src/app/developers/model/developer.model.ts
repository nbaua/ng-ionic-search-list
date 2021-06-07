export interface Developer {
	id: number;
	name: string;
	state: string;
	gender: string;
	email: string;
	sponsor: string;
	avatar: string;
	projects: Project;
	skills: Skill;
	role: string;
}

interface Project {
	ongoing: string[];
	completed: string[];
}

interface Skill {
	languages: string[];
	databases: string[];
}
