
export interface Member {
    first: string
    last: string
    email: string
    status: string
}

class Person {
    first: string;
    last: string;
    email: string;
    status: string;
  
    constructor(first: string, last: string, email: string, status: string) {
      this.first = first;
      this.last = last;
      this.email = email;
      this.status = status;
    }
  }

export function addMember(member: Member): {first: string; last: string; email: string; status: string} {
    const person: Member = new Person(member.first, member.last, member.email, member.status);
    return person;
}