const {Client} = require('pg')

const client = new Client({
    host: "ec2-54-160-200-167.compute-1.amazonaws.com",
    user: "tmgdhnwkjscafs",
    port: 5432,
    password: "426d792d14e6ce63115b31dbe86f029371aa2961958e964b8bd0f99adda73130",
    database: "da3ve6mh7mar7o",
    ssl: {
        rejectUnauthorized: false,
    }
})

client.connect();

client.query(`select * from test_table`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})


