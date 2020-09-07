const api = require('../lib/api');

module.exports = async ({
  account_id,
  campaign_id,
  name = `created_at_${Date.now()}`,
  optimization_goal = 'AD_RECALL_LIFT',
  billing_event = 'IMPRESSIONS',
  bid_amount,
  bid_strategy = 'LOWEST_COST_WITHOUT_CAP',
  daily_budget = 500,
  status = 'PAUSED',
  targeting = {
    age_min: 18,
    age_max: 65,
    device_platforms: ['mobile'],
    genders: [2],
    geo_locations: { countries: ['JP'] },
    publisher_platforms: ['instagram'],
    instagram_positions: ['stream', 'explore'],
  },
}) => {
  return await api.post(`act_${account_id}/adsets`, {
    campaign_id,
    name,
    optimization_goal,
    billing_event,
    bid_amount,
    bid_strategy,
    daily_budget,
    status,
    targeting,
  });
};

// daily_budget 1500
