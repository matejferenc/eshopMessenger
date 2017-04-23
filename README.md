# eshopMessenger

1. Create Facebook app
    1. Add App Page (existing with the same name or new) in Settings -> Advanced
    2. Click + Add Product and select Messenger
        1. Get page access token and remember it
        2. Setup Webhooks
            1. Callback URL = https://www.goodreservation.com:6443/webhook
            2. Set Verify Token and remember it
3. Create Jenkins job
    1. Project url = https://github.com/matejferenc/eshopMessenger.git/
    2. Source Code Management - Repository URL = https://github.com/matejferenc/eshopMessenger.git/
    3. Build Triggers = Build when a change is pushed to GitHub
    4. Build - Execute Shell = sudo /opt/deploy/eshopMessenger/commands/deploy.sh
4. In Github set the Webhook
    1. Settings
        1. DO NOT ADD: Webhooks -> http://modelzuzana.com:8381/github-webhook/
        2. DO ADD: Integration & services -> Jenkins (GitHub plugin)
5. Acquire page access token for the app
    1. First acquire short term token
        1. Go to https://developers.facebook.com/tools/explorer
        2. Choose your application
        3. Choose page access token
        4. Choose your page
        5. Click "Extend Access Token"
    2.

6. Add Checkbox Plugin to page
    1. URL of page must be whitelisted with Facebook app:
        POST https://graph.facebook.com/v2.9/me/messenger_profile?access_token=<TOKEN>
        {
          "whitelisted_domains":[
            "https://goodreservation.com:6443"
          ]
        }
        GET https://graph.facebook.com/v2.9/me/messenger_profile?fields=whitelisted_domains&access_token=<TOKEN>
