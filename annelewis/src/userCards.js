axios.get("http://faker.hook.io/?property=helpers.userCard&amp;locale=en_US")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => console.error(error));