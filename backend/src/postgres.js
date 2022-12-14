import knex from 'knex'

export function postgresMiddleware() {
    const pg = new knex({
        connection: 'postgres://postgres:1234@postgres:5432/vehicles',
        client: 'pg'
    })

    return async (ctx, next) => {
        ctx._postgres = pg
        return await next()
    }
}

export function postgres(ctx) {
    return ctx._postgres
}