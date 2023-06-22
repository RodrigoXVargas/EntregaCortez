import Base from "./base";

export default class Persona extends Base{
  email: string;
  firstName: string;
  lastName: string;

  constructor (
    id: number = 0,
    email: string = "",
    firstName: string= "",
    lastName: string= "",
  ){
    super(id);
    this.email= email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
