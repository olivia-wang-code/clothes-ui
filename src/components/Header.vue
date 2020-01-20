<template>
    <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal">
        <img src="static/image/11.jpg/" style="margin-right: 50px">
        <el-menu-item index="1" @click="home">首页</el-menu-item>
        <el-menu-item index="2" @click="login">登录</el-menu-item>
        <el-menu-item index="3" @click="register">注册</el-menu-item>
        <el-menu-item index="4">关于我们</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            login() {
                this.$router.push('/login')
            },
            register() {
                this.$router.push('/register')
            },
            home(){
                this.$router.push('/')
            }


        }
    }
</script>

<style lang="scss" scoped>
    .el-menu-demo{
        display: flex;
        justify-content: center;
        align-items: center;
        height:100px
    }
</style>