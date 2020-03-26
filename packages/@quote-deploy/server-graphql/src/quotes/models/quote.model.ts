import { Field, ObjectType, ID } from '@nestjs/graphql'

@ObjectType()
export class Quote {
  @Field(type => ID)
  id: number

  @Field()
  quote: string

  @Field()
  author: string
}
