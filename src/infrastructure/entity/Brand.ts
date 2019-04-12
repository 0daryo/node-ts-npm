import { Entity } from './iEntity'

export interface Brand extends Entity {
  id: number
  name: string
  description: string
  cover_image: string
  logo_image: string
  status: number
  created_at: string
  updated_a: string
}
