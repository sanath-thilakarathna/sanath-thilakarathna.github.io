---
layout: post
title: Syncing Zotero Across My PC and iPad Without Paying for More Storage
date: 2026-08-25 09:00:00 +0530
description: A simple, low-cost way to sync Zotero PDFs across devices using a local WebDAV server in Docker, with a hostname to avoid IP changes on the network.
tags: [Zotero, WebDAV, Docker, self-hosting, iPad, Windows, productivity]
categories: Programming
featured: false
pretty_table: true
---

A few days ago, I wanted a way to keep my Zotero library synchronized between my PC and iPad without paying for additional Zotero storage. Most of my library consists of PDFs, so paying for extra cloud storage did not make much sense for my use case.

After some research, I found that Zotero supports WebDAV for attachment syncing. Instead of setting up a complex server, I used a Zotero WebDAV Docker image and ran it directly on my laptop.

## Why this setup made sense

I did not want to use a dedicated server, NAS, or VPS because I needed to keep my costs low. The WebDAV service simply runs in a Docker container on my laptop, and because I mainly use Zotero at home, I only needed it to be accessible on my local network.

This approach turned out to be a surprisingly good fit for my workflow. It is local, inexpensive, and enough for the kind of usage I actually need.

## How Zotero handles sync

One thing I learned during this process is that Zotero does not use WebDAV for everything. My library data—references, collections, tags, and notes—still syncs through Zotero, while the actual PDF files are stored and synchronized through my WebDAV server. Once I configured the same settings on both my PC and iPad, everything worked exactly as I hoped.

That distinction is important. I was not replacing Zotero's normal syncing system; I was simply offloading the heavy PDF attachments to a local WebDAV backend.

## Dealing with changing network addresses

One small problem I ran into was IP addresses. If the router restarts, the laptop's IP address can change, which means the WebDAV URL changes too. To avoid that, I set up mDNS and started using a hostname instead of an IP address.

My iPad recognized the hostname immediately, but Windows was not as cooperative. I eventually discovered that Windows does not include mDNS support by default, so I installed Apple Bonjour Print Services. After that, I could access my WebDAV server using a `.local` hostname and did not have to worry about changing IP addresses anymore.

This was one of those small but important details that changed the whole experience from frustrating to smooth.

## Why it felt simpler than expected

What surprised me most was how simple the entire setup turned out to be. When I first started looking into self-hosted Zotero syncing, I assumed I would need a dedicated machine or more complicated infrastructure. In reality, a Docker container running on my laptop was enough to keep my Zotero PDFs synchronized between my PC and iPad.

This was one of those projects that sounded more complicated than it actually was. For anyone already using Zotero on multiple devices and comfortable with Docker, a local WebDAV server is a straightforward solution that works remarkably well.

If you already keep most of your work at home and want a low-cost way to sync your PDF-heavy Zotero library, this setup is worth considering. It keeps things simple, reduces cloud costs, and gives you full control over the storage layer without adding a lot of complexity.