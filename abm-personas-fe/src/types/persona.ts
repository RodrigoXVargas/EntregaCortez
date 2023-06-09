import Base from "./base";

export default class Persona extends Base{
  email: string;
  firstName: string;
  lastName: string;

  constructor (
    id: string = "",
    email: string = "",
    firstName: string= "",
    lastName: string= "",
  ){
    super(id, "http://localhost:3000/api/personas");
    this.email= email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
