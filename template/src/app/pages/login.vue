<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
      <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
    </el-form-item>
    <div class="slideshow-image"></div>
    <comEle v-on:a-bc="Alert333" :data="[{name:'系统'},{name:'drgrdr'}]"/>
  </el-form>

</template>

<script>

var comEle = {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    Alert (mm) {
      this.$emit('a-bc', mm)
    }
  },
  template: '<div><h2 @click="Alert(1)">局部组件TEXT</h2><ul><li @click="Alert(i)" v-for="i in data" :key="i.id">{{i.name}}</li></ul></div>'
}

export default {
  components: {
    comEle
  },
  data () {
    return {
      logining: false,
      ruleForm2: {
        account: 'admin',
        checkPass: '123456'
      },
      rules2: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
          // { validator: validaePass }
        ],
        checkPass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
          // { validator: validaePass2 }
        ]
      },
      checked: true
    }
  },
  methods: {
    Alert333 (mm) {
      alert(mm.name)
    },
    handleReset2 () {
      this.$refs.ruleForm2.resetFields()
    },
    handleSubmit2 (ev) {
      this.logining = true
      setTimeout(() => {
        this.$router.push('/')
      }, 1000)
    }
  }
}

</script>

<style lang="scss" scoped>
.slideshow-image {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: url(../../assets/login_bg.jpg) no-repeat 50% 50%;
  -webkit-animation-name: kenburns;
  animation-name: kenburns;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-duration: 30s;
  animation-duration: 30s;
  -webkit-transform: scale(1); /* 控制刚开始的时候图片缩放比例 */
  transform: scale(1);
  animation-delay: 2s; /* 控制延迟时间 */
  -webkit-animation-delay: 2s;
}
.slideshow-image {
  -webkit-animation-name: kenburns-1;
  animation-name: kenburns-1;
}
@-webkit-keyframes kenburns-1 {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  1.5625% {
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
  }
  12.5625% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  23.4375% {
    -webkit-transform: scale(1.12);
    transform: scale(1.12);
  }
  46.5625% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  60.5625% {
    -webkit-transform: scale(1.18);
    transform: scale(1.18);
  }
  76.5625% {
    -webkit-transform: scale(1.12);
    transform: scale(1.12);
  }
  88.5625% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  95.5625% {
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes kenburns-1 {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  1.5625% {
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
  }
  12.5625% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  23.4375% {
    -webkit-transform: scale(1.12);
    transform: scale(1.12);
  }
  46.5625% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  60.5625% {
    -webkit-transform: scale(1.18);
    transform: scale(1.18);
  }
  76.5625% {
    -webkit-transform: scale(1.12);
    transform: scale(1.12);
  }
  88.5625% {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }
  95.5625% {
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>
