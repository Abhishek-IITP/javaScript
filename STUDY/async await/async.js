// Example of async function
async function fetchData() {
    try {
        // Simulating a delay using a promise with setTimeout
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("Data fetched!"), 2000);
        });

        // Wait for the promise to resolve
        let result = await promise;
        console.log(result); // This will print "Data fetched!" after 2 seconds
    } catch (error) {
        console.log("Error:", error); // Handle any errors
    }
}

fetchData();
