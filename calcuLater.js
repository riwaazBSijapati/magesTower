const express = require('express');

app.listen(3000,()=>{
    console.log('Serving is running in 3000.')
})

app.get('/',(req,res)=>{
    res.render('calcuLater')
})

app.get('/:opr:firstNum:secondNum',function(req,res){
    var n1=parseInt(req.params.firstNum)
    var n2=parseInt(req.params.secondNum)
    var retVal=(n1+n2).toString()
    res.render('computation',{result:retVal})
})

app.get('/:opr=sub:firstNum:secondNum',function(req,res){
    var n1=parseInt(req.params.firstNum)
    var n2=parseInt(req.params.secondNum)
    var retVal=(n1-n2).toString()
    res.render('computation',{result:retVal})
})

app.get('/:opr=div:firstNum:secondNum',function(req,res){
    var n1=parseInt(req.params.firstNum)
    var n2=parseInt(req.params.secondNum)
    var retVal=(n1/n2).toString()
    res.render('computation',{result:retVal})
})

app.get('/:opr=mul:firstNum:secondNum',function(req,res){
    var n1=parseInt(req.params.firstNum)
    var n2=parseInt(req.params.secondNum)
    var retVal=(n1*n2).toString()
    res.render('computation',{result:retVal})
})
