import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.taou.maimai',
  name: '脉脉',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      activityIds: 'com.taou.maimai.MainActivity',
      rules: [
        {
          matches: '[id="com.taou.maimai:id/skipBtnNormal"]',
          snapshotUrls: 'https://i.gkd.li/import/12840698',
        },
      ],
    },
    {
      key: 1,
      name: '开屏广告2',
      activityIds: 'com.taou.maimai.MainActivity',
      rules: [
        {
          matches: '[id="com.taou.maimai:id/skipBtnFullscreen"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13160742',
        },
      ],
    },
  ],
});
