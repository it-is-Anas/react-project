
interface User {
    firstName: string,
    lastName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    password: string,
    id:number,
    imgSrc: string,
};

interface Project{
    id: number,
    name: string,
    project_status: string,
    createdAt: string,
    updatedAt: string
    owner?: User,
};


interface Team {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string,
    project: Project,
    leader?: User,
};

export type { User , Project , Team };
