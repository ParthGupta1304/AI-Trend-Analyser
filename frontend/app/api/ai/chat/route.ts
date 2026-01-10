import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  try {
    // Check API key first
    if (
      !process.env.OPENAI_API_KEY ||
      process.env.OPENAI_API_KEY === "your-openai-api-key-here"
    ) {
      return NextResponse.json(
        {
          error:
            "OpenAI API key is not configured. Please add your API key to the .env.local file.",
        },
        { status: 500 }
      );
    }

    // Initialize OpenAI client inside the function
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const body = await request.json();
    const { message, conversationHistory } = body;

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Build messages array for OpenAI
    const messages: any[] = [
      {
        role: "system",
        content:
          "You are SentiMax AI, an expert AI assistant for sentiment analysis and trend prediction. You help users analyze market trends, social media sentiment, and provide data-driven insights. Be helpful, accurate, and professional.",
      },
    ];

    // Add conversation history if provided
    if (conversationHistory && Array.isArray(conversationHistory)) {
      messages.push(...conversationHistory);
    }

    // Add current user message
    messages.push({
      role: "user",
      content: message,
    });

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const aiResponse = completion.choices[0].message.content;

    return NextResponse.json({
      response: aiResponse,
      usage: completion.usage,
    });
  } catch (error: any) {
    console.error("OpenAI API error:", error);

    if (error?.status === 401) {
      return NextResponse.json(
        { error: "Invalid OpenAI API key. Please check your credentials." },
        { status: 401 }
      );
    }

    if (error?.status === 429) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process AI request. Please try again." },
      { status: 500 }
    );
  }
}
