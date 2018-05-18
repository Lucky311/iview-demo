<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo"><img src="@/assets/images/logo.png"/></div>
                    <div class="layout-nav">
                        <Dropdown>
                            <img src="@/assets/images/avatar3_small.jpg" class="pic"/>
                            <span>管理员</span>
                            <Icon type="chevron-down" size=10></Icon>
                            <DropdownMenu slot="list">
                                <DropdownItem>设置</DropdownItem>
                                <DropdownItem>退出</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>     
                    </div>
                     
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#495060'}">
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
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '500px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
             <Footer class="layout-footer-center">2018-2028 &copy; TalkingData</Footer>
        </Layout>
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
<style scoped>
.layout{
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
}
.layout-nav{
    float: right;
    margin-right: 20px;
    color: #f5f7f9
}
.layout-footer-center{
    background: #495060;
    text-align: center;
    color: #f5f7f9
}
.ivu-icon{
    margin-left: 6px;
}
/* .ivu-dropdown .ivu-select-dropdown{
    margin: 0
} */
.pic{ 
    vertical-align: middle;
    height: 40px; 
    width: 40px; 
    border-radius: 50%; 
    margin-right: 6px;
    }

</style>