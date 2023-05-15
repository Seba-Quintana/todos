import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateListService {

  url = "https://text-translator2.p.rapidapi.com/translate";

  async translateApi(content: string, id: number) {
    const response = await fetch(this.url,{
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "21b0fc5a69msh9b45f3303585286p129062jsnd0f8c79f022e",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      body: new URLSearchParams({
        source_language: "en",
        target_language: "es",
        text: content,
      }),
    });
    const responseData = await response.text();
    try {
      const json = JSON.parse(responseData);
      return json["data"].translatedText;
    } catch (e) {
      console.error(e);
      return "";
    }
  }
  
}
