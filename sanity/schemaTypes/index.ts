import { type SchemaTypeDefinition } from 'sanity'
import recentProject from './recentProject'
import technology from './technology'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [recentProject, technology],
}
