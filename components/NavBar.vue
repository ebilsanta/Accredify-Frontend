<template>
  <a-layout class="layout">
    <a-layout-header>
      <a-menu
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        :selectable="false"
      >
        <NuxtLink to="/">
          <a-menu-item>Home</a-menu-item>
        </NuxtLink>
        <a-menu-item><SearchBar/></a-menu-item>
        
      </a-menu>
    </a-layout-header>
    <a-typography-title :level="3" :style="{margin: '12px 58px 0px'}">Pokemon Wiki </a-typography-title>
    <slot></slot>
    <a-layout-footer style="text-align: center">
      Created by Thaddeus
    </a-layout-footer>
  </a-layout>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref(['1']),
    };
  },
});
</script>
<style>
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>