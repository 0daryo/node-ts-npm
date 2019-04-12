import { HttpClient } from '../../../lib/http/httpClient'
import { IBrand, BrandEntity } from './iBrand'

export class Brand implements IBrand {
  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient
  }
  ENDPOINT = 'https://brand-service-mock-dot-pj-station-dev.appspot.com/brands'
  list = async (): Promise<BrandEntity[]> => {
    return await this.httpClient.get(this.ENDPOINT).catch()
  }
}
