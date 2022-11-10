export default {
    name:"electronic",
    type:'document',
    title:"Electronics",
    fields:[
        {
            name:'tronic',
            type:'string',
            title:"Add Electronic Item"
        },{
            name:'tronicCat',
            type:'reference',
            to:{'type':'category'}
        }
    ]
}