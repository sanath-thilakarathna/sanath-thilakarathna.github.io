---
layout: page
permalink: /downloads/computer-vision/
title: Computer Vision Downloads
description: Download course PDFs and resources.
nav: false
---

This page lists all PDF files available in the course downloads folder.

{% assign cv_pdfs = site.static_files | where_exp: "f", "f.path contains '/assets/pdf/computer_vision/'" | where: "extname", ".pdf" %}

{% if cv_pdfs and cv_pdfs.size > 0 %}
<ul>
  {% for f in cv_pdfs %}
    <li>
      <a href="{{ f.path | relative_url }}">{{ f.name }}</a>
    </li>
  {% endfor %}
</ul>
{% else %}
<p><em>No PDFs found yet.</em> Add files to <code>assets/pdf/computer_vision/</code> and they will appear here automatically.</p>
{% endif %}
