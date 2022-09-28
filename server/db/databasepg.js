const {Client} = require('pg')

const client = new Client({
    host: "ec2-34-200-205-45.compute-1.amazonaws.com",
    user: "raztojdnrdaltv",
    port: 5432,
    password: "e7c2e11185c31fd782342ae1187d2a5e71598151b82be98fdb23115da296b61a",
    database: "d60cq5fggrrsv",
    ssl: {
        rejectUnauthorized: false,
    }
})

client.connect();


// testing code

client.query(`select * from test_table`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})


