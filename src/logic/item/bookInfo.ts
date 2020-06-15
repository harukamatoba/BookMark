import BmList from '../item/bookMarkList';
export default interface UserInfo {
    userId: number;         // ユーザID
    userName: string;       // ユーザ名
    bmListTitle: string[];  // ブックマークリストのタイトル
    bmList: BmList[][];     // リストの中身
}
