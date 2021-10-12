if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
};

let config = {
    port: process.env.PORT,
    host: process.env.HOST,
}


module.exports = config