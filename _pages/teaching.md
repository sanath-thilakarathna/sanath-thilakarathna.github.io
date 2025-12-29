---
layout: page-2
permalink: /teaching/
title: Teaching
description: Materials for courses I teach or taught.
nav: true
nav_order: 5
---

<!-- pages/teaching.md -->
<p>
  Here you’ll find teaching materials and course resources.
  Items are ordered by <code>importance</code> (lower means higher priority).
</p>

<div class="teaching">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized teaching -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_teaching = site.teaching | where: "category", category %}
  {% assign sorted_teaching = categorized_teaching | sort: "importance" %}
  {% assign featured_teaching = sorted_teaching | slice: 0, 6 %}
  {% assign remaining_teaching = sorted_teaching | slice: 6, 999 %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="col-md-12">
    <h3>Featured</h3>
    {% for project in featured_teaching %}
      {% include teaching_horizontal.liquid %}
    {% endfor %}

    {% if remaining_teaching and remaining_teaching.size > 0 %}
      <h3>More</h3>
      {% for project in remaining_teaching %}
        {% include teaching_horizontal.liquid %}
      {% endfor %}
    {% endif %}
    </div>
  </div>
  {% else %}
  <div class="col-md-12">
    <h3>Featured</h3>
    {% for project in featured_teaching %}
      {% include teaching.liquid %}
    {% endfor %}

    {% if remaining_teaching and remaining_teaching.size > 0 %}
      <h3>More</h3>
      {% for project in remaining_teaching %}
        {% include teaching.liquid %}
      {% endfor %}
    {% endif %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display teaching without categories -->

{% assign sorted_teaching = site.teaching | sort: "importance" %}
{% assign featured_teaching = sorted_teaching | slice: 0, 6 %}
{% assign remaining_teaching = sorted_teaching | slice: 6, 999 %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="col-md-12">
    <h3>Featured</h3>
    {% for project in featured_teaching %}
      {% include teaching_horizontal.liquid %}
    {% endfor %}

    {% if remaining_teaching and remaining_teaching.size > 0 %}
      <h3>More</h3>
      {% for project in remaining_teaching %}
        {% include teaching_horizontal.liquid %}
      {% endfor %}
    {% endif %}
    </div>
  </div>
  {% else %}
  <div class="rcol-md-12">
    <h3>Featured</h3>
    {% for project in featured_teaching %}
      {% include teaching.liquid %}
    {% endfor %}

    {% if remaining_teaching and remaining_teaching.size > 0 %}
      <h3>More</h3>
      {% for project in remaining_teaching %}
        {% include teaching.liquid %}
      {% endfor %}
    {% endif %}
  </div>
  {% endif %}
{% endif %}
</div>

