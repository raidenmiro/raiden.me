export const author = {
  nickname: 'raidenmiro',
  fullname: 'Robert Kuzhin',
}

export const websiteMeta = {
  title: (title: string) => `${title} | Robert Kuzhin`,
  description: (name = 'Robert Kuzhin') => `The personal site of ${name}`,
}
