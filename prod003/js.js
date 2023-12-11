const endPoint = async (usr) => {
    const response = await fetch(`https://api.github.com/users/${usr}`);
    const data = await response.json();
    return data;
};

const addData = async (data) => {
    console.log("##############################################################")
    console.log(data);

    document.getElementById("Name").textContent = data['name']
    document.getElementById("Username").textContent = data['login']
    document.getElementById("Email").textContent = data['email']
    document.getElementById("Location").textContent = data['location']
    document.getElementById("Numgists").textContent = data['public_gists']
    
    const response = await fetch(data['repos_url']);
    const reops = await response.json();
    //console.log(reops);
    document.getElementById("profileimg").src = data['avatar_url'];  

    const gisttable = document.getElementById("GIST");
    reops.forEach(element => {
        console.log(element);
        var row = gisttable.insertRow();
        var Name = row.insertCell(0); 
        let div = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        div.textContent = element["name"];
        div2.textContent =  "----------------";;
        div3.textContent = element["description"];  
        Name.append(div);
        Name.append(div2);
        Name.append(div3);
    });

    console.log("##############################################################")
};

function search()
{

    /*endPoint('mojombo')
    .then(addData);*/
    console.log(document.getElementById("user").value)
    endPoint(document.getElementById("user").value)
    .then(addData);
}



  