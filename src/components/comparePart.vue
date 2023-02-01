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
                <select-option value="1">初级</select-option>
                <select-option value="2">中级</select-option>
                <select-option value="3">高级</select-option>
            </Select>
        </div>
        <div class="item-container">
            <div class="label">是否下载答案：</div>
            <Switch checked-children="是" un-checked-children="否" v-model:checked="isAnswer" />
        </div>
        <div class="item-container">
            <Button type="primary" style="background-color: #32be00;" @click="handle" :loading="loadFlag">
                <template #icon>
                    <CheckCircleTwoTone />
                </template>
                生成
            </Button>
        </div>
    </div>
</template>

<script setup>
import { InputNumber, Button, Switch } from 'ant-design-vue';
import CheckboxGroup from 'ant-design-vue/es/checkbox/Group';
import SelectType from 'ant-design-vue/es/select';
import { CheckCircleTwoTone } from "@ant-design/icons-vue"
import { ref, toRaw } from 'vue';
import { compareGenerator } from '@/libs/computeGenerator';
import { printGenerator } from '@/libs/printGenerator';
import { printPic } from '@/utils/printPic';
import { download } from '@/utils/download';

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
const range = ref('1')
const loadFlag = ref(false)
const isAnswer = ref(false)

function handle() {
    loadFlag.value = true
    new Promise(async resolve => {
        let ansList
        if (isAnswer.value == true) {
            ansList = new Array(pageCount.value * 60)
        }
        let urls = new Array(pageCount.value)
        for (let j = 0; j < pageCount.value; j++) {
            let info = new Array(60)
            for (let i = 0; i < 60; i++) {
                let c = compareGenerator(toRaw(modes.value), toRaw(range.value))
                info[i] = [c.c1.str, c.c2.str]
                if (isAnswer.value == true) {
                    let { ans } = c
                    ansList[j * 60 + i] = `${j * 60 + i}: ${ans}  `
                }
            }
            urls[j] = await printGenerator('compare', info)
        }
        if (isAnswer.value) {
            download(ansList)
        }
        await printPic(urls)
        resolve()
    }).then(() => loadFlag.value = false)
}
</script>

<style>

</style>