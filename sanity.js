import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

 const client = createClient({
    projectId: 'ob5auhgn',
    dataset: 'production',
    useCdn:true,
    apiVersion:'2023-03-29'

 })

const builder = imageUrlBuilder(client)
export const urlFor =  (source) => builder.image(source)



export const getCategories = async () => {
    const itmes =  await client.fetch('*[_type=="category"]').then(data=> {
        return data
    })
    return itmes
}


export const getCategoryItemById = async (id) => {
     const items = await client.fetch(`*[_type=="items" &&  $id in category[]->_id]`, {id:id})
    .then((data) => {return data})

    return items;

}   


export const getItemById = async (id) => {
    const item = await client
    .fetch(`*[_type=="items" &&  _id == $id ][0]`, {id})
    .then((data) => {
    return data;
});

   return item;

}   