export default {
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    {
      name:'id',
      type:'string',
      title:'Collection Id'
    }
    ,
  {
    name:'nftCollectionName',
    title:'Name of NFT Collection',
    type:'string'
  },
    {
      name: 'title',
      title: 'Enter Title OF NFT Drop',
      type: 'string',
    },
    {
    name:'description',
    title:'Description',
      type:'string'
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
    {
      name:'address',
      title:"Address",
      type:'string'
    },
    {
      name: 'creator',
      title: 'Creator',
      type: 'reference',
      to: {type: 'creator'},
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type:'image',
      //options hotspot true?
    },
  ],
}
