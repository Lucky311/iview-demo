<template>
    <div class="slidememu">
        <Menu ref="sideMenu" :active-name="activeName" theme="dark" width="auto" :open-names="openNames"  @on-select="selectMenu"  accordion>
            <Submenu name="system">
                <template slot="title">
                    <Icon type="ios-navigate"></Icon>
                    系统管理
                </template>
                <MenuItem @click.native="showName()" name="/system/banner"> 轮播图管理 </MenuItem>
                <MenuItem name="/system/new"> 资讯管理 </MenuItem>
            </Submenu>
            <Submenu name="user">
                <template slot="title">
                    <Icon type="ios-keypad"></Icon>
                    用户管理
                </template>
                <MenuItem name="/user/userlist"> 用户列表 </MenuItem>
                <MenuItem name="/user/usermanage"> 后台用户管理 </MenuItem>
            </Submenu>
            <Submenu name="activity">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    活动管理
                </template>
                <MenuItem name="/activity/activitylist"> 活动列表 </MenuItem>
            </Submenu>
            <Submenu name="school">
                <template slot="title">
                    <Icon type="ios-analytics"></Icon>
                    学校管理
                </template>
                <MenuItem name="/school/schoollist"> 学校列表 </MenuItem>
            </Submenu>
        </Menu>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                activeName: "/system/banner",
                openNames:[]
            }
        },
        methods:{
            showName:()=>{
                // console.log(this)
            },
            selectMenu(name){
                this.$router.push(name)
            }
        },
        mounted(){
            this.activeName = this.$route.path             
            this.openNames=[this.$route.path.split('/')[1]]
            console.log(this.openNames)  
        },
        updated () {
            this.$nextTick(() => {
                if (this.$refs.sideMenu) {
                    this.$refs.sideMenu.updateOpened();
                }
            });
        }
    }
</script>
<style>
    .slidememu{
        background: #495060;
        height: 100%;
        overflow-y: auto;
        position: fixed;
        top: 64px;
        left: 0;
        margin-bottom: 117px;
        /* bottom: 117px; */
        /* z-index: -1; */
    }
</style>

