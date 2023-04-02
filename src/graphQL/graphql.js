import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      user {
        id
        username
        name
        email
        firstName
        lastName
        databaseId
        description
        nicename
        jwtAuthToken
      }
    }
  }
`;
export const REGISTER_USER = gql`
  mutation registerUser(
    $username: String!
    $password: String!
    $email: String!
  ) {
    registerUser(
      input: { username: $username, email: $email, password: $password }
    ) {
      user {
        id
        name
        email
        firstName
        lastName
        description
        nicename
      }
    }
  }
`;
export const CATEGORY_QUERY = gql`
  query Category {
    productCategories {
      edges {
        node {
          id
          databaseId
          name
          image {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
export const PRODUCT_QUERY = gql`
  query Products {
    products {
      edges {
        node {
          ... on SimpleProduct {
            id
            title
            name
            description
            price
            databaseId
            image {
              mediaItemUrl
            }
            galleryImages {
              nodes {
                mediaItemUrl
              }
            }
          }
          ... on VariableProduct {
            id
            title
            name
            description
            databaseId
            price
            image {
              mediaItemUrl
            }
            galleryImages {
              nodes {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;
export const PRODUCT_DETAIL_QUERY = gql`
  query fetchDetailProduct($id: ID!) {
    product(id: $id) {
      ... on SimpleProduct {
        id
        name
        title
        price
        content
        databaseId
      }
      ... on VariableProduct {
        id
        name
        title
        price
        content
        databaseId
        featuredImage {
          node {
            uri
            mediaItemUrl
          }
        }
      }
      image {
        uri
        mediaItemUrl
      }
      galleryImages {
        nodes {
          mediaItemUrl
        }
      }
    }
  }
`;
export const SEARCH_PRODUCT_QUERY = gql`
  query Products($search: String) {
    products(where: { search: $search }) {
      edges {
        node {
          ... on SimpleProduct {
            id
            name
            title
            price
            content
            databaseId
            image {
              mediaItemUrl
            }
            galleryImages {
              nodes {
                mediaItemUrl
              }
            }
          }
          ... on VariableProduct {
            id
            name
            title
            price
            content
            databaseId
            image {
              mediaItemUrl
            }
            galleryImages {
              nodes {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;
export const PRODUCTS_BY_CATEGORY = gql`
  query GetCategoryProducts($categoryIdInt: Int!) {
    products(where: { categoryId: $categoryIdInt }) {
      edges {
        node {
          ... on SimpleProduct {
            id
            title
            name
            description
            databaseId
            price
            image {
              mediaItemUrl
            }
            galleryImages {
              nodes {
                mediaItemUrl
              }
            }
          }
          ... on VariableProduct {
            id
            title
            name
            description
            databaseId
            price
            image {
              mediaItemUrl
            }
            galleryImages {
              nodes {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  }
`;
export const PRODUCT_IMAGES_QUERY = gql`
  query ProductImages($productId: ID!) {
    product(id: $productId) {
      galleryImages {
        edges {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
export const REVIEW_PRODUCT = gql`
  mutation WriteReview(
    $rating: Int!
    $author: String!
    $content: String!
    $authorEmail: String!
    $commentOn: Int!
  ) {
    writeReview(
      input: {
        rating: $rating
        author: $author
        content: $content
        commentOn: $commentOn
        authorEmail: $authorEmail
      }
    ) {
      rating
    }
  }
`;
export const REVIEW_QUERY = gql`
  query MyQuery($id: ID!) {
    product(id: $id) {
      reviews {
        edges {
          rating
          node {
            date
            content
            id
            databaseId
            author {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;
export const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    sendPasswordResetEmail(input: { username: $email }) {
      success
    }
  }
`;
export const MY_REVIEW = gql`
  query PRODUCTS($userEmail: String) {
    products {
      edges {
        node {
          reviews(where: { authorEmail: $userEmail }) {
            edges {
              rating
              node {
                date
                content
                databaseId
                id
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
          id
        }
      }
    }
  }
`;
