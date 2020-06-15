import UserInfo from '../item/bookInfo';

export default class BookInfoApi {
    public static async get(): Promise<UserInfo> {
        return {
            userId: 1229,
            userName: 'unkown',
            bmListTitle: ['hobby', 'work', 'study'],
            bmList: [[
                {ListId: 101, title: 'desmos', detail: 'グラフ作る', URL: 'https://www.desmos.com/', addDate: 20200303 },
                {ListId: 102, title: 'google', detail: '検索エンジン',
                    URL: 'https://www.google.com/?hl=ja', addDate: 20200303 },
                {ListId: 103, title: 'Deepl', detail: '翻訳',
                    URL: 'https://www.deepl.com/ja/translator', addDate: 20200303 },
                {ListId: 104, title: 'check.io', detail: 'python遊ぶ',
                    URL: 'https://py.checkio.org/', addDate: 20200303 },
            ],
            [
                {ListId: 201, title: 'git', detail: '', URL: 'https://github.com/', addDate: 20200303 },
                {ListId: 202, title: '', detail: '管理', URL: 'https://jp.heroku.com/', addDate: 20200303 },
                {ListId: 203, title: 'desmos', detail: 'グラフ作る', URL: 'https://www.desmos.com/', addDate: 20200303 },
            ],
            [
                {ListId: 301, title: 'desmos', detail: 'グラフ作る', URL: 'https://www.desmos.com/', addDate: 20200303 },
                {ListId: 302, title: 'desmos', detail: 'グラフ作る', URL: 'https://www.desmos.com/', addDate: 20200303 },
                {ListId: 303, title: 'desmos', detail: 'グラフ作る', URL: 'https://www.desmos.com/', addDate: 20200303 },
                {ListId: 304, title: 'desmos', detail: 'グラフ作る', URL: 'https://www.desmos.com/', addDate: 20200303 },
                {ListId: 305, title: 'desmos', detail: 'グラフ作る', URL: 'https://www.desmos.com/', addDate: 20200303 },
            ]],

        };
    }
}
