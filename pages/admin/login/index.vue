<script setup lang="ts">
import { LoginModel } from "~/models";

definePageMeta({
  layout: false,
});

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Password from "primevue/password";
import { useAuthStore } from "~/stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const dataLogin = ref<LoginModel>({ username: "", password: "" });

const handleLoginAdmin = async () => {
  const checkLogin: boolean = await authStore.loginAdmin(dataLogin.value);
  if (checkLogin) {
    router.push("/admin/product");
  }
};
</script>

<template>
  <div class="login-main">
    <form @submit.prevent="handleLoginAdmin" class="form-login">
      <h1 class="text-center">Login Admin</h1>
      <div class="w-100 mb-3 mt-3">
        <div class="flex mb-3 flex-column gap-2">
          <label for="username">Username</label>
          <InputText
            v-model="dataLogin.username"
            class="w-100"
            placeholder="Username"
          />
        </div>
        <div class="flex flex-column gap-2">
          <label for="password">Password</label>
          <Password
            :feedback="false"
            toggleMask
            v-model="dataLogin.password"
            class="w-100"
            placeholder="Password"
          />
        </div>
      </div>
      <Button
        type="submit"
        label="Login"
        :loading="false"
        class="w-100 btn-login"
        severity="success"
        rounded
      />
    </form>
  </div>
</template>

<style scoped lang="scss">
.login-main {
  width: 100%;
  height: 100vh;
  background-image: url("/img/nuirung.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-login {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
    padding: 40px;
    border-radius: 8px;
    color: black;
    input {
      min-width: 200px;
    }

    .btn-login {
      border-radius: 8px;
    }
  }
}
</style>
