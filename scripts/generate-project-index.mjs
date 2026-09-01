import { readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const projectsDirectory = join(process.cwd(), 'public', 'projects')
const entries = await readdir(projectsDirectory, { withFileTypes: true })
const projectFolders = entries
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)
  .sort((first, second) => first.localeCompare(second, 'zh-Hant'))

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'])
const projects = await Promise.all(projectFolders.map(async (folder) => {
  const imagesDirectory = join(projectsDirectory, folder, 'images')
  const imageEntries = await readdir(imagesDirectory, { withFileTypes: true })
  const images = imageEntries
    .filter(entry => entry.isFile())
    .map(entry => entry.name)
    .filter(fileName => imageExtensions.has(fileName.slice(fileName.lastIndexOf('.')).toLowerCase()))
    .sort((first, second) => first.localeCompare(second, undefined, { numeric: true }))

  return { folder, images }
}))

await writeFile(
  join(projectsDirectory, 'index.json'),
  `${JSON.stringify(projects, null, 2)}\n`,
  'utf8'
)

console.log(`Generated project index with ${projectFolders.length} projects.`)
