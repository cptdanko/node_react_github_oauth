# NodeJS BE and ReactJS FE for Github login

This repository aims to show how to create a react app that let's users login using their Github credentials using two seperate apps for backend and front-end.

# Github Oauth2
The solution presented in this repo, uses the [Github Oauth2 API]. To run the code presented in this repo, you would need to [register a new app] in Github console and obtain the Github client id and Github client secret. 

# How to run the project
You would need to run both the front-end and the backend individually.

## How to start the backend 
```
cd user-session
npm install 
vim .env
# add variables GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET
## press ESC :wq
node index.js
```
In the above process once you install the libs 
- create a .env file
- copy the id, secret from your Github dashboard where you registered your app 
- assign those values to your github variables in the .env file
- save the .env file

Note: I use vim, as it's my preference but you can use any text editor

## How to start the front-end
```
cd user-session-client
yarn install 
vim .env
# add variables GITHUB_CLIENT_ID
## press ESC :wq
yarn start
```
In the above process once you install the libs 
- create a .env file
- copy the id from your Github dashboard where you registered your app 
- assign the client id to your github variables in the .env file
- save the .env file

Note: I use vim, as it's my preference but you can use any text editor
# Any questions?
Hope you find this useful and if you like this repository, please give it a star.

# More great tutorials and code samples
I will be writing a detailed tutorial on how to work with this repo on my blog. Until then refer to [my blog] for other tutorials and "how-to" articles with detailed code samples.

If you like what I am doing, you can [buy me a coffee]

Click on the next link for more info on the [software engineering career journey] of the author.

[register a new app]: https://github.com/settings/applications/new
[Github Oauth2 API]: https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps
[AWS DynamoDB query by non-primary]: https://mydaytodo.com/how-to-query-dynamodb-with-non-primary-key-column/
[AWS DynamoDB how to]: https://mydaytodo.com/aws-dynamodb-typescript-how-to/
[frontend in the repo]: https://github.com/cptdanko/react_typescript_todo_list
[native iOS app]: https://apps.apple.com/au/app/my-day-to-do-smart-task-list/id1020072048
[line 16]: https://github.com/cptdanko/nodetypescriptcrudnotes/blob/main/src/db.ts#L16
[my blog]: https://mydaytodo.com/blog/
[line 17]: https://github.com/cptdanko/nodetypescriptcrudnotes/blob/main/src/db.ts#L17
[AWS docs]: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
[blogpost]: https://mydaytodo.com/blog/
[this blog]: https://mydaytodo.com/blog/
[buy me a coffee]: https://www.buymeacoffee.com/bhumansoni
[software engineering career journey]: https://mydaytodo.com/the-3-stages-of-a-software-engineering-career/
