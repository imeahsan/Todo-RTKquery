import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3500'}),
       tagTypes:['Todos'],
        endpoints: (builder) => ({
            // get
            getTodos: builder.query({
                query: () => '/todos',
                transformResponse: res => res.sort((a, b) => b.id - a.id),
                providesTags: ['Todos']
            }),
            //delete
            deleteTodo: builder.mutation({
                query: ({id}) => ({
                    url: `/todos/${id}`,
                    method: "DELETE",
                    body: id
                }),
                invalidatesTags:['Todos']
            }),
            // add
            addTodo: builder.mutation({
                query: (todo) => ({
                    url: '/todos',
                    method: "POST",
                    body: todo

                }),
                invalidatesTags:['Todos']
            }),
            //update
            updateTodo: builder.mutation({
                query: (todo) => ({
                    url: `/todos/${todo.id}`,
                    method: 'PATCH',
                    body: todo
                }),
                invalidatesTags:['Todos']
            })

        })
    }
)


export const {
    useGetTodosQuery,
    useUpdateTodoMutation,
    useAddTodoMutation,
    useDeleteTodoMutation


} = apiSlice
