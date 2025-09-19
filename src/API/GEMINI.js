import axios from "axios";
import projectsData  from "../data/projectsData";
import CertificationsData from "../data/CertificationsData";
import ServicesData from "../data/ServicesData";
import Skills from "../data/Skills";

export async function main(userQuestion = "Give Greeting to the visitor") {
  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
  const baseURL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

  const projectsText = JSON.stringify(projectsData, null, 2);
  const certificationsText = JSON.stringify(CertificationsData, null, 2);
  const servicesText = JSON.stringify(ServicesData, null, 2);

  const prompt = `
You are a portfolio assistant for Muhammad Awais. 
Answer the following question using ONLY the provided data: 

Projects:
${projectsText}

Certifications:
${certificationsText}

Services:
${servicesText}

Skills:
${JSON.stringify(Skills, null, 2)}

Question: ${userQuestion}

Instructions:. Be concise and to the point.
`;

  try {
    console.log("loading...");
    const response = await axios.post(
      baseURL,
      {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": API_KEY,
        },
      }
    );

    const answer = response.data.candidates[0].content.parts[0].text;
    console.log("Response received:", answer);
    return answer;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    return "Error fetching response";
  }
}
