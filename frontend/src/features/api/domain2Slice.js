import { apiSlice } from './apiSlice'

const domain2Api = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    testServer2: builder.query({
      query: () => 'https://api.quotable.io/random',
    }),
  }),
  overrideExisting: false,
})

export const { useTestServer2Query } = domain2Api