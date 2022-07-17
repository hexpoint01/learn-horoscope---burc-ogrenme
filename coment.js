const axios = require('axios');
const fs = require('fs');




function getcmments(burc){

    const url = `https://burc-yorumlari.herokuapp.com/get/${burc}/`;
    axios.get(url) .then(res => {
       console.log(res.data.burc.st);
    })


}

getcmments('aslan');






