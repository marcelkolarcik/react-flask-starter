import { apiSlice } from './apiSlice'

const domain1Api = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    testServer: build.query({
      query: () => 'test/',
    }),
  }),
  overrideExisting: false,
})

export const { useTestServerQuery } = domain1Api