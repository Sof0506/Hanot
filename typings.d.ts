interface SanityBody{
    _createdAt:string;
    _id:string;
    _rev:string;
    _updatedAt:string;
}
interface Image{ 
    _type:"image";
    asset:{
        _ref:string;
        _type:"reference";
    }
}

export interface ProjectInfo extends SanityBody{
    _type:"projectInfo";
    address:string;
    backgroundInformation:string;
    email:string;
    role:string;
    projectImage:Image;
    name:string;
    phoneNum:string;
    projectPic:Image;
}
export interface service extends SanityBody{
    _type:"service";
    image:"Image",
    servicename:"servicename",
    servicedescription:"servicedescription",
}


export interface team extends SanityBody{
    _type:"team";
    image:"Image",
    role:"role",
    name:"fullname",
}



export interface Social extends SanityBody{
    _type:"social";
    title:string;
    url:string;
}