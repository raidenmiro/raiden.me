const createEditUrl = ({
  baseGithubRepo,
  dir,
  branch,
  file,
}: {
  baseGithubRepo: string
  dir: string
  branch: string
  file: string
}) => `${baseGithubRepo}/${dir}/blob/${branch}/${file}`

export const myGithubEditUrl = (file: string) =>
  createEditUrl({
    baseGithubRepo: 'https://github.com/raidenmiro/raiden.me',
    branch: 'main',
    dir: 'storage',
    file,
  })
