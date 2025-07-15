interface Project{
    id: number,
    name: string,
    project_status: string,
    createdAt: string,
    updatedAt: string
    owner?: {
        firstName: string,
        lastName: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        password: string,
        id:number,
        imgSrc: string,
    }
};
export type { Project };