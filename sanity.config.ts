import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import iphoneModel from './sanity/schema/iphoneModel';
import service from './sanity/schema/service';
import post from './sanity/schema/post';
import siteSettings from './sanity/schema/siteSettings';

export default defineConfig({
  name: 'default',
  title: 'iSimple',
  projectId: process.env.SANITY_PROJECT_ID || 'w4o960ve',
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: [iphoneModel, service, post, siteSettings],
  },
});