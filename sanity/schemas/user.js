export default{
    name:"user",
    title:"User",
    type:"document",
    fields:[
        {
        name:"uName",
        title:"User Name",
        type:"string"
    },
    {
        name:"uImg",
        title:"User Image",
        type:"image"
    },{
        name:"services",
        title:"My Services",
        type:"array",
        of:[{type: "reference", to:[{type:"service"}]}]
    },
    {
        name:"address",
        title:"Supplier Address",
        type:"string"
    }
]
}