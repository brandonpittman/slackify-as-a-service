// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const slackify = require("slackify-markdown");

export default (req, res) => {
  const result = slackify(req.query.markdown);
  console.log(result);
  res.statusCode = 200;
  res.send(`<pre>
${result}
</pre>`);
};
