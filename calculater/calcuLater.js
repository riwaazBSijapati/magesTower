const express = require('express');
const bodyParser=require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/calcuLater.html')
});

app.post('/',(req,res)=>{
    const opr = req.body.operation;
    const n1=Number(req.body.firstNum);
    const n2=Number(req.body.secondNum);
    let retVal=""
    let oper=""

    switch(opr){
        case 'mul':
            retVal=(n1*n2).toString()
            oper="product";
            break;
        case 'div':
            retVal=(n1/n2).toString()
            oper="quotient";
            break;
        case 'sub':
            retVal=(n1-n2).toString();
            oper="difference";
            break;
        case 'add':
            retVal=(n1+n2).toString();
            oper="sum";
            break;}
    res.render('computation',{op:oper, re:retVal})
});
app.listen(3000, () => {console.log('Serving is running in 3000.')});