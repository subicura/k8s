import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";

import { lstatSync, readdirSync } from "fs";
import { join, normalize } from "path";

/**
 * Return true if source is a directory.
 * @param {string} source Directory.
 */
const isDirectory = (source) => lstatSync(source).isDirectory();

/**
 * Get directories for a given directory.
 * @param {string} source Directory.
 */
const getDirectories = (source) =>
  readdirSync(source)
    .map((name) => join(source, name))
    .filter(isDirectory);

/**
 * Recursive function that get list of all directories and subdirectories for
 * a given directory.
 * @param {string} source Root directory.
 */
const getDirectoriesRecursive = (source) => [
  normalize(source),
  ...getDirectories(source)
    .map(getDirectoriesRecursive)
    .reduce((a, b) => a.concat(b), []),
];

const convert = async (source, destination) => {
  const imageDirs = getDirectoriesRecursive(source);
  let imagesOptimized = 0;

  /**
   * Loop through all subfolders, and recursively run imagemin,
   * outputting to the same subfolders inside OUTPUT_DIR folder.
   */
  for (let i in imageDirs) {
    const dir = imageDirs[i];
    const dest = join(destination, dir).replace(source, "");
    console.log(dir, dest);

    const files = await imagemin([`${dir}/*.{jpg,png}`], {
      destination: dest,
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.9, 0.9],
        }),
      ],
    });

    await imagemin([`${dir}/*.{jpg,png}`], {
      destination: dest,
      plugins: [imageminWebp({ quality: 65 })],
    });

    files.forEach((f) => console.log(f.sourcePath));
  }
};

(async () => {
  await convert("src/.vuepress/public/imgs", "src/.vuepress/public/build/imgs");
  await convert("src/guide/imgs", "src/.vuepress/public/build/imgs");
  await convert("src/prepare/imgs", "src/.vuepress/public/build/imgs");
})();
