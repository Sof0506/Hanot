export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
     { 
      name:"fullname",
      title:"FullName",
      description:"Name of the Member",
      type:"string",
    },
    { 
        name:"role",
        title:"Role",
        description:"Role of the Member",
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
    
    ],
  
    
  }
  