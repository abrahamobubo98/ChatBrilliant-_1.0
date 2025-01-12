import { query } from "./_generated/server";

export const current = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
 
        if (identity === null) {
            return null;
        }

        // Query the users table by the auth subject (user ID)
        const user = await ctx.db
            .query("users")
            .filter(q => q.eq(q.field("_id"), identity.subject.split("|")[0]))
            .first();
        return user;
    }
})