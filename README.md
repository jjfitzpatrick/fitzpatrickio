# fitzpatrick.io
This repository serves to hold the code that runs my personal website. This site doubles as both a blog and a sort of portfolio for ideas and other personal projects. 

**Disclaimer**: This repository is not meant to be template project. It was created for my sole use. Though the repository can be cloned and run locally, you may encounter some issues if you attempt this route. Feel free to try it out! If you enjoy the codebase then I would recommend using it as __inspiration__ for your project.

## Running locally (at your own risk)
**Next.js client**
```git clone https://github.com/jjfitzpatrick/fitzpatrickio.git``` - clone the repository

```cd fitzpatrickio``` - navigate to the root directory

```npm install``` - install all npm packages

```npm start``` - start the development server on http://localhost:3000 - supports hot reloading on file save

```npm run build && npm start``` - build production assets and generate static content before starting production server on http://localhost:3000


**.NET Core API server**

__Coming soon__


## Layout
**Next.js client**

* Root found in /client

**.NET Core API server**

* Root found in /server
* More information __coming soon__

## Built and hosted using
* Client app
  - Hosting is provided by [Vercel](https://vercel.com/) at no cost.
  - Built with [Next.js](https://nextjs.org/)
  - UI pieced together with [grommet](https://v2.grommet.io/)
  - All other supporting packages can be found in [package.json](package.json)
* Web API
  - Built with [.NET Core](https://dotnet.microsoft.com/)
  - Hosting is provided by [Digital Ocean](https://m.do.co/c/75e983617e04).

## License 
This project is open source and available under the [MIT License](LICENSE).