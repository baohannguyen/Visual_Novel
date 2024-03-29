namespace Novel {
    export async function scene_4(): ƒS.SceneReturn {
        console.log("Scene 4");
        
        let text = {
            celeste: {
                TX01: "<i>Wow das Café sieht richtig schön aus.</i>",
                TX02: "<i>Hier ist auch eine Menge los.</i>",
                TX03: "<i>Aber ich muss jetzt erstmal den Chef Evan finden.</i>",
                TX04: "<i>Er hat gemeint, dass wir uns am Tresen treffen werden.</i>",
                TX05: "Entschuldigung, ich suche nach ihrem Chef Evan.",
                TX06: "Wir haben einen Termin vereinbart.",
                TX07: "Ja genau. ",
                TX08: "<i>Ich muss also für die Kunden Getränke mischen, damit ich die Stelle bekomme.</i>",
                TX09: "<i>Das werde ich auf jeden Fall hinkriegen!</i>",
                TX10: "Ja ich habe alles verstanden.",
                TX11: "Wir können direkt loslegen.",
                TX12: "Es freut mich auch Sie kennenzulernen."
            },
            evan: {
                TX01: "Ah Hallo du musst bestimmt Celeste sein.",
                TX02: "Schön dich kennenzulernen.",
                TX03: "Wir haben bis jetzt wegen deiner Bewerbung nur telefoniert.",
                TX04: "Du kannst mich gerne duzen.",
                TX05: "Nun zu deiner Bewerbung.",
                TX06: "Ich fand sie sehr vielversprechend und glaube, dass du gut zu uns passen würdest.",
                TX07: "Aber ich hab dich erstmal zum Probearbeiten eingeladen, weil ich sehen möchte wie du mit den Aufgaben zurechtkommst.",
                TX08: "<b>Lovely Java</b> ist bekannt für seine verschiedene Getränke und Kaffees, die wir für unsere Kunden mischen.",
                TX09: "Aus dem Grund wirst du heute ein paar Getränke mischen.",
                TX10: "Du kriegst eine Liste, wo drauf steht aus welchen Zutaten, die einzelnen Getränken und Kaffees bestehen.",
                TX11: "Die Liste kannst du dir jederzeit anschauen, falls du nicht weiterweißt.",
                TX12: "Hast du soweit alles verstanden?",
                TX13: "Super das höre ich doch gerne.",
                TX14: "Ich bin Evan."
            }
        };

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);

        let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Speech.hide();
        ƒS.Sound.fade(music.cafe_theme, 0.2, 0.2, true);
        await ƒS.Location.show(locations.cafe);
        await ƒS.update(transition.cafe_strips.duration, transition.cafe_strips.alpha, transition.cafe_strips.edge);
        await signalDelay1();
        ƒS.Sound.play(sounds.cafe_door, 1);
        await signalDelay2();
        await ƒS.update(1);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_smile, ƒS.positionPercent(25, 100));
        await ƒS.update(3);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX05);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
        await ƒS.Character.show(characters.evan, characters.evan.pose.smile, ƒS.positionPercent(70, 105));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.evan, text.evan.TX01);
        await ƒS.Speech.tell(characters.evan, text.evan.TX02);
        await ƒS.Speech.tell(characters.evan, text.evan.TX14);
        await ƒS.Speech.tell(characters.evan, text.evan.TX03);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX12);
        await ƒS.Speech.tell(characters.evan, text.evan.TX04);
        await ƒS.Speech.tell(characters.evan, text.evan.TX05);
        await ƒS.Speech.tell(characters.evan, text.evan.TX06);
        await ƒS.Speech.tell(characters.evan, text.evan.TX07);
        await ƒS.Speech.tell(characters.evan, text.evan.TX08);
        await ƒS.Speech.tell(characters.evan, text.evan.TX09);
        await ƒS.Speech.tell(characters.evan, text.evan.TX10);
        await ƒS.Speech.tell(characters.evan, text.evan.TX11);
        await ƒS.Speech.tell(characters.evan, text.evan.TX12);
        ƒS.Sound.play(sounds.hmm, 1);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX08);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX09);
        await ƒS.Character.hide(characters.celeste);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_smile2, ƒS.positionPercent(25, 100));
        await ƒS.update(0.3);
        ƒS.Sound.play(sounds.chuckle_female, 1);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX10);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX11);
        await ƒS.Speech.tell(characters.evan, text.evan.TX13);

        await signalDelay1();
        ƒS.Text.addClass("NovelPages");
        await ƒS.Text.print("Oben im Menü siehst du den Bereich <b>Getränkeliste</b>." + 
        "<p>Auf die Liste kannst du jederzeit zugreifen, falls du beim Mischen der Getränke Hilfe brauchst.</p>" +
        "<p>Deine Leistung wird anhand eines Meter-Bars gemessen.</p>" +
        "<p>Da kannst immer du sehen, ob du die richtige Wahl getroffen hast.</p>" +
        "<p>Viel Erfolg!</p>"
        );
        ƒS.Text.close();
        await ƒS.Character.hide(characters.evan);
        await ƒS.Character.hide(characters.celeste);
        ƒS.Speech.hide();
        await ƒS.update(1);
        

    }
}