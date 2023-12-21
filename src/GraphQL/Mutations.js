import { gql } from "@apollo/client";

export const SAVE_ORDER=gql`
mutation addOrder(
    $name:String!,
    $address:String!,
    $phone:String!,
    $arrayProducts:[ComponentOsvaodaProductOrderInput!],
  ){
    createOrder(
      data: {
        name: $name,
        address: $address,
        phone: $phone,
        status: Procesando,
        products: $arrayProducts
      }
    ){
      data {
        id
      }
    }
  }
`