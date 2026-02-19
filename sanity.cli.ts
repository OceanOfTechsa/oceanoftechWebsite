/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
// sanity.cli.ts
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: 'wl2jv5dqdrgca0rulv0hemlb', // your project ID
        dataset: 'production',                  // your dataset
    },
    deployment: {
        appId: 'wl2jv5dqdrgca0rulv0hemlb',     // keeps Studio deployment linked
    },
})
