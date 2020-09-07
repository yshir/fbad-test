const fetch = require('node-fetch');
const config = require('../config');

const { fb } = config;

const url = 'https://graph.facebook.com/v8.0';
const baseParams = {
  access_token: fb.access_token,
};

exports.get = async (path, params = {}) => {
  const res = await fetch(`${url}/${path}?${new URLSearchParams({ ...baseParams, ...params })}`);
  return res.json();
};

exports.post = async (path, body = {}) => {
  const res = await fetch(`${url}/${path}`, {
    method: 'post',
    body: JSON.stringify({ ...baseParams, ...body }),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
};
