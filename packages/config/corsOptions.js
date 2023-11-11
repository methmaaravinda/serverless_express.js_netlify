const whiteList=[
    "http://localhost:3001", 
    "http://192.168.8.119:3001", 
    "https://startling-cactus-bb2189.netlify.app"
];
const corsOptions={
    origin:( origin, callBack )=>{
        if(whiteList.indexOf(origin)!=-1 || whiteList.indexOf(origin)==-1){
            callBack(null, true)
        }else{
            callBack(new Error("not allowed by cors ! "))
        }
    },
    credentials: true,
}

module.exports=corsOptions;