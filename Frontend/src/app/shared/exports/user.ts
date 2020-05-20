export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  isActive: boolean;
  roleName: number;
  status: string;
}
export class Role {
  idROLE: number;
  roleName: number;
}
export class Picture {
  id: number;
  id_user: number;
  name: string;
  created_date: string;
  updated_date: string;
  description: string;
  url: string;
  active: number;
}
