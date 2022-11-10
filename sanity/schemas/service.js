export default{
    name:"service",
    title:"Services",
    type:"document",
    fields:[
        {
            name:"servName",
            title:"Service Name",
            type:"string"
        },
        {
            name:"servImg",
            title:"Service Image",
            type:"image"
        },
        {
            name:'servCat',
            title:'Category',
            type:'reference',
            to:[{type:'category'}]
        }
    ]
}