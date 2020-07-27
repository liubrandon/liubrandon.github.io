---
layout: page
permalink: /categories/
title: Categories
---

  <div id="archives">
  {% for category in site.categories %}
    <div class="archive-group">
      {% capture category_name %}{{ category | first }}{% endcapture %}
      <div id="#{{ category_name | slugize }}"></div>
      <p></p>
      
      <h3 class="category-head" style="text-align:left; margin-bottom:6px;">{{ category_name }}</h3>
      <a name="{{ category_name | slugize }}"></a>
      {% for post in site.categories[category_name] %}
      <article class="archive-item">
        <h4 style="text-align:left; margin:0 0 4px 0!important;"><a href="{{ site.baseurl }}{{ post.url }}">{% if post.title and post.title != "" %}{{post.title}}{% else %}{{post.excerpt |strip_html}}{%endif%}</a> {{post.date | date: "%B %e, %Y"}}</h4>
      </article>
      {% endfor %}
    </div>
  {% endfor %}
  </div>