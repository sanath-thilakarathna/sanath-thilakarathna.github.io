# Sanath Thilakarathna — Personal Website

Source for my personal website and blog.

- Live site: https://sanatht.me/
- Tech: Jekyll (GitHub Pages)

The site uses `sanatht.me` as its custom GitHub Pages domain, configured in
`CNAME` and `_config.yml`.

## Run locally (Docker)

This repo includes Docker Compose, so you can run the site without installing Ruby.

### Start the dev server

```bash
docker compose up
```

Then open:

- http://localhost:8080

### Open an interactive shell in the container

```bash
docker compose exec jekyll bash
```

One-off interactive container:

```bash
docker compose run --rm --service-ports jekyll bash
```

### Common Jekyll commands (inside container)

```bash
jekyll serve --host 0.0.0.0 --port 8080 --livereload --livereload-port 35729 --incremental
jekyll build
```

## Project structure

- Pages: `_pages/`
- Blog posts: `_posts/`
- Teaching materials: `_teaching/`
- Site configuration: `_config.yml`
- Data files (CV, socials, etc.): `_data/`
- Styles (Sass): `_sass/` → compiled to `assets/css/main.css`
- Static assets (images, PDFs, etc.): `assets/`

## Customization

- Theme colors: `_sass/_themes.scss` and `_sass/_variables.scss`
- Global styles: `_sass/_base.scss` and `_sass/_layout.scss`

## Deployment

This repo is deployed via GitHub Pages / GitHub Actions.

- Workflow: `.github/workflows/deploy.yml`
- Typically: pushing to the default branch triggers a build + deploy

## Credits

This site is based on the **al-folio** Jekyll theme:
https://github.com/alshedivat/al-folio

## License

See `LICENSE`.
