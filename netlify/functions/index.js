// netlify/functions/index.js
const handler = require("../../api/index.js");

exports.handler = async (event, context) => {
  const req = {
    query: event.queryStringParameters || {},
  };
  const res = {
    setHeader: () => {},
    send: (body) => ({ statusCode: 200, body }),
    status: (code) => ({ send: (body) => ({ statusCode: code, body }) }),
  };

  return handler(req, res);
};
