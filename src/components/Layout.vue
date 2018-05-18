<template>
    <div class="layout">
        <Layout>
            <Header>
                <lm-header></lm-header>
            </Header>
            <Layout>
                <Sider hide-trigger>
                   <sideMenu></sideMenu> 
                </Sider>
                <Content>
                    <router-view></router-view>
                </Content>
                
            </Layout>
            <Footer>
                 <lm-footer></lm-footer>
            </Footer>
        </Layout>
    </div>
</template>
<script>
    import lmHeader from "./Header"
    import sideMenu from "./SlideMenu"
    import lmFooter from "./Footer"
    
    export default {
        data(){
            return {

            }
        },
        components:{
            sideMenu,lmHeader,lmFooter
        }
    }
</script>
<style>
    .layout{
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
</style>
