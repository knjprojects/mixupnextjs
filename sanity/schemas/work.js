export default {
    name:'work',
    title:'Work',
    type:'document',
    fields:[
        {
            name:'workName',
            title:'Company Name/ Employer',
            type:'string'
        },{
            name:'tasks',
            title:'Duties and Experience While Working',
            type:'array',
            of:[{type:'string'}]
        },
        {
            name:'workImage',
            title:'Work Image',
            type:'image'
        },
        {
            name:'workAddress',
            title:'Work Address',
            type:'string'
        },

    ]


}