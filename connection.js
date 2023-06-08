require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://sp48840:baba123@cluster0.5rqyyec.mongodb.net/?retryWrites=true&w=majority`, ()=> {
  console.log('connected to mongodb')
})
