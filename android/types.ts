export type User = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword?: string
}
export type CreateAccountValidation  = {
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    confirmPassword?: string,
    form?: string
}
export type LoginCredentials = {
    email: string,
    password: string
}
export enum LocatorStrategy {
    id = "id",
    xpath = "xpath"
}
export type Selector = string | RegExp
export enum Platform {
    ios = 'ios',
    android = 'android',
}