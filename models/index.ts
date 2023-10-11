export interface LoginModel {
  username: string;
  password: string;
}

export interface ResponseModel {
  success: boolean;
  message: string;
  error: string;
  data: any;
}

export interface UserAuth {
  token: string;
  roles: string[];
  username: string;
}
