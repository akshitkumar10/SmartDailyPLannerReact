import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAlkB1y7TgOis4C8H6EivDCxaOGbavQ92g";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

export default async function test_call(plan) {
    try {
        const prompt = "given the following plan of the day, identify each task. generate a json to create a gantt chart for this plan using react-google-charts. the start and end times should be in ISO 8601 format consider date as todays date. follow the following format [{id:id, name:name, start:start, end:end}]return only json and nothing else. plan: " + plan;
        const result = await model.generateContent(prompt);
         
        // Assuming result.response contains the text
        const text = await result.response.text(); 
        return text;
    } catch (error) {
        console.error("Error generating content:", error);
        throw error; // Re-throw the error for handling in the calling function
    }
}

export async function update_schedule(prev_plan, context) {
    try {
        const prompt = prev_plan + "the above json represents a Gantt chart of daily activites. given the following context, update this json. return only updated json and nothing else. context: " + context;
        const result = await model.generateContent(prompt);
        
        // Assuming result.response contains the text
        const text = await result.response.text(); 
        return text;
    } catch (error) {
        console.error("Error generating content:", error);
        throw error; // Re-throw the error for handling in the calling function
    }
}

