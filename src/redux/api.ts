// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CountriesPaginated, Country, EditTrip} from "./types";

// Define a service using a base URL and expected endpoints
export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/countries/'}),
    endpoints: (builder) => ({
        getPaginatedCountries: builder.query<CountriesPaginated, { page: number, per_page: number }>({
            query: ({page, per_page}) => `?_page=${page}&_per_page=${per_page}&_sort=name.common`,
            providesTags: (res, error, arg) =>
                res
                    ? [
                        ...res?.data.map(({id}) => ({type: 'Countries' as const, id})),
                        {type: 'Countries', id: 'LIST'},
                    ]
                    : [{type: 'Countries', id: 'LIST'}],
        }),
        getCountryById: builder.query<Country, string>({
            query: (id) => `/${id}`,
            providesTags: (res, error, id) =>
                [{type: 'Countries' as const, id}],
        }),
        getVisitedCountries: builder.query<Country[], void>({
            query: () => `?is_visited=true`,
            providesTags: (res, error, arg) =>
                res
                    ? [
                        ...res?.map(({id}) => ({type: 'Countries' as const, id})),
                        {type: 'Countries', id: 'LIST'},
                    ]
                    : [{type: 'Countries', id: 'LIST'}],
        }),
        patchCountryTrip: builder.mutation<Country, EditTrip>({
            query: ({
                        country_id, ...args
                    }) => ({
                url: `/${country_id}`,
                method: 'PATCH',
                body: args,
            }),
            invalidatesTags: (res, error, {country_id}) => [{type: 'Countries', id: country_id}]
        }),

    }),
    tagTypes: [
        "Countries"
    ],
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetCountryByIdQuery,
    useGetVisitedCountriesQuery,
    useGetPaginatedCountriesQuery,
    usePatchCountryTripMutation,
} = countriesApi