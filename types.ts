
interface IGetParams {
    category: string;
    fields: Fields;
}

type Field = keyof Item;
type Fields = Array<keyof Item>

type Enclosure ={
    link:string;
    type:"image/jpeg" | "image/jpg" | "image/png" 
}
type Item = {
    title:string;
    pubDate:string;
    link:string;
    description:string;
    author:string;
    enclosure: Enclosure;
}

type NewsResponse = {
    status: string;
    feed: object;
    items: Item[]
}

export {IGetParams, NewsResponse,Field};