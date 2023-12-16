import { gql } from "@apollo/client";

export const SAVE_ORDER=gql`
mutation addOrder(
    $name:String!,
    $address:String!,
    $phone:String!,
    $arrayProducts:[ComponentLayoutProductOrderInput!],
  ){
    createOrder(
      data: {
        name: $name,
        address: $address,
        phone: $phone,
        status: Processing,
        products: $arrayProducts
      }
    ){
      data {
        id
      }
    }
  }
`