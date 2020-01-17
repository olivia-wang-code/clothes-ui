<template>
    <div class="bg">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="Name">
                <el-input v-model="ruleForm.Name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input  type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>

            </el-form-item>
            <el-form-item style="text-align: right">
                还没有账号？点击<router-link to="/register">注册</router-link>
            </el-form-item>

        </el-form>
    </div>



</template>

<script>
    export default {
        name:'login',
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

            return {
                ruleForm: {
                    pass: '',
                    Name: '',
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
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