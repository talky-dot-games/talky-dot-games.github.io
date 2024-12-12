---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: main
title: Posts
postdate: October 29, 2024
tags: mkmn
author: sirmilkman
permalink: "/posts"
---



<div class="parent">

<div class="block">
</div>

<div class="block">
{% for post in site.posts %}
    {% if post.tags contains "public" %}
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>{{ post.postdate }} - {{ post.author }}
    {% endif %}
{% endfor %}
</div>

<div class="block">
</div>

</div>

<br>

