# eshopMessenger

1. Create Facebook app
2. Add App Page (existing with the same name or new) in Settings -> Advanced
3. Create Jenkins job
    1. Project url = https://github.com/matejferenc/eshopMessenger.git/
    2. Source Code Management - Repository URL = https://github.com/matejferenc/eshopMessenger.git/
    3. Build Triggers = Build when a change is pushed to GitHub
    4. Build - Execute Shell = sudo /opt/deploy/eshopMessenger/commands/deploy.sh
4. In Github set the Webhook
    1. Settings
        1. Webhooks -> http://modelzuzana.com:8381/github-webhook/
        2. Integration & services -> Jenkins (GitHub plugin)