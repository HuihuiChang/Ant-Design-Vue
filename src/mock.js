// 引进mockjs
const Mock = require('mockjs')
import moment from 'moment'
const Random = Mock.Random
const domain = 'http://testapi.com'
const url = 'http://getComment.com'
const code = 200

// 随机生成数据
const data = req => {
    console.log(req);

    const mockData = [{
        key: '1',
        name: 'John Brown',
        subject: 'Chinese',
        difficulty: 'Easy',
        score: '90'
    }, {
        key: '2',
        name: 'John Brown',
        subject: 'Math',
        difficulty: 'Difficult',
        score: '70'
    }, {
        key: '3',
        name: 'John Brown',
        subject: 'English',
        difficulty: 'Middle',
        score: '80'
    }, {
        key: '4',
        name: 'Jim Red',
        subject: 'Science',
        difficulty: 'Middle',
        score: '88'
    }, {
        key: '5',
        name: 'Jim Red',
        subject: 'Art',
        difficulty: 'Difficult',
        score: '80'
    }]

    return {
        code,
        mockData
    }
}

const cData = req => {
    console.log(req);

    const commentData = [{
        author: Random.name(),
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: 'Following the Ant Design specification, we developed a React UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces.',
        datetime: moment().subtract(6, 'hours').format('YYYY-MM-DD HH:mm:ss'),
        likes: 666,
        dislikes: 12,
        author1: Random.name(),
        avatar1: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content1: 'You can subscribe to this feed for new version notifications: https://github.com/vueComponent/ant-design-vue/releases.atom.',
        datetime1: moment().subtract(3, 'hours').format('YYYY-MM-DD HH:mm:ss'),
        likes1: 123,
        dislikes1: 6
    }, {
        author: Random.name(),
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: 'We recommend using npm or yarn to install，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.',
        datetime: moment().subtract(16, 'hours').format('YYYY-MM-DD HH:mm:ss'),
        likes: 888,
        dislikes: 66,
        author1: Random.name(),
        avatar1: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content1: 'If you are in a bad network environment，you can try other registries and tools like cnpm.',
        datetime1: moment().subtract(13, 'hours').format('YYYY-MM-DD HH:mm:ss'),
        likes1: 234,
        dislikes1: 20
    }, {
        author: Random.name(),
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: 'Add script and link tags in your browser and use the global variable antd.',
        datetime: moment().subtract(26, 'hours').format('YYYY-MM-DD HH:mm:ss'),
        likes: 456,
        dislikes: 36,
        author1: Random.name(),
        avatar1: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content1: 'We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack, which will make it easy to import only the parts of antd that you are using.',
        datetime1: moment().subtract(23, 'hours').format('YYYY-MM-DD HH:mm:ss'),
        likes1: 210,
        dislikes1: 48
    }]

    return {
        commentData,
        moment
    }
}

Mock.mock(`${domain}/api`, 'get', data);
Mock.mock(`${url}/api`, 'get', cData);
