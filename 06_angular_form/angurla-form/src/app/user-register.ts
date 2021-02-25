export class UserRegister {
  email : string;
  password : string;
  country: string;
  age : number;
  gender: string;
  phone: number;


  constructor(email: string, password: string, country: string, age: number, gender: string, phone: number) {
    this.email = email;
    this.password = password;
    this.country = country;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
  }
}
