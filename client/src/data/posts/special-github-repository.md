---
title: Special Github Repository
date: 11-9-2020
summary: Spruce up your GitHub profile to let others know who you are and what you are interested in and working on in two easy step! Adding introductory text and HTML to your GitHub profile is as easy as creating a repository and a new README.
---

This tutorial will show you how to create a special GitHub repository and README that allows you to showcase any text or HTML that you would like to be displayed on your GitHub profile landing page.


## Typical GitHub Profile
![Typical repository](/static/images/special-github-repository/before.png)

Above is a screenshot of a typical GitHub profile. It has the user's basic information like name, title, profile stats, location and website. The main content in the Overview tab has the user's pinned repositories, contributions and activity overview. GitHub allows you to [customize what contributions are shown](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile) and [how private contributions are handled](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile). This guide will show you how to slot in the contents of a README file above the Pinned section.


## Create a Personalized Section on Your Profile
Creating the personalized section can be completed in two easy steps:

1. Create a public repository whose name matches your username.
2. Populate the README file with whatever you'd like.

You can confirm it is working by navigating to your profile page. Below is an image that captures the confirguration of the new repository. Note how the repository name matches the owner name, jjfitzpatrick in this example.

![Repository configuration](/static/images/special-github-repository/setup.png)

Once the README is created you can add content using [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) or add HTML elements. For example, if you want to add the MIT License to your repository and display it using [Shield.io](https://shield.io) you can add the below code, just replace `username` and `repository` with your username.

```html
<img alt="GitHub" src="https://img.shields.io/github/license/:username/:repository">

```


## Final Result
![Improved repository with README displayed](/static/images/special-github-repository/after.png)

The above screenshot shows a simple example of what you can do and how it can improve your profile by letting others know more about you. The current version of my README can be found [here](https://github.com/jjfitzpatrick/jjfitzpatrick/blob/main/README.md).