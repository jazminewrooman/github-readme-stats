// netlify/functions/pin.js
import pinHandler from "../../api/pin.js";

export const handler = async (event) => {
  // Objeto res que simula el de Express pero devuelve formato Lambda
  let statusCode = 200;
  const headers = {};
  let body = "";

  const res = {
    setHeader: (key, value) => {
      headers[key] = value;
    },
    send: (data) => {
      body = data;
      return { statusCode, headers, body };
    },
    status: (code) => {
      statusCode = code;
      return res; // permite encadenar .send()
    },
  };

  // Objeto req que simula el de Express
  const req = {
    query: event.queryStringParameters || {},
  };

  await pinHandler(req, res);

  return { statusCode, headers, body };
};
