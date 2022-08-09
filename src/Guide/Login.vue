<template>
  <div>
    <div class="login-box">
      <h2>图书馆座位预约</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" v-model="number">
          <label>学号</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" v-model="password">
          <label>密码</label>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a @click="handleSubmit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          登录
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a @click="signUp_asd">注册 </a>
      </form>
    </div>
  </div>
</template>

<script>
import request from "@/req";
import {Toast} from "vant";

export default {
  name: "Login",
  data() {
    return {
      number: 123,
      password: '123456789',
    }
  },
  methods: {
    signUp_asd() {
      this.$router.replace({path: '/register'});
    },
    handleSubmit() {
      request.post('/public/login',{
        number:this.number,
        password:this.password
      }).then(res=>{
        if (res.code===200){
          console.log(res);
          Toast('登陆成功')
          localStorage.setItem('user',JSON.stringify(res.user))
        }else{
          Toast('账户或密码错误')
        }
      })
    },
  },
}
;
</script>

<style>
body {
  background: #507aa7;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(75, 75, 75, .16);
  box-sizing: border-box;
  box-shadow: 0 5px 5px rgba(0, 0, 0, .6);
  border-radius: 5px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: white;
  font-size: 12px;
}

.login-box form a {
  border: 1px rgba(255, 255, 255, .3) solid;
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a span {
  position: absolute;
  display: block;
}


</style>
