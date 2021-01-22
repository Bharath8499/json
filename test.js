let patient = [
    {
         "associatedDrug": [
                    {
                      "name": "asprin",
                      "dose": "",
                      "strength": "500 mg"
                    }
                  ],
                  "associatedDrug#2": [
                    {
                      "name": "somethingElse",
                      "dose": "",
                      "strength": "500 mg"
                    }
                  ]
            
    }
]

// function renderPatients(params=[]){
//     let patients =[...params]
//     let AllpatientsDOM = patient.map(function(patientss, index){
//         let singlePatientDOM = `
//         <div class="col-3">
//             <div class="card shadow">
//                 <div class="card-body">
//                 <p>associatedDrug</p>
//                 <ul>
//                     ${patientss["associatedDrug"].map(function(drug, index) {
//                         return `<li>Name: ${drug.name} <br> Role: ${drug.strength}</li>`
//                     }).join("")}
//                 </ul>
//                 </div>
//             </div>
//         </div>
//         `;
//         return singlePatientDOM;
//     })
//     let finalDOM = `<div class="row">${AllpatientsDOM.join("")}</div>`
//     document.getElementById("app").innerHTML = finalDOM;

// }

// renderPatients(patient)