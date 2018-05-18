<style scoped>
    .layout{
        /* border: 1px solid #d7dde4; */
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        /* margin: 0 auto; */
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .swiper-container{
        width:100%;
        height: 400px;
    }
    .swiper-container img{
        width: 100%;
        height: 400px;
    }
</style>
<template>
<div>
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-key="1">
            <!-- <div class="layout-logo"></div> -->
            <div class="layout-nav">
                <Menu-item key="1" name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item key="2"  name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item key="3"  name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item key="4"  name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
        </Menu>
        <Carousel v-model="value1" loop>
            <CarouselItem>
                <div class="demo-carousel"  @click="showIndex()"><img src="@/assets/images/u11.png"></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"  @click="showIndex()"><img src="@/assets/images/u53.png"></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><img src="@/assets/images/u11.png"></div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel"><img src="@/assets/images/u53.png"></div>
            </CarouselItem>
        </Carousel>
        <swiper :options="swiperOption" ref="mySwiper" >
          
            <swiper-slide><img src="@/assets/images/u11.png"></swiper-slide>
            <swiper-slide><img src="@/assets/images/u53.png"></swiper-slide>
            <swiper-slide><img src="@/assets/images/u90.png"></swiper-slide>
          
            <div class="swiper-pagination"  slot="pagination"></div>

        </swiper>
                
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {  
     value: '',
     value1: 0,
     swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
        coverflow: {
        　　rotate: 30,
        　　stretch: 10,
        　　depth: 60,
        　　modifier: 2,
        　　slideShadows : true
　　    }
      }
    }
  },
  methods: {
      showIndex(){
          let encode123 = Base64.encode('abc123')
          console.log(encode123,Base64.decode(encode123))
      }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(3, 1000, false)
    }
}
</script>

<style scoped>
.ivu-carousel{
    width:100%;
    height: 400px;
    background:red;
}
.ivu-carousel img{
    width:100%;
    height: 400px;
}
</style>
