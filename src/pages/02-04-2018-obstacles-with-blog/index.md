---
path: /blogcreation
date: "2018-02-04"
title: "Obstacles I overcame creating this blog"
---

I did it!  I was able to create this blog site using Gatsby and React.  Along the way I bumped into a few road blocks, but I was able to successfully navigate through them.

The first problem I came across was missing my Sidebars when the page displayed.  This was an easy fix as all I need to do was add `export default Sidebar`.  It's nice when It's a simple debug.

The next issue I had when the posts were compiling.  The GraphQL queries (which I've never used before) were giving me an error message.  I was able to locate the issue in my markdown file, and corrected the `date` value which was the issue.

