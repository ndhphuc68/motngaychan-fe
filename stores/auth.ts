import { defineStore } from "pinia";
import { LoginModel, ResponseModel } from "~/models";
import { UserAuth } from "~/models";
import { useFetch } from "#app";
import { apiPost } from "~/helpers/api";

type State = {
  user: UserAuth;
  returnUrl: string;
  authenticated: boolean;
};
export const useAuthStore = defineStore({
  id: "auth",
  state: (): State =>
    <State>{
      user: {},
      returnUrl: "",
      authenticated: false,
    },
  actions: {
    async loginAdmin(data: LoginModel) {
      const res = await apiPost("/auth/admin/login", data);
      if (res?.success) {
        this.user = res.data;
        this.authenticated = true;
        const token = useCookie("token");
        token.value = res.data.token;
        return true;
      } else {
        return false;
      }
    },
  },
});
