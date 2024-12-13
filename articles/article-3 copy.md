---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
image: 'https://www.deutschland.de/sites/default/files/media/image/aufmacher-473209048.jpg'
preview: "Le 18, 19 et 20 juillet, plusieurs postes stratégiques de l’Assemblée nationale ont été attribués par les députés de la XVIIème législature. Tandis que le Rassemblement national (RN), dont les votes ont été changeants, ne s’est vu attribuer aucun de ces postes clés, le bloc central et le bloc de gauche en sont sortis renforcés, au prix d’alliances parfois chèrement payées."
---

**When to Use Static Generation v.s. Server-side Rendering**

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.