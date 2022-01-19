const ffmpeg = require('ffmpeg')
const Discord = require('discord.js');
exports.run = async (bot, message, args) => {

const radyo = {
    alem           : "http://scturkmedya.radyotvonline.com/stream/80/",
    cnnturk        : "https://radyo.dogannet.tv/cnnturk",
    fenomen        : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio",
    fenomena       : "http://fenomenakustik.listenfenomen.com/fenomenakustik/128/icecast.audio ",
    kral           : "http://46.20.3.204/",
    taksimrap      : "http://cast1.taksim.fm:8018/",
    kralrap        : "http://cast1.taksim.fm:8018/",
    line           : "http://radioline.fm:8000/",
    metro          : "http://17773.live.streamtheworld.com/METRO_FM_SC",
    radyod         : "http://radyo.dogannet.tv/radyod",
    superfm        : "http://17733.live.streamtheworld.com/SUPER_FM_SC",
    slow           : "https://radyo.dogannet.tv/slowturk",
    JoyFm          : "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_FM.mp3",
    fenomenfm      : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
    show           : "http://46.20.3.229/",
    taksimclup     : "http://cast1.taksim.fm:8016",
    Arabesk        : "http://allergo.serverroom.us:8127",
    Nostalji       : "http://46.20.13.51:1300",
    Best           : "http://37.247.100.100:80/best/bestfm.stream/playlist.m3u8",
    Karadeniz      : "http://46.20.7.100/stream/170/",
    Pal            : "http://46.20.13.51:1230/",
    DeryaFM        : "http://nonstopkonya.canliyayinda.com:9898/",
  	AnkaraHavaları : "http://37.247.98.8/stream/30/",
    AntalyaBizimFM : "http://www.bizimfmantalya.com:707/",
    NumberoneFM    : "http://nr1digitalsc.radyotvonline.com/stream/264/",
    TürküFM        : "http://yonradyo.radyolarburada.com:8070/",
    Acil112        : "http://95.173.185.128:9316/",
    PolisRadyosu   : "https://m.egm.gov.tr:8093",
    SüperFM        : "https://17733.live.streamtheworld.com/SUPER_FM.mp3 ",
    RadyoTek       : "http://yayin2.yayindakiler.com:4202/",
    RadyoOdtü      : "http://stream.radyoodtu.com.tr:8006",
    RadyoViva      : "http://46.20.3.231/",
    tiryaki        : "http://yayin2.canliyayin.org:8340/;stream.nsv/",
    gözdefm        : "http://gozdefm.canliyayinda.com:7700/;",
    hitfm          : "http://yayin.turkiletisim.com.tr:1094/;",
    kordon         : "http://allergo.serverroom.us:8147/;",
    gözyaşıfm      : "http://yayin1.canliyayin.org:8700/;",
    seymen         : "http://yayin.radyoseymen.com.tr:1070/;stream.mp3",
    rock         : "http://rockfm.rockfm.com.tr:9450/stream?type=http&nocache=14012",
}

          
if (!args[0] || args[0] === "help" || args[0] === "yardım") {
          
let embed = new Discord.MessageEmbed()
.setColor('GREEN') 
.setTitle(`📻                                                 Alpike - Radyo                                                 📻`)
.setDescription(`
▫️ **Alpike** Sayesinde dilediğiniz favori radyo'yu ücretsiz bir şekilde dinleyebilirsiniz.
▫️ Radyoda oluşan hataları bize **!hata-bildir [hata]** şeklinde bildiriniz.
▫️ Oluşan hatalardan dolayı özür dileriz **Alpike Radyo Beta** sürümünde.
▫️ Radyo'yu kapatmak için **!radyo bitir** yazınız.
`)
.addField(`▫️ Radyo-1`, `
1 = Alem FM
2 = CnnTurk FM
3 = Fenomen FM
4 = Kral FM
5 = KralRap FM
6 = Karadeniz FM
7 = MetroFM
8 = Radyo D FM
9 = Super FM
10 = Slow Turk
11 = Joy FM
12 = Fenomen FM
13 = Show FM
`, true)
.addField(`▫️ Radyo-2`, `
14 = Taksim Club
15 = Arabesk
16 = Pal Nostalji
17 = Best FM
18 = Line FM
19 = Pal FM
20 = Derya FM
21 = Ankara Havaları
22 = Bizim FM
23 = Fenomen Akustik
24 = Number One FM
25 = Taksim Rap
26 = Rock FM
`, true)
.addField(`▫️ Radyo-3`, `
27 = 112 Acil
28 = Yön Türk
29 = Polis Radyosu
30 = Süper FM
31 = Radyo Tek
32 = Radyo Odtü
33 = Radyo Viva
34 = Tiryaki FM
35 = Gözde FM
36 = Hit FM
37 = Kordon FM
38 = Gözyaşı FM
39 = Seymen FM
`, true)
.setFooter(`${message.author.tag} Tarafından istendi..`,message.author.avatarURL())
  return message.channel.send(embed)

} else if (!message.member.voice.channel) { return message.channel.send(new Discord.MessageEmbed().setDescription("**:bangbang: Radyo'yu açmam için ilk önce sesli bir kanala katılmalısın.**").setColor('RED')).then(m => m.delete(15000)).catch(console.error)

} else if (args[0].toLowerCase() === "alem" || args[0] === "1") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.alem);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `AlemFM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "cnn" || args[0] === "2") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.cnnturk);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `CNNTurk` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "fenomen" || args[0] === "3") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.fenomen);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `FenomenFM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "kral" || args[0] === "4") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.kral);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `KralFM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "kralrap" || args[0] === "5") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.kralrap);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `KralPOP` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "Karadeniz FM" || args[0] === "6") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.Karadeniz);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Karadeniz FM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "metro" || args[0] === "7") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.metro);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `MetroFM` çalınıyor.**")
})
  
}  else if (args[0].toLowerCase() === "radyod" || args[0] === "8") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.radyod);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Radyo D FM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "super" || args[0] === "9") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.superfm);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `SüperFM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "slow" || args[0] === "10") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.slow);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `SlowTÜRK` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "Joy" || args[0] === "11") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.JoyFm);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `JoyFM` çalınıyor.**")
})
    
} else if (args[0].toLowerCase() === "FENOMEN TURK" || args[0] === "12") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.fenomenfm);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `FenomenTÜRK` çalınıyor.**")
})
            
} else if (args[0].toLowerCase() === "show" || args[0] === "13") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.show);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı❗❗ `ShowFM` çalınıyor.**")
})
            
} else if (args[0].toLowerCase() === "taksimclup" || args[0] === "14") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.taksimclup);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Taksim Clup` çalınıyor.**")
}) 
                   
} else if (args[0].toLowerCase() === "Arabesk" || args[0] === "15") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.Arabesk);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Arabesk` çalınıyor.**")
})
} else if (args[0].toLowerCase() === "Pal Nostalji" || args[0] === "16") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.Nostalji);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Pal Nostalji` çalınıyor.**")
})
                                                                                               
} else if (args[0].toLowerCase() === "Best" || args[0] === "17") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.Best);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Best Fm` çalınıyor.**")
})
  
  
  } else if (args[0].toLowerCase() === "line" || args[0] === "18") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.line);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `LineFM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "Pal" || args[0] === "19") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.Pal);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Pal FM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "DeryaFM" || args[0] === "20") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.DeryaFM);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Derya FM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "AnkaraHavaları" || args[0] === "21") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.AnkaraHavaları);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Ankara Havaları` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "AntalyaBizimFM" || args[0] === "22") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.AntalyaBizimFM);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Antalya Bizim FM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "fenomena" || args[0] === "23") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.fenomena);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Fenomen Akustik` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "NumberoneFM" || args[0] === "24") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.NumberoneFM);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `NumberOne FM` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "taksimrap" || args[0] === "25") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.taksimrap);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Taksim Rap` çalınıyor.**")
})
} else if (args[0].toLowerCase() === "Rock" || args[0] === "26") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.rock);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Rock FM` çalınıyor.**")
}) 
  
} else if (args[0].toLowerCase() === "Acil112" || args[0] === "27") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.Acil112);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Acil 112` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "TürküFM" || args[0] === "28") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.TürküFM);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Yön Radyo Türkü` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "PolisRadyosu" || args[0] === "29") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.PolisRadyosu);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Polis Radyosu` çalınıyor.**")
})
  
} else if (args[0].toLowerCase() === "SüperFM" || args[0] === "30") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.SüperFM);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Süper FM` çalınıyor.**")
})

} else if (args[0].toLowerCase() === "RadyoTek" || args[0] === "31") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.RadyoTek);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Radyo Tek` çalınıyor.**")
})

} else if (args[0].toLowerCase() === "RadyoOdtü" || args[0] === "32") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.RadyoOdtü);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Radyo Odtü` çalınıyor.**")
})  

} else if (args[0].toLowerCase() === "RadyoViva" || args[0] === "33") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.RadyoViva);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Radyo Viva` çalınıyor.**")
})  
  
} else if (args[0].toLowerCase() === "RadyoTiryaki" || args[0] === "34") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.tiryaki);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Radyo Tiryaki` çalınıyor.**")
}) 
  
  } else if (args[0].toLowerCase() === "RadyoGÖZDEFM" || args[0] === "35") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.gözdefm);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Radyo GÖZDEFM` çalınıyor.**")
}) 
     } else if (args[0].toLowerCase() === "RadyoHit Fm" || args[0] === "36") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.hitfm);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Radyo HİT FM` çalınıyor.**")
}) 
       } else if (args[0].toLowerCase() === "Radyo Kordon FM" || args[0] === "37") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.kordon);
dispatcher.setVolume(0.5);
message.channel.send("🎧 | **Başarılı! `Radyo Kordon FM` çalınıyor.**")
}) 
           } else if (args[0].toLowerCase() === "Radyo Konya Gözyaşı FM" || args[0] === "38") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.gözyaşıfm);
message.channel.send("🎧 | **Başarılı! `Radyo Konya Gözyaşı FM` çalınıyor.**")
}) 
            } else if (args[0].toLowerCase() === "Radyo seymen FM" || args[0] === "39") {
message.member.voice.channel.join().then(connection => {
var dispatcher = connection.play(radyo.seymen);
message.channel.send("🎧 | **Başarılı! `Radyo seymen FM` çalınıyor.**")
}) 
              
} else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
message.member.voice.channel.leave();
return message.channel.send(new Discord.MessageEmbed().setDescription(`🎵 **${message.member.voice.channel} Adlı kanaldan ayrıldım ve radyo'yu kapattım.**`).setColor('GREEN'))
  
 }  
  
  
}
 
                                    
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "premium"
};

exports.help = {
  name: 'radyo',
  description: 'Premium Özelliğiniz Açıksa Canlı Radyoları Listeler ve Çalar.',
  usage: ''
};