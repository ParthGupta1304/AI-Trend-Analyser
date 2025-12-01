import {
  pgTable,
  serial,
  text,
  timestamp,
  decimal,
  jsonb,
} from "drizzle-orm/pg-core";

// Market trends table
export const trends = pgTable("trends", {
  id: serial("id").primaryKey(),
  symbol: text("symbol").notNull(),
  name: text("name").notNull(),
  price: decimal("price", { precision: 20, scale: 8 }),
  change24h: decimal("change_24h", { precision: 10, scale: 2 }),
  volume: decimal("volume", { precision: 20, scale: 2 }),
  marketCap: decimal("market_cap", { precision: 20, scale: 2 }),
  sentiment: text("sentiment"), // positive, negative, neutral
  aiAnalysis: jsonb("ai_analysis"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Market data table
export const marketData = pgTable("market_data", {
  id: serial("id").primaryKey(),
  symbol: text("symbol").notNull(),
  timestamp: timestamp("timestamp").defaultNow(),
  open: decimal("open", { precision: 20, scale: 8 }),
  high: decimal("high", { precision: 20, scale: 8 }),
  low: decimal("low", { precision: 20, scale: 8 }),
  close: decimal("close", { precision: 20, scale: 8 }),
  volume: decimal("volume", { precision: 20, scale: 2 }),
});

export type Trend = typeof trends.$inferSelect;
export type NewTrend = typeof trends.$inferInsert;
export type MarketData = typeof marketData.$inferSelect;
export type NewMarketData = typeof marketData.$inferInsert;
