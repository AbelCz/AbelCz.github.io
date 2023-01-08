const fs = require('fs');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD',
  database: 'YOUR_DATABASE_NAME'
});

connection.connect();

connection.query('SELECT * FROM responses', (error, results) => {
  if (error) throw error;

  const title = results[0].title;
  const text = results[0].text;
  const metaDescription = results[0].meta_description;
  const metaTags = results[0].meta_tags;

  const page = `
    <html>
      <head>
        <title>${title}</title>
        <meta name="description" content="${metaDescription}">
        <meta name="keywords" content="${metaTags}">
      </head>
      <body>
        <h1>${title}</h1>
        ${text}
      </body>
    </html>
  `;

  fs.writeFile(`news/${title.replace(/\s+/g, '-')}.html`, page, (err) => {
    if (err) throw err;
    console.log('Page created!');
  });
});

connection.end();
