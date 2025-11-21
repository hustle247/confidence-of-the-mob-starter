import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;
    const storeId = process.env.GEMINI_FILE_SEARCH_STORE_ID;

    if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY is not configured' });
    }

    // If storeId is missing, we can still respond but without file search context,
    // or we can return an error. For now, let's warn but proceed if possible,
    // or fail if the user explicitly expects file search.
    // The prompt implies we WANT to use file search, so let's check for it.
    if (!storeId) {
        return res.status(500).json({ error: 'GEMINI_FILE_SEARCH_STORE_ID is not configured' });
    }

    try {
        const ai = new GoogleGenAI({ apiKey });

        // Configure the tool with the File Search Store ID
        const tools = [
            {
                fileSearch: {
                    fileSearchStoreNames: [storeId],
                },
            },
        ];

        const response = await ai.models.generateContent({
            model: 'gemini-1.5-flash', // Using a model that supports tools
            contents: [
                {
                    role: 'user',
                    parts: [{ text: message }],
                },
            ],
            config: {
                tools: tools,
            },
        });

        const text = response.response.text();

        // Extract citations if available (grounding metadata)
        // The SDK structure for this might vary, but typically it's in candidates[0].groundingMetadata
        // We'll just return the text for now, but could enhance with citations later.

        res.status(200).json({ reply: text });
    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Failed to generate response from Gemini' });
    }
}
