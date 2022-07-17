


const verigir = document.querySelector('#verigir');
const sorgula = document.querySelector('#sorgula');



var im = new Inputmask("99/99");
im.mask(verigir);

let burclar = {
    Koç: "21/03 - 20/04"
    , Boğa: "21/04 - 20/05"
    , İkizler: "21/05 - 21/06"
    , Yengeç: "22/06 - 22/07"
    , Aslan: "22/07 - 22/08"
    , Başak: "23/08 - 22/09"
    , Terazi: "23/09 - 22/10"
    , Akrep: "23/10 - 21/11"
    , Yay: "22/11 - 21/12"
    , Oğlak: "22/12 - 20/01"
    , Kova: "21/01 - 19/02"
    , Balık: "20/02 - 20/03"
};

const stend = {
    koc: {
        start: new Date('03/21'),
        end: new Date('04/20'),
    },
    boga: {
        start: new Date('04/21'),
        end: new Date('05/20'),
    },
    ikizler: {
        start: new Date('05/21'),
        end: new Date('06/21'),
    },
    yengec: {
        start: new Date('06/22'),
        end: new Date('07/22'),
    },
    aslan: {
        start: new Date('07/23'),
        end: new Date('08/22'),
    },
    terazi: {
        start: new Date('09/23'),
        end: new Date('10/23'),
    },
    akrep: {
        start: new Date('10/24'),
        end: new Date('11/22'),
    },
    yay: {
        start: new Date('11/23'),
        end: new Date('12/21'),
    },
    oglak: {
        start: new Date('12/22'),
        end: new Date('01/20'),
    },
    kova: {
        start: new Date('01/21'),
        end: new Date('02/18'),
    },
    basak: {
        start: new Date('08/23'),
        end: new Date('09/22'),
    },
    balık: {
        start: new Date('02/20'),
        end: new Date('03/20'),
    }
}

sorgula.addEventListener('click', function (e) {
    e.preventDefault();
    let tarih = new Date(verigir.value);
    for (let i in stend) {
        const burc = stend[i];
        if (tarih >= burc.start && tarih <= burc.end) {
            
            localStorage.setItem('Sorgular', i);
            const url = `https://arkakapi.herokuapp.com/https://burc-yorumlari.herokuapp.com/get/${i}`;
            axios.get(url) 
            .then(res => res.data)
            .then((data)=> {
                console.log(data);

                swal({
                    title: "Burcunuz: " + i.toLowerCase(),
                    text: ` \n  MOTTOSU : ${data[0].Mottosu} \n GEZEGENİ: ${data[0].Gezegeni}\n GÜNLÜK YORUM: ${data[0].GunlukYorum} `,
                    icon: "success",
                    button: "Tamam",
                })
    
                

            })
        
            
        }
    }
}
);


