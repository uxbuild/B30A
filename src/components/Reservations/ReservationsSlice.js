import { api } from "../../api/api";
import { TOKEN_ID } from "../../other/token";

const reservationsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReservations: builder.query({
      query: () => ({
        url: '/reservations',
        method: "GET",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem(TOKEN_ID)}`,
        },
      }),
      providesTags: ["reservations"],
    }),

    
  }),
});

export const { useGetReservationsQuery } = reservationsApi;