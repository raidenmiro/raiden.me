/* eslint-disable @typescript-eslint/no-explicit-any */
const adapter = ({
  storage,
  serialize = JSON.stringify,
  deserialize = JSON.parse,
}: {
  storage: Storage
  serialize?: any
  deserialize?: any
}) => {
  return {
    get<Done>(key: string): Done | null {
      const value = storageSupport() ? storage.getItem(key) : null
      const valueExist = value != null

      return valueExist ? (deserialize(value) as Done) : null
    },
    set<T>(key: string, value: T) {
      const storageEstablish = storageSupport()

      if (storageEstablish) {
        storage.setItem(key, serialize(value))
      }
    },
  }
}

const storageSupport = () => typeof window.localStorage !== 'undefined'

export const storage = adapter({ storage: localStorage })
