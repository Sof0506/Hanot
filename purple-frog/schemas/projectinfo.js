export default {
  name: 'projectInfo',
  title: 'ProjectInfo',
  type: 'document',
  fields: [
   { 
    name:"name",
    title:"Name",
    type:"string",
  },
  { 
    name:"projectImage",
    title:"Image",
    type:"image",
    options:{
      hotspot:true,
    }
  },
  { 
    name:"backgroundInformation",
    title:"BackgroundInformation",
    type:"string",
  },
  { 
    name:"projectPic",
    title:"ProjectPic",
    type:"image",
    options:{
      hotspot:true,
    }
  },
  { 
    name:"phoneNum",
    title:"PhoneNum",
    type:"string",
  },
  { 
    name:"email",
    title:"Email",
    type:"string",
  },
  { 
    name:"address",
    title:"Address",
    type:"string",
  },
  { 
    name:"socials",
    title:"Socials",
    type:"array",
    of:[{type:"reference",to:{type:"social"}}],
  },

    
  ],

  
}
