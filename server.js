const express = require('express')
const app = express()
const result_functions = require('./results.js');

app.get('/', (req, res) => {

  const result = [];
  for(let key in result_functions){
    result.push(result_functions[key]())
  }
  
  res.send(result);
})


app.listen(5000, () => console.log('Example app listening on port 5000!'))