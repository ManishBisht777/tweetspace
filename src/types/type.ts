import { Session } from "next-auth";

export interface UserSession extends Session {
  id: string;
}

export interface user {
  email: string;
  id: string;
  image: string;
  name: string;
}

export interface space {
  created_at: string;
  created_by: string;
  date: string;
  from: string;
  id: number;
  link: string;
  title: string;
  users: user;
}
