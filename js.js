


function add(){

    function getCheckedBoxes(chkboxName) {
        var checkboxes = document.getElementsByName(chkboxName);
        var checkboxesChecked = [];
        // loop over them all
        for (var i=0; i<checkboxes.length; i++) {
           // And stick the checked ones onto an array...
           if (checkboxes[i].checked) {
              checkboxesChecked.push(checkboxes[i].value);
           }
        }
        // Return the array if it is non-empty, or null
        return checkboxesChecked.length > 0 ? checkboxesChecked : null;
      }
      
      // Call as
      var checkedBoxes = getCheckedBoxes("chkboxName");

    let first=document.getElementById("first").value
    let last=document.getElementById("last").value
    let address=document.getElementById("address").value
    let country=document.getElementById("country").value
     let state=document.getElementById("state").value
     let zip=document.getElementById("zip").value
     
     let food= document.querySelector('input[name=gridRadios]:checked').value
     

     
    let table=document.querySelector("#tbody")
    let tr=document.createElement("tr")
    let tdf=document.createElement("td")
    let tdl=document.createElement("td")
    let ad=document.createElement("td")
    let co=document.createElement("td")
    let st=document.createElement("td")
    let zi=document.createElement("td")
    let foo=document.createElement("td")
    let fen=document.createElement("td")
    tdf.textContent=first
    tr.appendChild(tdf)
    tdl.textContent=last
    tr.appendChild(tdl)
    ad.textContent=address
    tr.appendChild(ad)
    co.textContent=country
   tr.appendChild(co)
    st.textContent=state
   tr.appendChild(st)
    zi.textContent=zip
     tr.appendChild(zi)
     foo.textContent=food
     tr.appendChild(foo)
     fen.textContent=checkedBoxes
     tr.appendChild(fen)
   table.appendChild(tr)
    }

    function clear() {
        var e = document.querySelector("#tbody");
        
     
        var child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    }

   




