export class User {
  constructor(
    public name: string,
    public email: string,
    public mobile: number,
    public password: string,
    public country: string,
    public gender: string,
    public check: boolean
  ) {}
}
