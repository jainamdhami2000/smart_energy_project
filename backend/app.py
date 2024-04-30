from flask import Flask
import getpass
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage, SystemMessage

os.environ["GOOGLE_API_KEY"] = "AIzaSyDEfPOFT7Q1xRlVDYvX2sKMR9zeaVE2SXs"

import requests
from IPython.display import Image


app = Flask(__name__)

@app.route('/')
def home():
    llm = ChatGoogleGenerativeAI(model="gemini-pro")
    #Messages with System messages
    #1. Human message
        # Refigerator, Furnace, Microwave
        # Date, Month

    llm = ChatGoogleGenerativeAI(model="gemini-pro", convert_system_message_to_human=True)
    result = llm.invoke(
        [
            SystemMessage(content="you will be given expected and actual energy usage of some appliances for a particular day and month." \
            "Based on the above scenario, give an output to the user highlighting the economical advantage or disadvantage based on their actual use vs expected." \
            "Also highlight the ecological benefit/harm of the current actual use vs expected on environmental factors solely based on the impact user's usage will have.. Do not use numbers for ecological part. Quantify the economic savings."\
            "Also, only give user personalized recommendations and steps regarding how to use save energy for appliances which consumed more energy than expected. Commend them in recommendation section if they saved energy. The response should have these titles - Usage Summary, Economic Advantage/Disadvantage , Ecological Benefit/Harm, Recommendations and Steps. Add emojis wherever possible"),
            HumanMessage(content="expected RefrigeratorUsage = 122KW , acutal RefrigeratorUsage = 110KW, expectedFurnace Usage = 26KW , actual FurnaceUsage = 30KW, expectedMicrowaveUsage = 6.1KW , actualMicrowaveUsage = 7KW, Day = 17, Month = May. Location = New York City. Per Watt usage = 23 cents"),
        ]
    )
    print(result.content)
    return result.content


@app.route('/image')
def image():
    #Image input
    
    image_url = "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba"
    content = requests.get(image_url).content
    Image(content)

    from langchain_core.messages import HumanMessage
    llm = ChatGoogleGenerativeAI(model="gemini-pro-vision")
    message = HumanMessage(
        content=[
            {
                "type": "text",
                "text": "Describe the image",
            },  
            {"type": "image_url", "image_url": image_url},
        ]
    )
    response = llm.invoke([message])
    return response.content

if __name__ == '__main__':
    app.run(debug=True)
