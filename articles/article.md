---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
image: 'https://www.deutschland.de/sites/default/files/media/image/aufmacher-473209048.jpg'
preview: "Le 18, 19 et 20 juillet, plusieurs postes stratégiques de l’Assemblée nationale ont été attribués par les députés de la XVIIème législature. Tandis que le Rassemblement national (RN), dont les votes ont été changeants, ne s’est vu attribuer aucun de ces postes clés, le bloc central et le bloc de gauche en sont sortis renforcés, au prix d’alliances parfois chèrement payées."
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.