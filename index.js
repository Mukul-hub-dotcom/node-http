const fs=require('fs')
const http=require('http')


const server=http.createServer((req,res)=>{
    
    const url=req.url
    console.log(url)
    // handler
    if(req.url==="/"){
        res.end("It shows directories: data, src, public etc")
       
    }
    else if(req.url==="/public"){
        res.end("It  will show content of public directory")
       
    }
    else if(req.url==="/public/other"){
        res.end("It  will show content of other directory inside public and so on")
       
    }
})
server.listen(3000,()=>{
    console.log("server started on 3000")
})