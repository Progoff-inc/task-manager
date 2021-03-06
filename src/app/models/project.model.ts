export interface Project{
    Id:number;
    Name:string;
    GitHubLink:string;
    ClientContact:string;
    File:string;
    CreateUserId: number;
    ClientLink: string;
    CreateDate: Date;
    Status:ProjectStatus;
    Type: ProjectType;

    Tasks?:Task[];
}

export interface ProjectUser{
    Id:string;
    Photo:string;
    Name:string;
    Roles:Set<Roles>;
}

export interface Task{
    Id: number;
    Name: string;
    UserId: number;
    ProjectId: number;
    RequirementId: number;
    Description: string;
    PlanTime: number;
    FactTime: number;
    Type:TaskTypes;
    Status:StatusTypes;
    Priority: PriorityTypes;
    CreateUserId: number;
    CreateDate: Date;
}

export interface Message{
    Id: number;
    UserName: string;
    UserPhoto: string;
    CreateUserId: number;
    Text: string;
    CreateDate: Date;
}

export interface Requirement{
    Id: number;
    Name: string;
    UserId: number;
    ProjectId: number;
    Description: string;
    Status:StatusTypes;
    Priority: PriorityTypes;
    CreateUserId: number;
    CreateDate: Date;
}

export interface Filter{
    Type?:FilterType;
    Options?:FilterOption[];
}

export interface FilterOption{
    Name: TaskTypes | StatusTypes | PriorityTypes | 'yes' | 'no';
    Number:number;
    Active: boolean;
}

export enum Roles{
    TeamLead = 1,
    ClientManager = 2,
    Designer = 3,
    Developer = 4,
    Tester = 5
}


export enum TaskTypes{
    Task = 'task',
    Bug = 'bug',
    Requirement = 'requirement'
}

export enum StatusTypes{
    Proposed = 'proposed',
    Active = 'active',
    Resolved = 'resolved',
    Testing = 'testing',
    Closed = 'closed'
}

export enum PriorityTypes{
    Critical = 'critical',
    High = 'high',
    Medium = 'medium',
    Low = 'low'
}


export enum RoleTypes{
    TeamLead = 'teamlead',
    ClientManager = 'clientmanager',
    Designer = 'designer',
    Developer = 'developer',
    Tester = 'tester'
}

export enum ProjectStatus{
    Planning = 'planning',
    Active = 'active',
    Testing = 'testing',
    Frozen = 'frozen',
    Closed = 'closed'
}

export enum ProjectType{
    Landing = 'landing',
    Card = 'card',
    EShop = 'e-shop',
    InfoPortal = 'info-portal',
    BusinessPortal = 'business-portal'
}

export enum FilterType{
    Type = 'type',
    Priority = 'priority',
    AssignToMe = 'assigntome',
    Status = 'status',
}