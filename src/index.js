require('dotenv').config();

const config = require('./config');
const createCampaign = require('./services/create-campaign');
const createAdset = require('./services/create-adset');
const createAd = require('./services/create-ad');

const { fb } = config;

(async () => {
  console.log('run');

  const campaign = await createCampaign({ account_id: fb.account_id });
  console.log(`A campaign created: ${JSON.stringify(campaign)}`);
  const campaignId = campaign.id;

  const adset = await createAdset({ account_id: fb.account_id, campaign_id: campaignId });
  console.log(`An adset created: ${JSON.stringify(adset)}`);
  const adsetId = adset.id;

  const ad = await createAd({ account_id: fb.account_id, adset_id: adsetId });
  console.log(`An ad created: ${JSON.stringify(ad)}`);
  const adId = ad.id;

  console.log('done');
})();
