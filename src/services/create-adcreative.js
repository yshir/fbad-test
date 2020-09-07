const api = require('../lib/api');
const config = require('../config');

const { fb } = config;

module.exports = async ({
  account_id,
  child_attachments = [
    {
      image_hash: '8f0dc83ee36947886aac06a6266622a5',
      image_crops: {
        '100x100': [
          [150, 0],
          [1050, 900],
        ],
      },
      link: '',
    },
    {
      image_hash: '40fefcf8ed9e95626b6f32107919ac89',
      image_crops: {
        '100x100': [
          [150, 0],
          [1050, 900],
        ],
      },
      link: '',
    },
    {
      image_hash: '25fe8388d7d6f27b08ad6125e8c18807',
      image_crops: {
        '100x100': [
          [150, 0],
          [1050, 900],
        ],
      },
      link: '',
    },
  ],
  message = '「0:00を過ぎても解けない魔法をいつまでも」をコンセプトに童話をモチーフにしたアクセサリーをお届けしています。\nアクセサリーにはそれぞれ童話の一節が紐づけられています。',
  multi_share_end_card = false,
  multi_share_optimized = false,
}) => {
  return await api.post(`act_${account_id}/adcreatives`, {
    object_story_spec: {
      instagram_actor_id: fb.instagram_actor_id,
      page_id: fb.page_id,
      link_data: {
        child_attachments,
        message,
        multi_share_end_card,
        multi_share_optimized,
      },
    },
    portrait_customizations,
  });
};
