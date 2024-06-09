document.addEventListener('DOMContentLoaded', () => {


    const fetchData = async () => {
        try {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=MdpNcCBRERz6Qj8cjchyAbDYgJDLDYALu1HuGTw8');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displaydata(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const displaydata = (data) => {
        $('#nasa-body').html(
            `
            <h2>${data.title}</h2>
            <p>${data.explanation}</p>
            <p><a href="${data.url}" target="_blank">View Image</a></p>
            <img src="${data.url}" alt="${data.title}">
            `
        );
    };


    // Fetch a data when the page loads
    fetchData();
});
