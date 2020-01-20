<template>
    <div>
        <div style="margin-bottom: 40px;">
            Name:<input type="text" name="name" v-model="newList.name" style="margin-right: 50px;">
            Description:<input type="text" name="description" v-model="newList.description" style="margin-right: 50px;">
            Price:<input type="text" name="price" v-model="newList.price" style="margin-right: 50px">
            <button type="button" @click="add()">添加</button>
            <button type="button" >search</button>
            <el-row>
                <el-button>默认按钮</el-button>
                <el-button type="primary">主要按钮</el-button>
                <el-button type="success">成功按钮</el-button>
                <el-button type="info">信息按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
            </el-row>
        </div>

        <div style="margin-left: 650px;">
            <table border="1" cellspacing="0" height="70px" width="600px">
                <tr>
                    <td @click="sortByName()">姓名</td>
                    <td>备注</td>
                    <td>价格</td>
                    <td>操作</td>
                </tr>

                <tr v-for="(item, index) in list" :key="index">
                    <td>
                        <span v-show="!item.editable">{{ item.name }}</span>
                        <input v-show="item.editable" type="text" v-model="item.name">
                    </td>
                    <td>
                        <span v-show="!item.editable">{{item.description}}</span>
                        <input v-show="item.editable" type="description" v-model="item.description">
                    </td>
                    <td>
                        <span v-show="!item.editable">{{item.price}}</span>
                        <input v-show="item.editable" type="price" v-model="item.price">
                    </td>
                    <td>
                        <button type="button" style="margin-right:10px;" @click="del(index)">删除</button>
                        <button type="button" @click="update(item)">修改</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        name: 'practice',
        data() {
            return {
                list: [],
                newList: {
                    name: '',
                    description: '',
                    price: '',
                    editable: false
                }

            }
        },
        methods: {
            search() {
              axios.get('http://localhost:8080/search', {})
                  .then(res => {
                      console.log(res)
                  })
                  .catch(error => {
                      console.error(error)
                  })
            },
            add() {
                this.list.push(this.newList);
                this.newList = {
                    name: '',
                    description: '',
                    price: '',
                    editable: false
                }
            },
            del(index) {
                this.list.splice(index, 1)
            },
            update(item) {
                item.editable = !item.editable;//item.editable=item

            },

            sortByName() {
                console.log('sort');
                this.list = this.list.sort(((a, b) => a.name > b.name ? 1 : -1))
                console.log(this.list)
            }
        }
    }


</script>

<style scoped>

</style>