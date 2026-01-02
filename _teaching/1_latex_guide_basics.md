---
layout: page
title: LaTeX Guide - Basics
description: Teaching LaTex for Engineering and Scientific Documantation
img:
importance: 3
category: lec
giscus_comments: true
---

## Course Overview

This is a comprehensive LaTeX teaching course designed for engineering students. The materials and content presented here are the actual teaching resources I use in my courses to introduce students to professional technical document preparation.

## Introduction to LaTeX

LaTeX is a powerful typesetting system widely used for technical and scientific documents. This guide will teach you the fundamentals of LaTeX, from basic document structure to advanced formatting techniques. Whether you're writing your first technical report, thesis, or research paper, LaTeX provides the tools to create professional-quality documents with ease.

## Getting Started

To start using LaTeX, you have several options:

### LaTeX Editors

- **Overleaf** (Online): A cloud-based LaTeX editor with real-time collaboration features. Perfect for beginners as it requires no installation. Visit [www.overleaf.com](https://www.overleaf.com)
- **Offline Editors**:
  - **TeXstudio**: User-friendly desktop editor with built-in tools and viewers
  - **MikTeX**: Complete LaTeX distribution for Windows with integrated editor
  - **MacTeX**: Full LaTeX distribution for macOS
  - **TeX Live**: Comprehensive cross-platform LaTeX system

### Basic Document Example

LaTeX uses markup commands to format your document. Here's a simple example of a LaTeX document structure:

```latex
\documentclass{article}
\usepackage[utf-8]{inputenc}

\title{My First LaTeX Document}
\author{Your Name}
\date{\today}

\begin{document}

\maketitle

\section{Introduction}
This is my first LaTeX document!

\end{document}
```

You can copy this template into Overleaf or your offline editor and start modifying it immediately. Most editors provide live preview functionality to see your document rendered in real-time.

## Key Features

LaTeX offers numerous advantages for technical and scientific writing:

- **Professional Typography**: Create beautifully formatted documents with minimal effort
- **Mathematical Equations**: Write complex mathematical expressions easily with intuitive syntax
- **Bibliography Management**: Handle citations and references automatically using BibTeX
- **Cross-References**: Link to sections, figures, and tables throughout your document seamlessly
- **Version Control Friendly**: Plain text format works well with Git and other version control systems
- **Consistency**: Maintain uniform formatting across large documents automatically
- **Reproducibility**: Share source files and ensure documents render identically across different systems

## Document Structure

A basic LaTeX document consists of:

1. **Preamble**: Contains document class declaration and all imported packages. This section defines the overall document structure and includes custom settings.
2. **Body**: The actual content between `\begin{document}` and `\end{document}` where your text, equations, figures, and tables are placed.

Understanding this two-part structure is fundamental to mastering LaTeX.

## Common Commands

| Command                 | Purpose                                                 |
| ----------------------- | ------------------------------------------------------- |
| `\documentclass{}`      | Specifies document type (article, report, thesis, etc.) |
| `\usepackage{}`         | Loads additional packages for extended functionality    |
| `\section{}`            | Creates a section heading with automatic numbering      |
| `\subsection{}`         | Creates a subsection heading                            |
| `\textbf{}`             | Makes text bold for emphasis                            |
| `\textit{}`             | Makes text italic for emphasis                          |
| `\begin{equation}`      | Creates numbered mathematical equations                 |
| `\includegraphics{}`    | Inserts images into your document                       |
| `\cite{}`               | References bibliographic entries                        |
| `\label{}` and `\ref{}` | Create cross-references to sections and figures         |

## Download Resources

These are the exact teaching materials and examples I use to teach LaTeX in my courses. They include comprehensive guides, worked examples, and practical templates that students can use as references:

[Download LaTeX Guide PDF](../../assets/pdf/LaTeX_Guide.pdf){: .btn .btn-primary .mr-2}
[Download Example Files](../../assets/pdf/Sample_LaTeX_Document.zip){: .btn .btn-secondary}
