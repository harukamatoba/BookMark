export default interface BmList {
    ListId: number; // リストのID
    title: string;  // ブックマークのタイトル
    detail: string; // ブックマークの詳細
    URL: string;    // ブックマークのURL
    addDate: number;  // 追加日時(ex:20200607)
}
