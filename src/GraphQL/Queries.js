import { gql } from "@apollo/client";

export const LOAD_HEADER=gql`
    query {
        headerSection {
        data {
            attributes {
            header {
            darkLogo {
                link,
                title,
                image {
                data {
                    attributes {
                    url,
                    alternativeText
                    }
                }
                }
            },
            lightLogo {
                link,
                title,
                image {
                data {
                    attributes {
                    url,
                    alternativeText
                    }
                }
                }
            },
            submenu {
                id,
                title,
                links {
                name,
                link,
                newTab,
                iconOnly,
                iconName
                }
            }
            }
            }
        }
        },
  }
`
export const LOAD_LOGO=gql`
query {
  headerSection {
    data {
        attributes {
        header {
        darkLogo {
            link,
            title,
            image {
            data {
                attributes {
                url,
                alternativeText
                }
            }
            }
        },
        }
        }
    }
  },
}
`

export const LOAD_HERO=gql` 
query {
    heroSection {
        data {
        attributes {
            hero {
            title,
            description,
            button {
                name,
                link,
                newTab
            },
            image {
                data {
                attributes {
                    url
                }
                }
            }
            }
        }
        }
    }
}
`
export const LOAD_MAIN_MENU=gql`
  query {
    mainMenu {
        data {
          attributes {
            menu {
              item {
                title
              }
            }
          }
        }
      },
      categories {
        data {
          attributes {
            title
          }
        }
      }
  }
`
export const LOAD_MAIN_CATEGORIES=gql`
  query getCategoriesByType($categoryType:String!) {
    categories(filters:{type:{eq:$categoryType}}) {
      data {
        id,
        attributes {
          title,
          image {
            data {
              attributes {
                 url,
                 alternativeText
              }
            }
          }
        }
      }
    }
  }
`

export const LOAD_CATEGORIES_FOR_SLIDER=gql`
  query getCategoriesInSlider {
    categoriesSlider {
      data {
        id,
        attributes {
          categories {
            data {
              attributes {
                title,
                image {
                  data {
                    attributes {
                      url,
                      alternativeText
                    }
                  }
                },
              products {
                data {
                  id,
                  attributes {
                    title,
                    price,
                    image {
                      data {
                        attributes {
                          url,
                          alternativeText
                        }
                      }
                    }
                  }
                }
               }
              }
            }
          }
        }
      }
    }
  }
`

export const LOAD_PRODUCT_BY_CATEGORY=gql`
  query getProductByCategoryId($iden:ID!){
    category(id:$iden){
        data {
          attributes {
            title,
            products {
              data {
                id,
                attributes {
                  title,
                  price,
                  image {
                    data {
                      attributes {
                        url,
                        alternativeText
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
  }
`

export const LOAD_INFO_CARDS=gql`
query getInformationCards {
  infoService {
    data {
      attributes {
        cards {
          title,
          subtitle,
          iconName
        }
      }
    }
  }
} 
`

export const LOAD_PRODUCTS_PAGINATION=gql`
query getProducts($page:Int) {
  products(pagination:{page:$page,pageSize:12})
    {
    data {
      attributes {
        title,
        price,
        categories {
          data {
            attributes {
              title
            }
          }
        }
        image {
          data {
            attributes {
              url
            }
          }
        },
        description
      }
    },
     meta {
      pagination {
        page
        pageSize
        total
        pageCount
      }
    }
  }
}
`

export const LOAD_PRODUCT_BY_ID=gql`
query getProducts($id:ID!) {
  product(id:$id) {
  data {
    id,
    attributes {
      title,
      description,
      quantity,
      price,
      image {
        data {
          id
          attributes {
            url,
            alternativeText
          }
        }
      }
      categories {
        data {
          id
        }
      }
    }
  }
}
}
`

export const SEARCH_PRODUCTS=gql`
query searchProduct($search: String!){
  products(filters:{
  or :[
    {title:{containsi:$search}}, 
    {description:{containsi:$search}}
  ]
  }){
    data {
      id,
      attributes {
        title,
        price,
        image {
          data {
            attributes {
              url,
              alternativeText
            }
          }
        }
      }
    }
  }
}
`

export const SEARCH_PRODUCTS_BY_CATEGORY=gql`
query searchProductByCategory($search: String!,$categoryId: ID!){
  category(id:$categoryId){
     data {
       attributes {
         title,
         products(
           filters:{
           or :[
             {title:{containsi:$search}}, 
             {description:{containsi:$search}}
           ]
           }
         ) {
           data {
            id,
             attributes {
              title,
              price,
              image {
                data {
                  attributes {
                    url,
                    alternativeText
                  }
                }
              }
             }
           },
           
         }
       }
     }
   }
 }
`

export const LOAD_FOOTER_INFO=gql`
  query {
    mainMenu {
        data {
          attributes {
            menu {
              item {
                title
              }
            }
          }
        }
      },
    headerSection {
          data {
              attributes {
              header {
              submenu {
                  id,
                  title,
                  links {
                  name,
                  link,
                  newTab,
                  iconOnly,
                  iconName
                  }
              }
              }
              }
          }
          },
    categories(
      filters:{
        type:{eq:"category"}}
    ){
      data {
        id,
        attributes {
          title,
          type
        }
      }
    }
  }
`

export const LOAD_PRODUCT_BY_ARRAY_CATEGORIES_ID=gql`
query getProductsByArrayCategories($arrayId:[ID!],$prodId:ID!){
  products(
    pagination:{start:0,limit:20},
    filters:{
      id:{notContainsi:$prodId},
      categories:{id:{in:$arrayId}}
    }
  ){
    data {
      id,
      attributes {
        title,
        price,
        image {
          data {
            attributes {
              url,
              alternativeText
            }
          }
        }
       }
    }
  }
}
`