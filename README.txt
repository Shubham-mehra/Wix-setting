//first time new machine already existing repos in git and heroku
Install GIT . Heroku CLI , Node JS
git clone "Repo Name From Git "
heroku [this will install heroku in the CLI and give your email and password]
<Goto your Project Folder in CMD>
npm install [from the project folder]
git remote add heroku git@heroku.com:radiant-island-16688.git [this will add the heroku remote , you can name this anything other than heroku]
git remote -v [youcan see now both the git and the heroku remotes]
<Goto Git Bash to generate and add a public key>
ssh-keygen -t rsa
heroku keys:add
<Goto your project folder>
git push heroku master

//have an already existing project 
git init [go to the project foder and give this command]
create a remote repo in bitbucket [copy the url for the repo]
git remote add origin https://rajibgaru@bitbucket.org/rajibgaru/angular-node-seed.git [replace with the repo URL]
now you can follow the commands from add onwards below.
 

//subsequent commits
git pull
git add .
git commit -m "change comment"
git push origin master
git push heroku master