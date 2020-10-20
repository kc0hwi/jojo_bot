# jojo_bot
Discord bot that gets and posts random nsfw subreddit images to a channel

You'll need to add your token to an .env file

The list of subreddits can be found and edited in config/subreddits.js

The bot is currently configured to post a random image every day at 8 am and accepts requests in a specified channel.  

Known Issues:
I'll need to make the channel id a variable as well.
Duplicates are rare but still possible...probably needs tweaking
Occasionally, it still manages to produce an error when trying to find an image to post and I haven't found the issue yet (nor have I put any effort towards it).
