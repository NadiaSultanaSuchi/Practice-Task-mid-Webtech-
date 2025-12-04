function addStudent() {
    var name = document.getElementById("name").value.trim();
    var roll = document.getElementById("roll").value.trim();
    var dept = document.getElementById("dept").value.trim();

    if (name === "" || roll === "" || dept === "") {
        alert("Please fill all fields");
        return;
    }

    var table = document.getElementById("myTable");

    var tr = document.createElement("TR");

    var td1 = document.createElement("TD");
    td1.appendChild(document.createTextNode(name));
    var td2 = document.createElement("TD");
    td2.appendChild(document.createTextNode(roll));

    var td3 = document.createElement("TD");
    td3.appendChild(document.createTextNode(dept));

    var td4 = document.createElement("TD");
    var btn = document.createElement("BUTTON");
    btn.appendChild(document.createTextNode("Delete"));

    btn.onclick = function () {
        table.removeChild(tr);
    };

    td4.appendChild(btn);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);


    table.appendChild(tr);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
}
