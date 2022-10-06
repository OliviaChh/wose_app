
const { Pool, Client } = require("pg");

const credentials = {
    host: "ec2-34-200-205-45.compute-1.amazonaws.com",
    user: "raztojdnrdaltv",
    port: 5432,
    password: "e7c2e11185c31fd782342ae1187d2a5e71598151b82be98fdb23115da296b61a",
    database: "d60cq5fggrrsv",
    ssl: {
        rejectUnauthorized: false,
    }
};

// Connect with a connection pool.

async function poolDemo() {
  const pool = new Pool(credentials);
  const now = await pool.query("SELECT NOW()");
  pool.query("INSERT INTO test_table(id,name)values(3,'c')", (err,res)=>{
    console.log(err,res)
  });
  await pool.end();

  return now;
}



// Connect with a client.

async function clientDemo() {
  const client = new Client(credentials);
  await client.connect();
//   const now = await client.query("SELECT NOW()");
  const test_query = await client.query("SELECT * FROM test_table;");

  await client.end();

  return test_query;
}

// Use a self-calling function so we can use async / await.

(async () => {
  const poolResult = await poolDemo();
  console.log("Time with pool: " + poolResult.rows[0]["now"]);

  const clientResult = await clientDemo();
  console.log("Row counts in test_table: " + clientResult.rowCount);
})();