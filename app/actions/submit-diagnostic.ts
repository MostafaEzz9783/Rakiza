"use server";

import fs from "fs/promises";
import path from "path";

export interface SubmissionData {
  companyStage?: string;
  primaryChallenge?: string;
  companyName?: string;
  executiveEmail: string;
  score?: number;
  formType: "diagnostic" | "waiting-list";
  values?: Record<string, number>;
}

export async function submitDiagnostic(data: SubmissionData) {
  try {
    const dataDir = path.join(process.cwd(), "data");
    
    // Ensure data directory exists
    await fs.mkdir(dataDir, { recursive: true });
    
    const filePath = path.join(dataDir, "submissions.json");
    
    let submissions: any[] = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      submissions = JSON.parse(fileContent);
    } catch (err) {
      // File does not exist or is empty
    }
    
    const newSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      ...data,
      createdAt: new Date().toISOString()
    };
    
    submissions.push(newSubmission);
    
    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf-8");
    
    console.log(`[Backend] New submission received: ${data.executiveEmail} (${data.formType})`);
    
    return { success: true, submission: newSubmission };
  } catch (error) {
    console.error("Failed to capture submission on backend:", error);
    return { success: false, error: "Server error, failed to process request." };
  }
}
