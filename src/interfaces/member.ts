
export interface Member {
    name: string
    email: string
    status: string
}

class Person {
    name: string;
    email: string;
    status: string;
  
    constructor(name: string, email: string, status: string) {
      this.name = name;
      this.email = email;
      this.status = status;
    }
  }

export function addMember(member: Member): {name: string; email: string; status: string} {
    const person: Member = new Person(member.name, member.email, member.status);
    return person;
}