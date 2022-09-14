export const client = 'http://localhost:4000'

export const getCategories = `
    categories { 
        name
    }
`;

export const getCategory = `
    query getCategory($title: String!) {
        category(input: {title: $title}){
            products{
                id name inStock gallery
                brand
                prices {
                    currency {
                        symbol
                    }
                    amount
                }
                attributes{
                    name
                    type
                    items{
                        value
                    }
                }
            }
        }
    }
`

export const getProduct = `
    query getProduct($id: String!) {
        product(id: $id) {
            id name inStock gallery
            brand description
            prices {
                currency {
                    symbol
                }
                amount
            }
            attributes{
                name
                type
                items{
                    value
                }
            }
        }
    }
`

export const getCurrencies = `
    currencies {
        symbol label
    }
`

