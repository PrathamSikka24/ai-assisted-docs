"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var matter = require("gray-matter");
var readMDXFilesFromDirectory = function (directoryPath) {
  try {
    var filenames = fs.readdirSync(directoryPath);
    var mdxFiles_1 = filenames.map(function (filename) {
      var filePath = path.join(directoryPath, filename);
      var fileContents = fs.readFileSync(filePath, "utf8");
      var _a = matter(fileContents),
        content = _a.content;
      return {
        filename: filename,
        content: content,
      };
    });
    return mdxFiles_1;
  } catch (error) {
    console.error("Error reading MDX files:", error);
    return [];
  }
};
// Example usage
var docsDirectoryPath = path.join(process.cwd(), "public", "docs");
var mdxFiles = readMDXFilesFromDirectory(docsDirectoryPath);
console.log(mdxFiles);
