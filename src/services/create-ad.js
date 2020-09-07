const api = require('../lib/api');

module.exports = async ({ account_id, adset_id }) => {
  return await api.post(`act_${account_id}/ads`, {
    adset_id,
  });
};
