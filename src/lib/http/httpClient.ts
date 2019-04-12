import { IHttpClient, Entity } from './iHttpClient'
import axios from 'axios'

export class HttpClient implements IHttpClient {
  async list(url: string): Promise<Entity[]> {
    const entities: Entity[] = await axios.get(url).catch(err => {
      throw new Error()
    })
    return entities
  }
}
