<template>
    <div id="app" style="margin-bottom:60px;margin-top:30px">
        <div style="margin-left:10%;width:80%;text-align:left">
            <a-list
                    class="comment-list"
                    :header="`${data.length} comments`"
                    itemLayout="horizontal"
                    :dataSource="data"
            >
                <a-list-item slot="renderItem" slot-scope="item">
                    <a-comment :author="item.author" :avatar="item.avatar">
                        <template slot="actions">
                            <span>
                                <a-tooltip title="Like">
                                    <a-icon type="like" theme='outlined'/>
                                </a-tooltip>
                                <span style="padding-left:8px">
                                    {{item.likes != null ? item.likes : 0}}
                                </span>
                            </span>
                            <span>
                                <a-tooltip title="Dislike">
                                    <a-icon type="dislike" theme="outlined"/>
                                </a-tooltip>
                                <span style="padding-left:8px;cursor:auto">
                                    {{item.dislikes != null ? item.dislikes : 0}}
                                </span>
                            </span>
                            <span>Replay to</span>
                        </template>
                        <p slot="content">{{item.content}}</p>
                        <a-tooltip slot="datetime" :title="item.datetime">
                            <span>{{item.datetime}}</span>
                        </a-tooltip>
                        <a-comment :author="item.author1" :avatar="item.avatar1" v-if="item.likes1 != null">
                            <template slot="actions">
                                <span>
                                    <a-tooltip title="Like">
                                        <a-icon type="like" theme="outlined"/>
                                    </a-tooltip>
                                    <span style="padding-left:8px;cursor:auto">
                                        {{item.likes1}}
                                    </span>
                                </span>
                                <span>
                                    <a-tooltip title="Dislike">
                                        <a-icon type="dislike" theme="outlined"/>
                                    </a-tooltip>
                                    <span style="padding-left:8px;cursor:auto">
                                        {{item.dislikes1}}
                                    </span>
                                </span>
                                <span>Replay to</span>
                            </template>
                            <p slot="content">{{item.content1}}</p>
                            <a-tooltip slot="datetime" :title="item.datetime1">
                                <span>{{item.datetime1}}</span>
                            </a-tooltip>
                        </a-comment>
                    </a-comment>
                </a-list-item>
            </a-list>
            <a-comment>
                <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                />
                <div slot="content">
                    <a-form-item>
                        <a-textarea :rows="4" @change="handleChange" :value="value" ></a-textarea>
                    </a-form-item>
                    <a-form-item>
                        <a-button
                                htmlType="submit"
                                :loading="submitting"
                                @click="handleSubmit"
                                type="primary"
                        >
                            Add Comment
                        </a-button>
                    </a-form-item>
                </div>
            </a-comment>
        </div>
        <router-link to="/"><a-button type="primary">Back</a-button></router-link>
    </div>
</template>

<script>
    import moment from 'moment';
    const Mock = require('mockjs')
    const Random = Mock.Random;
    import ATextarea from "ant-design-vue/es/input/TextArea";
    import AFormItem from "ant-design-vue/es/form/FormItem";
    export default {
        components: {AFormItem, ATextarea},
        data () {
            return {
                data: [],
                submitting: false,
                value: '',
                moment
            }
        },
        methods: {
            getComment: function () {
                this.$axios.get("http://getComment.com/api").then(res => {
                    this.data = res.data.commentData;
                    console.log(res.data.commentData);
                });
            },
            handleSubmit() {
                if (!this.value) {
                    return;
                }

                this.submitting = true

                setTimeout(() => {
                    this.submitting = false
                    this.data = [
                        {
                            author: Random.name(),
                            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                            content: this.value,
                            datetime: moment().format('YYYY-MM-DD HH:mm:ss'),
                        },
                        ...this.data,
                    ]
                    this.value = '';
                }, 1000)
            },
            handleChange(e) {
                this.value = e.target.value
            }
        },
        mounted() {
          this.getComment();
        }
    }
</script>
