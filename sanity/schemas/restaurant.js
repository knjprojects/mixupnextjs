export default {
    name:'restaurant',
    title:'Restaurant',
    type:'document',
    fields:[
        {
        name: "restName",
        title: "Restaurant Name",
        type: "string"
    },
    {
        name: "restImg",
        title: "Restaurant Image",
        type: "image",
        options: {
            hotSpot:true,
        },
    },
    {
        name:"audience",
        title:"Audience",
        type:"array",
        of:[{type:"string"}]
    },{
        name:"worth",
        title:"Net Worth",
        type:"number"
    },
    {
        name:"restItems",
        title:"On Sale",
        type:"array",
        of:[{type: "reference", to:[{type:"item"}]}]
    },
    {
        name:"rating",
        title:"Enter Rating for 1-5 stars",
        type:"number",
        validation:(Rule)=>Rule.required().min(1).max(5).error("Please enter a number between 1 and 5")
    }

]
}