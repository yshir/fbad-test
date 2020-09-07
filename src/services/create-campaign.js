const api = require('../lib/api');

module.exports = async ({
  account_id,
  name = `created_at_${Date.now()}`,
  objective = 'BRAND_AWARENESS',
  status = 'PAUSED',
  special_ad_categories = [],
}) => {
  return await api.post(`act_${account_id}/campaigns`, {
    name,
    objective,
    status,
    special_ad_categories,
  });
};
