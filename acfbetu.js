document.querySelector('#jelszo').addEventListener ('change', jelszoValtozasKereso);
document.querySelector('#jelszo').addEventListener ('keyup', jelszoValtozasKereso);

function jelszoValtozasKereso(event){
    megjelenito(jelszoEllenorzes(event))
}

// function jelszoEllenorzes(event){
//     const beirtJelszo = event.target.value;
//     const betuk = ['a', 'c', 'f'];
//     return !betuk.some(betu => !beirtJelszo.includes(betu))
// }

function jelszoEllenorzes(event){
    const beirtJelszo = event.target.value;
    if (beirtJelszo.indexOf('a') >= 0){
        if (beirtJelszo.indexOf('c') >= 0){
            if (beirtJelszo.indexOf('f') >= 0){
                return true
            }
        }
    }
    return false
}

function megjelenito(megjelenit){
    const helyesJelszoIras = document.querySelector('#szoveg');
    helyesJelszoIras.style.display = megjelenit ? 'block' : 'none'
}