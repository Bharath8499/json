let patients = [
    {
        
    "problems":[
        {
            "Diabetes": [
                {
                    "medications": [
                        {
                            "medicationsClasses": [
                                {
                                    "className": [
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
                                    ],
                                    "className2": [
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
                                }
                            ]
                        }
                    ],
                    "labs" : [
                        {
                            "missing_field": "missing_value"
                        }
                
                    ]
                }
            ], 
        }
    ]
    }
];

// function renderPatients(params=[]){
//     let patients = [...params]
//     let AllpatientsDOM = patients.map(function(patient, index){
//         let singlePatientDOM = `
      
        
//         `;
//         return singlePatientDOM;
//     })
//     let finalDOM = `<div class="row">${AllpatientsDOM.join("")}</div>`
//     document.getElementById("app").innerHTML = finalDOM;
// }
// renderPatients(patients)

