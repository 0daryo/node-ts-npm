import { Entity } from '../../entity/Brand'

export interface IHttpClient {
  Get: (url: string) => Entity
}

export { Entity }
