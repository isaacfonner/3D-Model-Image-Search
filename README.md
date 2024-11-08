# 3D-Model-Image-Search
A Project for HackClub that uses AI to create a detailed description of your image, then uses thingiverse API to find matching 3d models
[Recording 2024-11-07 19-27-38 from Snipclip.webm](https://github.com/user-attachments/assets/6cfe5270-c7e1-43ef-9724-5943afe47b70)
# How this Works?
First, your image is converted into a Data URL, then it is sent to the PuterAI API, to generate a description of it using a carefully tuned prompt.
Next, it sends the description to the thingiverse search API to find a list of results.
Finally, it parses the json to a array, then returns the most relevant response.
