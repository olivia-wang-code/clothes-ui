<template>
    <!--    <el-row :gutter="20" type="flex">-->
    <!--        <el-col :span="16"><div class="grid-content bg-purple">淘淘cos租售</div></el-col>-->
    <!--        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>-->
    <!--    </el-row>-->

    <div>

        <Header></Header>


        <div class="header">
            <div class="center">
                <div class="bottom">
                    <label></label> <el-input v-model="inputQuery" type="text" name="sear" style="width: 200px"/>
                    <el-button type="primary" class="login0" icon="el-icon-thumb">我要发布</el-button>
                    <el-button type="primary"  icon="el-icon-search">搜索</el-button>
                </div>
                <el-row style="height:40px;padding: 20px">
                    <el-button size="mini" round>动漫类</el-button>
                    <el-button size="mini" round>游戏类</el-button>
                    <el-button size="mini" round>小说类</el-button>
                    <el-button size="mini" round>影视剧人物类</el-button>
                </el-row>
            </div>
        </div>





        <div class="contain-warp">
            <div class="contain" style="padding:25px">

                <el-card :body-style="{ padding: '0px'}"  style="margin: 10px" v-for="(c, index) in cloths" :key="index" class="item-card">
                    <div class="item">
                        <img :src="c.starsUrl" alt="">
                        {{c.name}} {{c.price}} {{c.desc}}
                    </div>

                </el-card>
            </div>


        </div>
        <div class="page">
            <el-pagination align="center" style="height:60px;padding-top: 20px"
                           background
                           layout="prev, pager, next"
                           :total="1000">
            </el-pagination>
        </div>
        <el-divider></el-divider>
        <el-container>
            <el-footer>
                <div style="margin-left: 300px;margin-top: -18px">
                    <span style="margin-right:20px">
                        <el-link :underline="false">关于我们</el-link>
                    </span>
                    <span style="margin-right:20px">
                        <el-link :underline="false">常见问题</el-link>
                    </span>
                    <el-link :underline="false">服务协议</el-link>
                </div>
                <div style="color: dimgray;font-size: 14px;margin-left: 300px;margin-top: 3px">本站所有信息均为用户自由发布，本站不对信息的真实性负任何责任</div>
                <div style="color: dimgray;font-size: 14px;margin-left: 300px;margin-top: 3px;font-size: 14px">Copyright@2019-2020,Taoertao.com, All Rights Reserved</div>
            </el-footer>
        </el-container>
        <el-backtop style="bottom: 120px">UP</el-backtop>
    </div>

</template>
<script>
    import Header from "./Header";
    export default {
        name:'Home',
        components: {Header},
        data(){
            return{
                inputQuery:'',
                type:['动漫类','游戏类','小说类','影视剧人物类'],
                cloths:[
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/1.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/2.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/img.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/3.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/1.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/2.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/img.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/3.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/1.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/2.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/img.png"
                    },
                    {
                        name:'衣服',
                        price:'100',
                        desc:'描述',
                        starsUrl:"./static/image/3.png"
                    },
                ]
            }
        },
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


    .item {
        padding: 0;
    }



    .el-aside {
        background-color: floralwhite;
        color: #333;
        text-align: center;
        line-height: 50px;
    }
    .header{
        background: white;
        width: 100%;
        height: 60px;
        padding-top: 20px;
        /*flex 布局*/
        display: flex;
        /*水平居中*/
        justify-content: center;
        /*垂直居中*/
        align-items: center;
        .center{
            position: relative;
            width: 1100px;
            /*display: inline-block;*/
            /*vertical-align: middle;*/
            .top{
                .logo{
                    font-size: 2rem;
                }
                .login{
                    position: absolute;
                    right: 0;
                }
            }
            .bottom{
                height: 40px;
                line-height: 40px;
                padding: 10px 0;
                .login0{
                    position: absolute;
                    right: 0;
                }
            }

        }
    }
    .contain-warp{
        display: flex;
        justify-content: center;
        width: 100%;
        /*margin-top: 50px;*/
        margin:10px 0 0 0;
        .contain{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1100px;
            flex-wrap: wrap;
            .item-card{

                &:hover{
                    /*box-shadow: 1px 1px 2px rgba(0,0,0,0.3);*/
                    transform: translateY(-4px);/*向y轴移动*/
                }
                .item{
                    cursor: pointer;
                    height: 276px;
                    width: 213px;
                    background-color: floralwhite;
                    /*border: 1px grey solid;*/
                    border-radius: 4px;

                    /*上 左 下 右*/
                    /*margin: 5px;*/
                    img{
                        height: 214px;
                        width: 100%;
                    }
                }
            }

            .page{
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

</style>