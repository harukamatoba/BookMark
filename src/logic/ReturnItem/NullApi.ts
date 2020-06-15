import UserInfo from '../item/bookInfo';

export default class NullApi {
    public static async getUserInfo(): Promise<UserInfo> {
        return {
            userId: 0,
            userName: '',
            bmListTitle: [''],
            bmList: [[]
        ],

        };
    }
}
