 <template>
   <div>
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
   </div>
 </template>
 <script>
 export default {
   
 }
 </script>
 
 <style scoped>
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
</style>
