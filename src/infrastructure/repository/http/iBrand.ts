import { IHttp } from './iHttp'
import { Brand as BrandEntity } from '../../entity/Brand'

export interface IBrand extends IHttp {
  list: () => Promise<BrandEntity[]>
}

export { BrandEntity }
