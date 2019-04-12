import { IHttpClient, Entity } from './IhttpClient'
import axios from 'axios'

class HttpClient implements IHttpClient {
  async Get(url: string) {
    const entity: Entity = await axios.get(url).catch(err => {
      throw new Error()
    })
    return entity
  }
}
