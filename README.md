# 3D-Model-Image-Search
A Project that uses AI to create a detailed description of your images using thingiverse API to find matching 3d models <br>
Demo video: [Recording 2024-11-07 19-27-38 from Snipclip.webm](https://github.com/user-attachments/assets/cd1fc43c-0af4-4d1a-8e13-1d7d072bd301)
# How this Works?
First, your image is converted into a Data URL, then it is sent to the PuterAI API, to generate a description of it using a carefully tuned prompt.
Next, it sends the description to the thingiverse search API to find a list of results.
Finally, it parses the json to a array, then returns the most relevant response.
