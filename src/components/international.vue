
<template>
    <div>
        <Row type="flex" justify="center" align="middle" class="switch-language-row1">
            <RadioGroup :value="lang" @on-change="handleSwitch" vertical>
                <Radio label="zh-CN">
                    <span>中文简体</span>
                </Radio>
                <Radio label="zh-TW">
                    <span>中文繁體</span>
                </Radio>
                <Radio label="en-US">
                    <span>English</span>
                </Radio>
            </RadioGroup>
            <p class="switch-language-tip">{{ $t('tip') }}</p>
        </Row>  
    </div>
</template>

<script>
export default {
    data () {
        return {
            lang: 'zh-CN',
            valueText: 3,
            showModal: false,
        };
    },
    methods: {
        handleSwitch (lang) {
            this.lang = lang;
            localStorage.lang = lang;
            console.log(localStorage)
            this.$store.commit('switchLang', lang); // 如果你要自己实现多语言切换，那么只需要执行这行代码即可，修改语言类型

            this.columnsI18n = [
                {
                    key: 'name',
                    title: this.name
                },
                {
                    key: 'company',
                    title: this.company
                }
            ]; // 像iview的table组件这样一次渲染如果数据不更新视图就不更新的组件，如果切换语言需要更新一下数据才能切换组件内的多语言
        }
    },
    created () {
        this.lang = localStorage.lang || 'zh-CN';
    }
};
</script>
