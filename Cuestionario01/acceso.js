


document.addEventListener("DOMContentLoaded", (event)=>{
    const titular = document.getElementById("titular");
    const asistente = document.getElementById("asistente");
    const regAsis = document.getElementById("regAsis");

    regAsis.style.display = "none";

    titular.addEventListener("change", (event)=>{
        if(titular.checked){
            asistente.checked = false;
            regAsis.style.display = "none";
        } else {
            regAsis.style.display = "block";
        }
    });

    asistente.addEventListener("change", (event)=>{
        if(asistente.checked){
            titular.checked = false;
            regAsis.style.display = "block";
        } else {
            regAsis.style.display = "none";
        }
    });
}); 


let nombreTitular = document.getElementById("nombreTitular");
let correoTitular = document.getElementById("correoTitular");
let curpTitular = document.getElementById("curpTitular");
let nombreAsistente = document.getElementById("nombreAsistente");
let correoAsistente = document.getElementById("correoAsistente");
let curpAsistente = document.getElementById("curpAsistente");

const btnRegistro = document.getElementById("btnRegistro");
console.log(btnRegistro)
btnRegistro.addEventListener("click", (event)=>{

        fetch("http://104.198.174.83:8000/user/", 
         {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                "folio": "string",
                "username": "string",
                "first_name": nombreTitular.value,
                "last_name": "string",
                "second_last_name": "string",
                "type_blood": 1,
                "type_civil_status": 0,
                "national_id": curpTitular.value,
                "fiscal_id": "string",
                "social_security_id": "string",
                "birthdate": "2025-01-21T16:00:52.713Z",
                "key_country_origin": "string",
                "key_birth_country": "string",
                "key_nationality": "string",
                "key_state_birth": "string",
                "occupation": "string",
                "known_as": "string",
                "about_me": "string",
                "website": "string",
                "id_religion": 0,
                "id_indigenous_language": 0,
                "type_gender": 0,
                "type_biological_sex": 1,
                "type_national_id_sex": 1,
                "self_considers_indigenous": 0,
                "self_considers_migrant": 0,
                "password": "string",
                "list_addresses": [
                  {
                    "type_address": 1,
                    "key_country": "string",
                    "key_state": "string",
                    "key_municipality": "string",
                    "key_locality": "string",
                    "address": "string",
                    "complement": "string",
                    "postal_code": 0,
                    "latitud": 0,
                    "longitud": 0
                  }
                ],
                "list_emails": [
                  {
                    "email": correoTitular.value,
                    "type_email": 1
                  }
                ],
                "list_phones": [
                  {
                    "code": "string",
                    "number": "string",
                    "type_phone": 1
                  }
                ]
              }
            )
        })
});
