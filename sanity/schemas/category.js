export default {
    name:"category",
    title:"Categories",
    type:"document",
    fields:[
    {
        name:"catId",
        title:"Category Id",
        type:"string"
    },
    {
        name:"title",
        title:"Category Name",
        type:"string"
    },
    {
        name:"imgUrl",
        title:"Image Link",
        type:"image"
    },
    {
        name:"status",
        title:"Rank / Status",
        type:"string"
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
    ]
}