import { Entity } from '../../infrastructure/entity/iEntity'

export interface IHttpClient {
  // get: (url: string) => Promise<Entity>
  list: (url: string) => Promise<Entity[]>
}

export { Entity }
