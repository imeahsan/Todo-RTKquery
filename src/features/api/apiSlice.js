import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


export const apiSlice = createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3500'}),
        endpoints: (builder) => ({
            // get
            getTodos: builder.query({
                query: () => '/todos',
            }),
            //delete
            deleteTodo: builder.mutation({
                query: ({id}) => ({
                    url: `/todos/${id}`,
                    method: "DELETE",
                    body: id
                })
            }),
            // add
            addTodo: builder.mutation({
                query: (todo) => ({
                    url: '/todos',
                    method: "POST",
                    body: todo

                })
            }),
            //update
            updateTodo: builder.mutation({
                query: (todo) => ({
                    url: `/todos/${todo.id}`,
                    method: 'PATCH',
                    body: todo
                })
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
