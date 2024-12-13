import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'articles');

export function getSortedArticlesData() {
  // Get file names under /articles
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the article metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort articles by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}


export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith('.md')) // Filter to include only markdown files
    .map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.md$/, ''),  // Remove the `.md` extension
        },
      };
    });
}


export async function getArticleData(id) {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html) // Ajoute les balises HTML
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
