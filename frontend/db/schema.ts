import { pgTable, integer, serial, varchar  } from "drizzle-orm/pg-core";



export const users = pgTable("users",{
    id: serial("id").primaryKey().notNull(),
    user_name: varchar("user_name",{length:100}).notNull().unique(),
    email: varchar("email",{length:255}).notNull(),
    password_hash: varchar("password_hash",{length:255}).notNull(),
    time_acc_created: integer("time_acc_created").notNull(),
});
