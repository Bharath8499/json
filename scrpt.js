let patient = [
    {
        "diabetes": [
            {
                "medications" : [
                    {
                        "medicationclass": [
                            {
                                "classname": [
                                    {
                                        "associatedDrug": [
                                            {
                                                "name": "asprin",
                                                "dose": "2",
                                                "strength": "500 mg"
                                            }
                                        ]
                                    }
                                ],
                                "classname": [
                                    {
                                        "associatedDrug": [
                                            {
                                                "name": "citrin",
                                                "dose": "2",
                                                "strength": "500 mg"
                                            }
                                        ]
                                    }
                                ]

                            }
                        ]
                    }
                ],
                "labs": [
                    {
                        "missing":"value"
                    }
                ]
                    
            },
            
        ]
        // "asthma" :[ "none"],
        // "cancer" : ["medication","lab"],
    },
]




function renderPatients(params=[]){
    let patients =[...params]
    let AllpatientsDOM = patient.map(function(patientss, index)
    {
        let singlePatientDOM = `
        
       
            <div class="card-deck">
                <div class="card text-white bg-dark mb-3 d-inline-block">
                    <div class="card-body">
                        <h4 class="text-center">${Object.keys(patient[0])}</h4>
                            <ul class="list-unstyled">
                                ${patientss.diabetes.map(function(diabets, index) 
                                    {
                                        return `<li> 
                                        <p class="font-weight-bold">MEDICATION</p>
                                                

                                                ${diabets.medications.map(function (medication,index)
                                                {
                                                    return `<ul style="list-style-type:none;">
                                                            
                                                            <li> 
                                                            <p> MedicationClass<p>
                                                            ${medication.medicationclass.map(function(medicationcls,index)
                                                                {
                                                                    return `<ul style="list-style-type:none;">
                                                                            
                                                                            <li>
                                                                            <p>Classname</p>
                                                                                ${medicationcls.classname.map(function (names,index) 
                                                                                    {
                                                                                        return `<ul style="list-style-type:none;">
                                                                                                
                                                                                                <li>
                                                                                                <p>AssociatedDrug</p>
                                                                                                    ${names.associatedDrug.map(function(drugname,index) 
                                                                                                        {
                                                                                                            return `<ul style="list-style-type:none;">
                                                                                                                    
                                                                                                                    <li>
                                                                                                                        ${drugname.name }
                                                                                                                    </li>  
                                                                                                                    <li>
                                                                                                                        ${drugname.dose }
                                                                                                                    </li> 
                                                                                                                    <li>
                                                                                                                        ${drugname.strength}
                                                                                                                    </li>        
                                                                                                                    </ul>`
                                                                                                        })
                                                                                                    }
                                                                                                </li>
                                                                                                <li>
                                                                                                <p>AssociatedDrug</p>
                                                                                                    ${names.associatedDrug.map(function(drugname,index) 
                                                                                                        {
                                                                                                            return `<ul style="list-style-type:none;">
                                                                                                                    
                                                                                                            <li>
                                                                                                            ${drugname.name }
                                                                                                        </li>  
                                                                                                        <li>
                                                                                                            ${drugname.dose }
                                                                                                        </li> 
                                                                                                        <li>
                                                                                                            ${drugname.strength}
                                                                                                        </li>          
                                                                                                                    </ul>`
                                                                                                        })
                                                                                                    }
                                                                                                </li>
                                                                                                </ul>`
                                                                                    })
                                                                                }
                                                                            </li>
                                                                            <li>
                                                                            <p>Classname</p>
                                                                                ${medicationcls.classname.map(function (names,index) 
                                                                                    {
                                                                                        return `<ul style="list-style-type:none;">
                                                                                                
                                                                                                <li>
                                                                                                <p>AssociatedDrug</p>
                                                                                                    ${names.associatedDrug.map(function(drugname,index) 
                                                                                                        {
                                                                                                            return `<ul style="list-style-type:none;">
                                                                                                                    
                                                                                                                    <li>
                                                                                                                        ${drugname.name}
                                                                                                                        Diabetes                                                                           </li>      
                                                                                                                    <li>
                                                                                                                        ${drugname.dose}
                                                                                                                    </li>   
                                                                                                                    <li> 
                                                                                                                        ${drugname.strength}
                                                                                                                    </li>
                                                                                                                    </ul>`
                                                                                                        })
                                                                                                    }
                                                                                                </li>
                                                                                                <li>
                                                                                                <p>AssociatedDrug</p>
                                                                                                    ${names.associatedDrug.map(function(drugname,index) 
                                                                                                        {
                                                                                                            return `<ul style="list-style-type:none;">
                                                                                                                   
                                                                                                                    <li>
                                                                                                                    ${drugname.name}
                                                                                                                </li>      
                                                                                                                <li>
                                                                                                                    ${drugname.dose}
                                                                                                                </li>   
                                                                                                                <li> 
                                                                                                                    ${drugname.strength}
                                                                                                                </li>       
                                                                                                                    </ul>`
                                                                                                        })
                                                                                                    }
                                                                                                </li>
                                                                                                </ul>`
                                                                                    })
                                                                                }
                                                                            </li>
                                                                        
                                                                            </ul>`
                                                                })
                                                            }
                                                        </li>
                                                        </ul>`
                                                })
                                            }
                                        </li>
                                        
                                        <li>
                                        <p>LABS</p>
                                        <ul><li>
                                        ${diabets.labs.map(function(val,index){
                                            return `${val.missing}`
                                        })}
                                        </li>
                                        </ul>
                                        </li>`
                                    }).join("")}
                
                            </ul>
                    </div>
                </div>
                <div class="card text-white bg-dark mb-3 d-inline-block"">
                    <div class="card-body">
                        <h4 class="text-center">Cancer</h4>
                            <ul class="list-unstyled">
                            ${patientss.diabetes.map(function(diabets, index) 
                                {
                                    return `<li> 
                                    <p class="font-weight-bold">Medication</p>
                                            

                                            ${diabets.medications.map(function (medication,index)
                                            {
                                                return `<ul>
                                                        
                                                        <li> 
                                                        <p> medicationclass<p>
                                                        ${medication.medicationclass.map(function(medicationcls,index)
                                                            {
                                                                return `<ul>
                                                                        
                                                                        <li>
                                                                        <p>classname</p>
                                                                            ${medicationcls.classname.map(function (names,index) 
                                                                                {
                                                                                    return `<ul>
                                                                                            
                                                                                            <li>
                                                                                            <p>associatedDrug</p>
                                                                                                ${names.associatedDrug.map(function(drugname,index) 
                                                                                                    {
                                                                                                        return `<ul>
                                                                                                                
                                                                                                                <li>
                                                                                                                    ${drugname.name ,drugname.dose ,drugname.strength}
                                                                                                                </li>         
                                                                                                                </ul>`
                                                                                                    })
                                                                                                }
                                                                                            </li>
                                                                                            <li>
                                                                                            <p>associatedDrug</p>
                                                                                                ${names.associatedDrug.map(function(drugname,index) 
                                                                                                    {
                                                                                                        return `<ul>
                                                                                                                
                                                                                                                <li>
                                                                                                                    ${drugname.name ,drugname.dose ,drugname.strength}
                                                                                                                </li>         
                                                                                                                </ul>`
                                                                                                    })
                                                                                                }
                                                                                            </li>
                                                                                            </ul>`
                                                                                })
                                                                            }
                                                                        </li>
                                                                        <li>
                                                                        <p>classname</p>
                                                                            ${medicationcls.classname.map(function (names,index) 
                                                                                {
                                                                                    return `<ul>
                                                                                            
                                                                                            <li>
                                                                                            <p>associatedDrug</p>
                                                                                                ${names.associatedDrug.map(function(drugname,index) 
                                                                                                    {
                                                                                                        return `<ul>
                                                                                                                
                                                                                                                <li>
                                                                                                                    ${drugname.name ,drugname.dose ,drugname.strength}
                                                                                                                </li>         
                                                                                                                </ul>`
                                                                                                    })
                                                                                                }
                                                                                            </li>
                                                                                            <li>
                                                                                            <p>associatedDrug</p>
                                                                                                ${names.associatedDrug.map(function(drugname,index) 
                                                                                                    {
                                                                                                        return `<ul>
                                                                                                               
                                                                                                                <li>
                                                                                                                    ${drugname.name ,drugname.dose ,drugname.strength}
                                                                                                                </li>         
                                                                                                                </ul>`
                                                                                                    })
                                                                                                }
                                                                                            </li>
                                                                                            </ul>`
                                                                                })
                                                                            }
                                                                        </li>
                                                                    
                                                                        </ul>`
                                                            })
                                                        }
                                                    </li>
                                                    </ul>`
                                            })
                                        }
                                    </li>
                                    
                                    <li>
                                    <p>LABS</p>
                                    <ul><li>
                                    ${diabets.labs.map(function(val,index){
                                        return `${val.missing}`
                                    })}
                                    </li>
                                    </ul>
                                    </li>`
                                }).join("")}
                
                            </ul>
                    </div>
                </div>
            </div>
        
            
        
            
        `;
        return singlePatientDOM;

        
    })
    
    let finalDOM = `<div class="row" >${AllpatientsDOM.join("")}</div>`
    document.getElementById("app").innerHTML = finalDOM;

}

renderPatients(patient)


console.log();