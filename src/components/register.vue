<template>
    <div class="bg">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="Name">
                <el-input v-model="ruleForm.Name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input  type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <div>返回
                    <router-link to="/">
                        首页
                    </router-link>
                </div>
            </el-form-item>
        </el-form>

    </div>



</template>

<script>
    import logo from '@/assets/logo.png'
    export default {
        data() {
            let checkName = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }

            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                logo:logo,
                ruleForm: {
                    pass: '',
                    checkPass: '',
                    Name: '',
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    Name: [
                        { validator: checkName, trigger: 'blur' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .bg{
        background-image: url("/static/image/ds.png");
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
    }
    .demo-ruleForm{
        width: 20%;
        position: relative;/*相对位置*/
        top:25%;
        left:40%
    }
</style>