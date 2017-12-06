import axios from 'axios'

const url = process.env.GRAPHQL_ENDPOINT

export default function graphql({ query, variables = {} }) {
    return axios({
        url,
        method: 'post',
        data: {
            query,
            variables,
        },
    }).then(({ data }) => data.data)
}