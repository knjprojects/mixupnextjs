export default{
    name:"item",
    title:"Items",
    type:"document",
    fields:[
        {
            name:"id",
            title:"Item Id",
            type:"string"
        },
        {
        name:"iName",
        title:"Item Name",
        type:"string"
    },
    {
        name:"itemImg",
        title:"Item Image",
        type:"image"
    },{
        name:"iTags",
        title:"Item Tags",
        type:"array",
        of:[{type: "reference", to:[{type:"category"}]}]
    },
    {
        name:"iPrice",
        title:"Item Price",
        type:"number"
    },{
        name:"ingredients",
        title:"Item Ingredients/Components",
        type:"array",
        of:[{type:"string"}]
    },{
        name:"itemRestId",
        title:"Restaurant Id",
        type:'reference',
        to:[{type:'restaurant'}]
    },
    {
        name:'desc',
        title:'Item Description',
        type:'string'
    },{
        name:'cat',
        type:'reference',
        to:{'type': 'category'},
        title:'Category'
    }
]
}