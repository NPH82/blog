---
path: "/hello-world"
date: "2018-02-04"
title: "It's Time to Blog"
---

## Why Blog?
I enjoy the challenge of creating new projects, especially in the limited time I have outside of work.  I came across a post on [hackernoon](https://hackernoon.com/building-a-static-blog-using-gatsby-and-strapi-8b5acfc82ad8) which involved creating a static blog with Gatsby and Strapi.  Gatsby is a website framework for React.  It was simple to get up and running, and familiar to code since it uses JSX.  Strapi is a Node.js API Content Management Framework.  It allows for a quick set-up of an API with a friendly UI to navigate a project build. 

## Changing Direction
After creating and setting up a blog site using the above, I decided it was not the direction I wanted to go.  I did like the blog page I had created, but I wanted something else.  I searched for a different approach and found an article on [medium](https://medium.freecodecamp.org/how-to-build-a-react-and-gatsby-powered-blog-in-about-10-minutes-625c35c06481).  While it actually took me longer than 10 minutes, which is what the title suggested, I like this implementation a little better.  I'm able to create posts in a markdown file, which for some inexplicable reason I enjoy doing.  

## Challenges
Building this static blog site did not come without obstacles.  The first problem I came across was missing my sidebars when the page displayed.  This was an easy fix as all I need to do was add `export default Sidebar`.  It's nice when It's a simple debug.  Sometimes it is easy to forget the simple things.

The next issue I had when the posts were compiling.  The GraphQL queries (which I've never used before) were giving me an error message.  I was able to locate the issue in my markdown file, and corrected the `date` value which was the issue. 

## What's Next?
Over the coming weeks and months I intend to build and create a better site and experience.  I want to implement a comment area, and spruce up some of the UI/UX I currently have on the site.