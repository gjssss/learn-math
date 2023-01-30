<script setup>
import { InputNumber, Button } from 'ant-design-vue';
import CheckboxGroup from 'ant-design-vue/es/checkbox/Group';
import SelectType from 'ant-design-vue/es/select';
import "ant-design-vue/es/checkbox/style/css"
import "ant-design-vue/es/select/style/css"
import { CheckCircleTwoTone } from "@ant-design/icons-vue"
import { reactive, toRaw, ref } from 'vue';

const computeMode = [
    { label: '＋', value: 'plus' },
    { label: '–', value: 'minus' },
    { label: '×', value: 'mult' },
    { label: '÷', value: 'devide' }
]
const Select = SelectType
const selectOption = SelectType.Option

const modes = ref(['plus', 'minus', 'mult'])
const pageCount = ref(3)
const range = ref('100')

</script>

<template>
    <div>
        <div class="item-container">
            <div class="label">运算：</div>
            <CheckboxGroup :options="computeMode" style="display:flex;align-items:center;" v-model:value="modes" />
        </div>
        <div class="item-container">
            <div class="label line-center">页数：</div>
            <InputNumber min="1" default-value="3" v-model:value="pageCount" />
        </div>
        <div class="item-container">
            <div class="label line-center">范围：</div>
            <Select style="width: 90px" v-model:value="range">
                <select-option value="100">100</select-option>
                <select-option value="1000">1000</select-option>
            </Select>
        </div>
        <div class="item-container">

            <Button type="primary" style="background-color: #32be00;">
                <template #icon>
                    <CheckCircleTwoTone />
                </template>
                生成
            </Button>
        </div>
    </div>
</template>

<style>
.item-container {
    display: flex;
    margin-top: 10px;
}

.item-container .label {
    white-space: nowrap;
    font-size: 18px;
}

.item-container .line-center {
    height: 38px;
    line-height: 38px;
}
</style>