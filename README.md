# 3D-Model-Image-Search
A Project for HackClub that uses AI to create a detailed description of your images using thingiverse API to find matching 3d models <br>
![Video Demo](https://cloud-j2ki5j0y1-hack-club-bot.vercel.app/0demo.gif)
# How this Works?
First, your image is converted into a Data URL, then it is sent to the PuterAI API, to generate a description of it using a carefully tuned prompt.
Next, it sends the description to the thingiverse search API to find a list of results.
Finally, it parses the json to a array, then returns the most relevant response.
