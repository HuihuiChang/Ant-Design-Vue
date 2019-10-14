<template>
    <div class="layout">
        <div class="left">
            <p>左边固定</p>
        </div>
        <div class="center">
            <p>中间自适应</p>
        </div>
        <div class="right">
            <p>右边固定</p>
        </div>
    </div>
</template>

<style>
    .layout{
        width: 100%;
        height: 100%;
        position: relative
    }

    .left {
        height: 100%;
        position: absolute;
        background: pink;
        width: 200px;
        left: 0;
    }

    .center {
        height: 100%;
        position: absolute;
        background: lightblue;
        left: 200px;
        right: 200px;
    }

    .right {
        height: 100%;
        position: absolute;
        background: pink;
        width: 200px;
        right: 0;
    }
</style>
