
function jqueryForChange(putIt,j) {
  aa = `<div class="card" onclick="doItNow(${j})">
    <div class="card-img-container">
        <img class="card-img" src="${putIt.results[0].picture.large}" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${putIt.results[0].name.first}  ${putIt.results[0].name.last} </h3>
        <p class="card-text">${putIt.results[0].email}</p>
        <p class="card-text cap">${putIt.results[0].location.city}, ${putIt.results[0].location.state}</p>
    </div>
</div>`;

  return aa;
}


function doItNow(k){

    
    tt=jqueryForEach(jsonArray[k]);
    console.log(tt)
    console.log(jsonArray[k].results[0].name.first)
    $(".modal-container").html(tt)
    $(".modal-container").show();

}

var jsonArray=[];

async function putIt() {
    $(".modal-container").hide()
whole="";
    for(var i=0;i<12;i++){
      const data=await fetch(`https://randomuser.me/api`)
      .then((response) => response.json())
      .catch((err) => console.log(err));
      jsonArray.push(data)
      
      whole+=jqueryForChange(data,i)

     

      
    }

   
    $("#gallery").html(whole);
  
  }
  putIt();
 

 

  console.log(jsonArray)
 function closeit(){
      $(".modal-container").hide();
 }
  GoThroughArray();

  function addModal(){
      
  }

  function jqueryForEach(putIt) {

    birthDate=putIt.results[0].dob.date.substring(0,10)
;     

    aa = ` 
    <div class="modal">
        <button type="button" onclick="closeit()" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${putIt.results[0].picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${putIt.results[0].name.first} ${putIt.results[0].name.last}</h3>
            <p class="modal-text">${putIt.results[0].email}</p>
            <p class="modal-text cap">${putIt.results[0].location.street.name}  ${putIt.results[0].location.city} ${putIt.results[0].location.state}</p>
            <hr>
            <p class="modal-text">${putIt.results[0].phone}</p>
            <p class="modal-text">${putIt.results[0].location.postcode} ${putIt.results[0].location.city}</p>
            <p class="modal-text">BirthDate : ${birthDate}</p>
        </div>
    </div>

    // IMPORTANT: Below is only for exceeds tasks 
    <div class="modal-btn-container">
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>
`;
  
    return aa;
  }