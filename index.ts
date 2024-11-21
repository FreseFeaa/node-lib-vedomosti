import {IGetParams, NewsResponse,Field} from './types'
const RssJsonApi = "https://api.rss2json.com/v1/api.json?rss_url"
const VedomostiAPI = "https://www.vedomosti.ru/rss/rubric"



async function getNews({category,fields}:IGetParams){
const url = `${RssJsonApi}=${VedomostiAPI}/${category}`
try{
    const response = await fetch(url);
    if (!response.ok){
        throw new Error('Server Error')
    }
    const  {items} = (await response.json() as NewsResponse)

    return items.map((item) => 
        Object.entries(item).reduce((result,[field,value])=> {
        if (!fields.includes(field as Field)){
            return result
        }
        return {...result,[field]:value};
     },{})
    );

} catch(error){
console.error(error)
}
}

(async () =>{
    const news = await getNews({category:'business',fields:["title","pubDate","link","description","author"]})
    console.log(news)
})();