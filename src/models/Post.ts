import moment from "moment";

export class Post {
    type: 'news' | 'banner' = 'news';
    id: string = '';
    image: string = '';
    title: string = '';
    subTitle: string = '';
    text: string = '';
    isFavorite: boolean = false;
    timestamp: string = moment().toISOString();

    constructor(init: Partial<Post>) {
        Object.assign(this, init);
    }
}