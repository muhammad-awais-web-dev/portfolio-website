import axios from "axios";
import projectsData  from "../data/projectsData";
import CertificationsData from "../data/CertificationsData";
import ServicesData from "../data/ServicesData";
import Skills from "../data/Skills";

const projectsText = JSON.stringify(projectsData, null, 2);
const certificationsText = JSON.stringify(CertificationsData, null, 2);
const servicesText = JSON.stringify(ServicesData, null, 2);

const defaultPrompt = `
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

Question: Give Greeting to the visitor

Instructions:. Be concise and to the point.
`;
export async function main(prompt = defaultPrompt) {
  try {
    console.log("loading...");
    const response = await axios.post("https://backend-for-apis.onrender.com/api/gemini", {
      prompt,
    });
    const answer = response.data.answer;
    console.log("Response received:", answer);
    return answer;
  } catch (error) {
    console.error(error.response ? error.response.data : error.message);
    return "Error fetching response";
  }
}
