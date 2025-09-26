<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</head>
<style>
    *{
        font-family: "DM Mono", monospace
    }
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
</style>

# RageMP Boilerplate

### Introduction
This is a basic boilerplate, built using Typescript and Webpack as a compiler.

### Content
- Basic Typescript configuration.
- RageMP Community Types.
- Basic scripts to build and watch for development.


### Getting Started
To run be able to run this boilerplate, first you gotta install all the dependencies.

I recommend using pnpm:
`pnpm i`

Then, you have to install and add RageMP server files on the root directory.

#### How to get RageMP server files?
- First, you need to get into your RageMP root folder. Then, edit the `config.xml` file, and change the `branch` property from `prerelease` to `prerelease-server`. 
After that, you will be able to open RageMP, and the server files will be added to your root folder again. Don't forget to return the branch to `prerelease` once you are finish.
* Then, move the `server-files` folder to this boilerplate root.


After getting RageMP server files, you can finally run `pnpm run dev` to start the development script, and done!