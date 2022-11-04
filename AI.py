import openai

openai.api_key = "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"

response = openai.Image.create(
    prompt=input("Enter details: "),
    n=1,
    size="1024x1024"
)

image_url = response["data"][0]["url"]

with open("image.txt", 'w') as f:
    f.write(image_url)