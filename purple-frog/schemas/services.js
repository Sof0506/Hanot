export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
     { 
      name:"servicename",
      title:"ServiceName",
      type:"string",
    },
    { 
      name:"image",
      title:"Image",
      type:"image",
      options:{
        hotspot:true,
      }
    },
    { 
      name:"servicedescription",
      title:"ServiceDescription",
      type:"string",
    },     
    ],
  
    
  }
  