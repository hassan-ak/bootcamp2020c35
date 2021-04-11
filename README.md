# bootcamp2020c35
- JAM-Stack

## Step13 Netlify Helloworld
Steps:-
- [Signup on Netlify](https://app.netlify.com/signup)
- Install Globally:
  - npm install -g yarn
  - npm install -g netlify-cli 
- Create project folder named "Step13_netlify_helloworld"
- Change to project directory:
- cd step13_netlify_helloworld
- Create hello world index.html file in public folder in the project directory.
- Create netlify.toml file
- You can also Start the Local Server:
  - netlify dev
  - Open in the Browser: http://localhost:8888
- Login to Netlify on Local Machine to start the publishing process:
  - netlify login
  - To publish on Netlify:
    - netlify deploy --prod
- Notice that the tool has created .netlify directory in your project folder.
- Now the site is published and you can copy the link given by the tool in the browser.
- Add .gitignore so that .netlify directory not pushed to github
- Bug: Currently there is some bug in the netlify dev tool, once the .netlify folder is created the dev tool stops working. Therefore, you will have to delete .netlify directory to restart netlify dev.
- Very Important Note:
  - For teaching purposed in order to help the students understand and manage, we have included all the steps in a single GitHub repo. For development we would suggest that single project should be in a single repo and that repo connected to Netlify, thus making development easy. Local develop will be done in netlify dev and the code is pushed it is automatically deployed on Netlify.

External Links:-
- [Watch this video](https://www.youtube.com/watch?v=RL_gtVZ_79Q&feature=youtu.be&t=812)
- [Read this Document](https://cli.netlify.com/netlify-dev/)
- [Published Web Site](https://step13-netlify-helloworld.netlify.app/)
- [Google Firebase](https://firebase.google.com/)
- [Vercel](https://vercel.com/)
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Battle of the Jamstack platforms — Netlify, Vercel, AWS](https://www.lambrospetrou.com/articles/battle-of-jamstack-platforms-netlify-vercel-aws/)
- [New to JAMstack? Everything You Need to Know to Get Started](https://snipcart.com/blog/jamstack)

## Step14 React Netlify Helloworld
Steps:-
- Install Globally:
  - npm install -g create-react-app
- Create React project:
  - npx create-react-app step14_react_netlify_helloworld
- Change to project directory:
  - step14_react_netlify_helloworld
- You can also Start the Local Server:
  - netlify dev
  - Open in the Browser: http://localhost:8888
- Create a netlify.toml file with publish directory build and build command
- yarn build
- Login to Netlify on Local Machine to start the publishing process (not required if you have already logged in in step 00):
  - netlify login
- To publish on Netlify:
  - netlify deploy --prod
- Notice that the tool has created .netlify directory in your project folder.
- Now the site is published and you can copy the link given by the tool in the browser.
- Add /.netlify in .gitignore before pushing to public repot

## Step15 Gatsby Netlify Helloworld
Steps:-
- gatsby new step15_gatsby_netlify_helloworld https://github.com/gatsbyjs/gatsby-starter-hello-world
- Change to project directory:
  - cd step15_gatsby_netlify_helloworld
- Start the Local Server:
  - netlify dev
  - Note that gatsby develop server is running on port 8000 and proxy server is running on port 8888.
  - Open the Browser:
    - http://localhost:8888
- Create a netlify.toml file with publish directory public and build command
- yarn build
- Login to Netlify on Local Machine to start the publishing process (not required if you have already logged in in step 13):
  - netlify login
- To publish on Netlify:
  - netlify deploy --prod
- Notice that the tool has created .netlify directory in your project folder. There is a bug in the tool, to redeploy again you will have to delete .netlify directory.
- Now the site is published and you can copy the link given by the tool in the browser.
- Add /.netlify in .gitignore before pushing to public repo

External Links:-
- [A Step-by-Step Guide: Gatsby on Netlify](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/)

## Step16 React Netlify Functions Helloworld
Steps:-
- Add a functions folder declaration in netlify.toml file
- Give the following command to create a function:
  - netlify functions:create hello
- Edit the function
- Now start the Local Server:
  - netlify dev
- Open in the Browser:
  - http://localhost:8888
  -Note that three servers are running. Server for Gatsby, Server for Functions, and a proxy Server. 
- Create a netlify.toml file with publish directory public and build command
  - yarn build
- Login to Netlify on Local Machine to start the publishing process (not required if you have already logged in in step 13):
  - netlify login
- To publish on Netlify:
  - netlify deploy --prod
- Notice that the tool has created .netlify directory in your project folder.
- Now the site is published and you can copy the link given by the tool in the browser.
- Add /.netlify in .gitignore before pushing to public repo

External Links
- [Watch video](https://www.youtube.com/watch?v=RL_gtVZ_79Q&feature=youtu.be&t=1376)
- [Read](https://docs.netlify.com/functions/build-with-javascript/)
- [Read](https://github.com/netlify/cli/blob/master/docs/netlify-dev.md#netlify-functions)
- [Watch](https://www.youtube.com/watch?v=bVmUHvVK8Hs)

## Step17 Gatsby Netlify Functions Helloworld
Steps:-
- Add a functions folder declaration in netlify.toml file
- Give the following command to create a function:
- netlify functions:create hello
- Edit the created function
- Add useEffect hook in index.tsx
- You can also Start the Local Server:
- netlify dev
- Note that there are three servers running on local host, Functions server is listening on port 52810, Gatsby server running on port 8000, and proxy server running at port 8888
- Open in the Browser:
  - http://localhost:8888
- Create a netlify.toml file with publish directory public and build command
- yarn build
- Login to Netlify on Local Machine to start the publishing process (not required if you have already logged in in step 13):
  - netlify login
- To publish on Netlify:
- netlify deploy --prod
- Notice that the tool has created .netlify directory in your project folder.
- Now the site is published and you can copy the link given by the tool in the browser.
- Add /.netlify in .gitignore before pushing to public repo

External Links
- [Using Netlify Functions with Gatsby](https://joshwcomeau.com/gatsby/using-netlify-functions-with-gatsby/)
- [Watch video Announcing Netlify Dev](https://www.youtube.com/watch?v=RL_gtVZ_79Q&feature=youtu.be&t=1376)
