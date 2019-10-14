<template>
    <div id="app">
        <a-table :columns="columns" :dataSource="data" bordered>
            <template slot="operation">
                <a href="javascript:;" @click="showModal">Operation</a>
                &nbsp;
                <router-link to="/comment">Comments</router-link>
            </template>
        </a-table>
        <a-modal title="Modal" :visible="visible" @ok="handleOk" :confirmLoading="confirmLoading" @cancel="handleCancel">
            <p>{{ModalText}}</p>
        </a-modal>
    </div>
</template>

<script>
    export default {
        data() {
            const columns = [{
                title: 'Name',
                dataIndex: 'name',
                customRender: (text, record, index) => {
                    const obj = {
                        children: text,
                        attrs: {}
                    };
                    obj.attrs.rowSpan = this.together(this.data)[index];
                    // obj.attrs.rowSpan = record.rowSpan;
                    // if (index === 0) {
                    //     obj.attrs.rowSpan = 3;
                    // }
                    // if (index === 1) {
                    //     obj.attrs.rowSpan = 0;
                    // }
                    // if (index === 2) {
                    //     obj.attrs.rowSpan = 0;
                    // }
                    // if (index === 3) {
                    //     obj.attrs.rowSpan = 2;
                    // }
                    // if (index === 4) {
                    //     obj.attrs.rowSpan = 0;
                    // }
                    return obj;
                },
            }, {
                title: 'Subject',
                dataIndex: 'subject'
            }, {
                title: 'Difficulty',
                dataIndex: 'difficulty'
            }, {
                title: 'Score',
                dataIndex: 'score'
            }, {
                title: 'Operation',
                dataIndex: 'operation',
                scopedSlots: { customRender: 'operation'}
            }];
            return {
                data: [],
                columns,
                ModalText: 'This is a Modal!',
                visible: false,
                confirmLoading: false,
            }
        },
        methods: {
            getData: function () {
                this.$axios.get("http://testapi.com/api").then(res => {
                    this.data = res.data.mockData;
                    console.log(res.data.mockData);
                });
            },
            showModal() {
                this.visible = true;
                this.ModalText = 'This is a Modal!';
            },
            handleOk() {
                this.ModalText = 'The modal will be closed after one seconds';
                this.confirmLoading = true;
                setTimeout(() => {
                    this.visible = false;
                    this.confirmLoading = false;
                }, 1000);
            },
            handleCancel() {
                console.log('Clicked cancel button');
                this.visible = false
            },
            together(data) {
                //保存上一个name
                var x = "";
                //相同name出现的次数
                var count = 0;
                //该name第一次出现的位置
                var startindex=0;

                var myArray = new Array(data.length);

                for(var i = 0; i < data.length; i++){
                    //合并name列
                    var val = data[i].name;
                    if(i == 0) {
                        x = val;
                        count = 1;
                        myArray[0] = 1
                    } else {
                        if(val == x) {
                            count++;
                            myArray[startindex] = count;
                            myArray[i] = 0
                        } else {
                            count = 1;
                            x = val;
                            startindex = i;
                            myArray[i] = 1
                        }
                    }
                }
                return myArray;
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>
