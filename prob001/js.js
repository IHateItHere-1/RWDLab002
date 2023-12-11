let notes = [];

window.onload = start;
function start() {
    const source = document.getElementById('search');
    const inputHandler = function(e) 
    {
        document.getElementById("error_div").textContent = "";
        const tbl = document.getElementById('DataTable');    
        const tbody = document.getElementById('tableBody');       
        const text = document.getElementById('search').value;
        console.log("TEST: " + text);
        console.log(tbody.rows);
        var HasShow = false;
        Array.from(tbody.rows)
        .forEach(
            function (x) 
            { 
                console.log( "### " + x.getElementsByTagName('td')[2].textContent)
                if(x.getElementsByTagName('td')[2].textContent.includes(text))
                {
                    HasShow = true;
                    x.removeAttribute("hidden");
                    console.log(x.getElementsByTagName('td')[2].textContent)
                }
                else
                {
                    x.setAttribute("hidden", "hidden");
                }              
            }
        );
        if(HasShow === false)
        {
            document.getElementById("error_div").textContent = "No results";
        }
    }
    source.addEventListener('input', inputHandler);

}
function newNote() {
    document.getElementById("error_div").textContent = "";
    const context = document.getElementById("context").value;
    const mobtext = document.getElementById("mobtext").value;
    const emtext = document.getElementById("emtext").value;
    if (!(/^[a-zA-Z\s]{1,20}$/.test(context)))
    {
        document.getElementById("error_div").textContent = 
        "contact name can only be letters"
        return;
    }

    if (!(/^\d{10}$/.test(mobtext)))
    {
        document.getElementById("error_div").textContent = 
        "mobile number can only be numbers"
        return;
    }

    if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,40}$/.test(emtext)))
    {
        document.getElementById("error_div").textContent = 
        "email validation failed"
        return;
    }

    const table = document.getElementById("tableBody");
    var row = table.insertRow();

    var Name = row.insertCell(0);
    var Mobile = row.insertCell(1);
    var Email = row.insertCell(2);
    

    console.log(context);
    // Add some text to the new cells:
    Name.innerHTML = context;
    Mobile.innerHTML = mobtext;
    Email.innerHTML = emtext;      
}

var isinverted = false;

function sortTable() 
{
    isinverted = !isinverted;
    _sortTable(isinverted)
}

function _sortTable() {
    console.log("DO A THING")
    var table, rows, switching, i, x, y;

    table = document.getElementById("DataTable");
    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) 
      {
        r1 = rows[i].getElementsByTagName("td")[0];
        r2 = rows[i + 1].getElementsByTagName("td")[0];

        if(isinverted === true)
        {
            if (r1.textContent.toLowerCase() > r2.textContent.toLowerCase()) 
            {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                console.log(">")
                break;
            }
        }
        else
        {
            if (r1.textContent.toLowerCase() < r2.textContent.toLowerCase()) 
            {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                console.log("<")
                break;
            }
        }   
      }
    }
  }





