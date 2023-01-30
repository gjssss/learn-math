<template>
  <div class="container">
    <h1>口算题卡生成器</h1>
    <ConfigProvider componentSize="large">
      <div class="btn-group">
        <Button type="primary" @click="part = 'ComputePart'">计算题</Button>
        <Button type="primary" @click="part = 'ComparePart'">比较题</Button>
      </div>
      <div class="option-container">
        <KeepAlive>
          <component :is="parts[part]"></component>
        </KeepAlive>
      </div>
    </ConfigProvider>
  </div>
</template>

<script setup>
import { Button, ConfigProvider } from 'ant-design-vue';
import { ref } from 'vue';
import ComparePart from './components/comparePart.vue';
import ComputePart from './components/computePart.vue';
const part = ref("")
const parts = {
  ComparePart, ComputePart
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 800px;
  margin: auto;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.btn-group>Button {
  margin-left: 10px;
}

.option-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
}
</style>
