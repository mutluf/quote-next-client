//QUOTES
export type GetAllQuotesParamsType = {
    pageIndex: number;
    count: number;
    startDate?: Date;
    endDate?: Date;
    search_query?: string
}

export type PostUpdateRequestType = {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export type PostCreateRequestType = {
    title: string;
    content: string;
}

export type BookmarkCreateRequestType = {
    name: string;
    description: string;
    userProfileId: string;
}

export type UserCreateRequestType = {
    username: string;
    email: string;
    password: string;
}

export type UserUpdateRequestType = {
    id: string;
    username: string;
    email: string;
    password: string;
}

export type UserProfileUpdateRequestType = {
    userId: string;
    description?: string;
    imageUrl?: string;
}

export type RoleUpdateRequestType={
    id:string;
    role:string;
}

export type AuthLoginRequestType={
    username:string;
    password:string;
}