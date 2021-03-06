document.addEventListener('DOMContentLoaded', () =>{

    $("select").select2({
        tags: "true",
        placeholder: "Select Category",
        allowClear: true
      });

const catagsArray =
[
    {
    "id": 1,
    "category": "Song of the Year"
},
{
    "id": 2,
    "category": "Album of the Year"
},
{
    "id": 3,
    "category": "Music Video of the Year"
},
{
    "id": 4,
    "category": "Best Online Presentation Music"
},
{
    "id": 5,
    "category": "Best Online Presentation DJ"
},
{
    "id": 6,
    "category": "Best Online Presentation Comedy"
}, {
    "id": 7,
    "category": "Best Online Presentation Poetry"
}, {
    "id": 8,
    "category": "Best Dance Artist|Group"
}, {
    "id": 9,
    "category": "Best Newcomer"
}, {
    "id": 10,
    "category": "Best Collaboration"
}, {
    "id": 11,
    "category": "Best Gospel Song"
}, {
    "id": 12,
    "category": "Best HipHop Song"
}, {
    "id": 13,
    "category": "Best Urban Song"
}, {
    "id": 14,
    "category": "Best House Song"
}, {
    "id": 15,
    "category": "Best Traditional Song"
}, {
    "id": 16,
    "category": "Best Jazz Song"
}, {
    "id": 17,
    "category": "Best Afro-Pop song"
}, {
    "id": 18,
    "category": "Best Music Producer"
}, {
    "id": 19,
    "category": "Best Music Video Director"
}, {
    "id": 10,
    "category": "Lifetime Achievement Award"
}, {
    "id": 21,
    "category": "MTN Most Downloaded CallerTune"
}, {
    "id": 22,
    "category": "Most Streamed Song on Music Time"
}
]

var select = document.getElementById("category");
// var options = ["1", "2", "3", "4", "5"];
for(var i = 0; i < catagsArray.length; i++) {   
    var el = document.createElement("option");
    el.innerHTML = catagsArray[i].category;
    el.value = catagsArray[i].id;
    // select.appendChild(el);
    select.options.add(el);
}

});