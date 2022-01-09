// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
//
// export const apiSlice = createApi({
//     // The cache reducer expects to be added at `state.api` (already default - this is optional)
//     reducerPath: 'api',
//     // All of our requests will have URLs starting with '/api'
//     baseQuery: fetchBaseQuery({baseUrl: '/api/'}),
//     // Cache management declaring an array of string tag names
//     provideTags: ['Test'],
//     // The "endpoints" represent operations and requests for this server
//     endpoints: builder => ({
//         // The `testServer` endpoint is a "query" operation that returns data
//         testServer: builder.query({
//             // The URL for the request is '/api/test/'
//
//             query: () => 'http://localhost:3000/api/test/',
//             // listing a set of tags describing the data in this query
//             // providesTags: ['Test'],
//
//         }),
//
//         // updateDevice: builder.mutation({
//         //     query: updatedDevice => ({
//         //         url: 'update_device/',
//         //         method: 'PATCH',
//         //         body: updatedDevice
//         //     }),
//         //     //invalidatesTags: (result, error, arg) => [{type: 'Log', id: arg.id}]
//         // }),
//
//     })
// })
//
// // Export the auto-generated hooks
// // useUpdateDeviceMutation => for CUD
// export const {
//     useTestServerQuery,
//
// } = apiSlice



/*In case we need to communicate with multiple domains or want to split the queries to
smaller chunks, we can create empty 'base' slice and then inject smaller slice to it
in this example in domain1Slice.js and domain2Slice.js and then in components, import
the hooks from domain1Slice.js or domain2Slice.js....

if that is not needed, comment the code bellow and uncomment the code above
* */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: () => ({}),
})