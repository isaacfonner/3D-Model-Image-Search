        var modelText = undefined
        var modelName = undefined
        function convertImage() {
            const input = document.getElementById('imageInput');
            console.log("running")
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const dataURL = event.target.result;
                    console.log("Converted, sending to fuction")
                    console.log(dataURL)
                    findModel(dataURL);
                };
                reader.readAsDataURL(input.files[0]);
            } else {
                alert('Please select an image file first.');
            }
        }
        async function fetchModel(model) {
    const url = `https://api.thingiverse.com/search/${model}/?type=things&page=1&per_page=1&sort=relevant`;
    const apiKey = '6a316119bf8d82a1268b0f6d4b3cd470';
   
    
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
        function findModel(image) {
        const container = document.getElementById('image-container');
        container.innerHTML = ""
        const placeholder = document.createElement('img');
        placeholder.src = image;
        placeholder.width = 300;
container.appendChild(placeholder);
var loading = document.createElement('b');
loading.innerHTML = "Your 3D Model is being found. please wait 20-40 seconds. <br>"
container.appendChild(loading);
        puter.ai.chat(
            `If this image was made into a 3D model, what would you call it? Please only return the 3D model title, not anything else, and do not include the words "3D", or "Model" in the title.`, 
            image)
        .then((results)=>{
            modelName = results
            console.log(modelName.toString())
            modelSearch = encodeURIComponent(modelName)
            console.log(modelSearch)
            modelData = fetchModel(modelSearch).then(data => {
            console.log('Response data:', data);
            const hits = data.hits
            console.log(hits)
            const modelUrl=hits[0].public_url
            console.log(modelUrl)
            modelText = document.createElement('a');
            modelText.innerHTML = modelUrl
            modelText.href = modelUrl
            container.appendChild(modelText);
});
        });
        }
        
    