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
    deleteReservation: builder.mutation({
        query: ({id}) => ({
          url: `/reservations/${id}`,
          method: "DELETE",
          headers:{
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem(TOKEN_ID)}`,
          },
        }),
        invalidatesTags: ["reservations"],
      }),
    

    
  }),
});

export const { useGetReservationsQuery, useDeleteReservationMutation} = reservationsApi;