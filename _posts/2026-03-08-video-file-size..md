---
layout: post
title: Why Video Editing Takes a Long Time Even When You Change Only a Few Frames
date: 2026-03-07 16:40:16
description: If you have ever edited a video and wondered why exporting takes so long even after changing only a few frames, the answer lies in how modern video compression works. This article explains in simple terms how frames, compression, and bitrate affect video editing and why small edits can require processing thousands of frames.
tags:
categories: Computer Science
featured: false
giscus_comments: true
---

If you have ever edited a video, you have probably experienced something confusing. You trim a small part, adjust a few frames, or add a short text overlay. Then you click **Export** expecting it to finish quickly. Instead, the software starts processing the entire video and takes several minutes or even hours.

Naturally the question comes to mind. _Why does the computer need to process the whole video when I only changed a tiny part of it?_

The reason becomes clear once we understand how videos are actually stored inside a computer.

# A Video Is Just Many Images

A video is simply a sequence of images called **frames** shown one after another very quickly.

Consider a common example.

Resolution: **1920 × 1080 (Full HD)**  
Frame rate: **30 frames per second**  
Duration: **10 minutes**

The total number of frames becomes

```id="1y7l4a"
30 × 600 = 18,000 frames
```

Each frame contains

```id="7j2m4q"
1920 × 1080 = 2,073,600 pixels
```

If each pixel uses **24-bit color** which means **3 bytes per pixel**, the size of a single frame is roughly

```id="o3r5zb"
2,073,600 × 3 ≈ 6 MB
```

So the total size of the video without compression would be

```id="2f1c0v"
6 MB × 18,000 ≈ 108 GB
```

That means a ten minute video would take more than **100 GB** of storage. Clearly this is not practical, so video files must be compressed.

# The Trick Used by Video Compression

Modern video formats such as **H.264** and **H.265** use a clever idea. Instead of storing every frame completely, they store only the **differences between frames**.

Think about a typical scene in a video. From one frame to the next, most of the image does not change. Maybe a person moves slightly or an object shifts a little, but the background often stays the same.

Because of this, video encoders store three kinds of frames.

I-frames which store the full image  
P-frames which store the difference from previous frames  
B-frames which store differences from both previous and next frames

A simplified sequence looks like this

```id="3n8ztt"
I → P → B → B → P → B → B → P
```

These frames are organized into structures called **GOPs**, which stands for **Group of Pictures**. A typical GOP may contain **30 to 250 frames**.

This technique reduces file size dramatically.

For example, a ten minute Full HD video might look like this

|Codec|Bitrate|File Size|
|---|---|---|
|H.264|about 8 Mbps|about 600 MB|
|H.265|about 5 Mbps|about 375 MB|

Compared to the raw size of **108 GB**, this is a huge reduction.

# Why a Small Edit Requires Reprocessing

Now imagine a simple sequence of frames like this

```id="3v4m9g"
Frame 1 : I-frame
Frame 2 : P-frame
Frame 3 : B-frame
Frame 4 : B-frame
Frame 5 : P-frame
```

Suppose you edit **Frame 3**.

Because the other frames depend on each other, the encoder cannot simply replace that single frame. Some of the surrounding frames rely on information from it.

So the editor may need to recompute something like

```id="a6x8td"
Frames 1 to 5
```

That is why exporting usually follows a process like this

```id="p7xq9u"
Decode the original video
Apply the edits
Recalculate frame relationships
Encode the video again
Write the final file
```

The encoding step requires a lot of computation, which is why exporting takes time.

# What Bitrate Means

Another important idea in video processing is **bitrate**.

Bitrate describes **how much data is used to represent one second of video**. It is usually measured in **megabits per second (Mbps)**.

For example

```id="k9t4pw"
Bitrate = 8 Mbps
```

This means the video uses about

```id="t5e3ya"
8,000,000 bits per second
≈ 1 MB per second
```

If the video lasts **600 seconds** which is ten minutes

```id="n8u1vj"
File size = (8 × 600) / 8
          = 600 MB
```

Higher bitrate means more information is stored each second. This usually improves visual quality but increases file size.

Lower bitrate reduces file size but may introduce compression artifacts.

# The Formats Professionals Use for Editing

Professional editors often convert videos into special formats designed for editing. These are called **intra-frame codecs**.

Some common examples are

Apple ProRes  
DNxHD or DNxHR  
CineForm

In these formats each frame is stored independently.

```id="f3b6dr"
Frame 1 stored completely
Frame 2 stored completely
Frame 3 stored completely
```

This makes editing much easier because modifying one frame does not affect the others.

The downside is that the files become much larger.

|Codec|Bitrate|
|---|---|
|H.264|about 8 Mbps|
|ProRes 422|about 150 Mbps|

For a ten minute video the file sizes might be

|Codec|File Size|
|---|---|
|H.264|about 600 MB|
|ProRes|about 11 GB|

So editing formats can be **15 to 20 times larger**.

# What Happens in Large Video Productions

In high resolution projects the numbers grow quickly.

Consider **4K video at 60 frames per second using ProRes 422**

```id="8s1yka"
Bitrate ≈ 735 Mbps
Duration = 1 hour
```

The file size becomes

```id="d4e6zs"
(735 × 3600) / 8 ≈ 330 GB
```

If a project contains ten hours of footage

```id="6p2a8b"
330 GB × 10 ≈ 3.3 TB
```

That is why professional studios use very large RAID storage systems.

# The Workflow Editors Usually Follow

Most professional editing workflows combine both approaches.

```id="x4g7nh"
Camera records video using H.264 or H.265
Convert the footage to an editing format such as ProRes
Edit the project smoothly
Export the final video in H.264 or H.265
```

This approach allows editors to work efficiently while still producing compressed files suitable for distribution.

# The Core Trade-Off

Video technology always involves a balance between two things.

```id="y2j9fc"
Better compression and smaller files
Easier editing and faster processing
```

Highly compressed videos are efficient for storage and streaming, but they make editing more computationally demanding. Formats that are easy to edit require much more storage space.
