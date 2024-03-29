import * as fs from 'fs';
import * as path from 'path';
const matter = require('gray-matter');
interface MDXFile {
  filename: string;
  content: string;
}
const readMDXFilesFromDirectory = (directoryPath: string): MDXFile[] => {
  try {
    const filenames = fs.readdirSync(directoryPath);
    const mdxFiles = filenames.map((filename) => {
      const filePath = path.join(directoryPath, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const {  content } = matter(fileContents);

      return {
        filename,
        content,
        
      };
    });

    return mdxFiles;
  } catch (error) {
    console.error("Error reading MDX files:", error);
    return [];
  }
};

// Example usage
const docsDirectoryPath = path.join(process.cwd(), 'public\docs\createYourAccount.mdx');
const mdxFiles = readMDXFilesFromDirectory(docsDirectoryPath);
console.log(mdxFiles);
