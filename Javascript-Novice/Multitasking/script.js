const blogPosts = {
    posts: [
        {
            titel: "Het geheim van Google",
            tags: ["Google", "Business", "Artificial Intelligence"],
            auteurs: ["Bob", "Alice"],
        },
        {
            titel: "IT bepaalt de toekomst",
            tags: ["Filosofie", "Innovatie"],
            auteurs: ["Alice"],
        },
        {
            titel: "Je zal deze 10 redenen dat ik een hekel heb aan clickbait en ironie nooit geloven!!!",
            tags: ["Cultuur", "Opinie"],
            auteurs: ["Bob"],
        },
    ],
};

async function getdata() {
    const data = await getPosts(); 
    data.posts.forEach((post, index) => {
        document.getElementById(`titel${index}`).innerText = post.titel;
        document.getElementById(`auteurs${index}`).innerText = post.auteurs.join(", ");
        document.getElementById(`tags${index}`).innerText = post.tags.join(", ");
    });
}

/**
 * Simuleer het ophalen van data vanuit een API.
 * @returns een promise voor het getPosts object dat hierboven staat.
 */
async function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(blogPosts);
        }, 2000);
    });
}

getdata();
