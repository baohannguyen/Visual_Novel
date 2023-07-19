namespace Novel {
    export async function scene_2(): ƒS.SceneReturn {
        console.log("Scene 2");

        let text = {
            celeste: {
                TX01: "...",
                TX02: "Oh sorry ich hab grad nicht aufgepasst.",
                TX03: "Worüber habt ihr nochmal geredet?",
                TX04: "Seitdem meine Mum mir ihre Situation erzählt hat, mache ich mir ständig Gedanken um sie.",
                TX05: "Ihr geht es körperlich gerade nicht so gut, weil sie zurzeit sehr viel arbeitet.",
                TX06: "Aus dem Grund hab ich ihr vorgeschlagen, dass ich mir einen Teilzeitjob suchen werde.",
                TX07: "Aber ich finde keine guten Stellen, wo ich mich bewerben kann.",
                TX08: "Nein nicht wirklich.",
                TX09: "Davon hab ich gar nicht gewusst.",
                TX10: "Dann werde ich mich direkt dort bewerben.",
                TX11: "Danke Lucia!",
                TX12: "Das ist doch nicht so einfach wie ich dachte.",
                TX13: "Du hast immer eine Lösung zu meinen Problemen."
            },
            lucia: {
                TX01: "Das hört sich echt cool an.",
                TX02: "Hättet ihr Lust da mal vorbeizuschauen?",
                TX03: "Wie sieht es bei dir aus Cel?",
                TX04: "Cel?",
                TX05: "Sophie hat einen neuen Laden mit vielen schönen Dekorationen entdeckt und ich hab gefragt, ob wir alle mal hingehen wollen.",
                TX06: "Aber ist eigentlich alles gut bei dir?",
                TX07: "Worum ging es?",
                TX08: "Hmm kennst du das Café <b>Lovely Java</b>?",
                TX09: "Das ist ein Café bei mir in der Nähe.",
                TX10: "Das wäre eine gute Möglichkeit für dich.",
                TX11: "Das hab ich doch gern gemacht.",
                TX12: "Du wirkst in den letzten Tagen etwas abwesend.",
                TX13: "Wenn es irgendetwas gibt, worüber du sprechen möchtest, bin ich gerne für dich da.",
                TX14: "Ich hab gehört, dass sie zurzeit nach Aushilfen suchen.",
                TX15: "Vor allem soll das Gehalt sehr gut sein und das Café ist ebenfalls beliebt."
            },
            sophie: {
                TX01: "... der Laden ist noch neu.",
                TX02: "Da gibt es bestimmt viele schöne Sachen für dein Zimmer.",
                TX03: "Ja klar."
            }
        };

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);
    
        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.classroom);
        await ƒS.update(transition.stripes.duration, transition.stripes.alpha, transition.stripes.edge);
        await signalDelay2();
        await ƒS.Character.show(characters.lucia, characters.lucia.pose.smile, ƒS.positionPercent(25, 100));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.sophie, text.sophie.TX01);
        await ƒS.Speech.tell(characters.sophie, text.sophie.TX02);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX01);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX02);
        await ƒS.Speech.tell(characters.sophie, text.sophie.TX03);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX03);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.school, ƒS.positionPercent(70, 100));
        await ƒS.update(2);
        await signalDelay2();
        ƒS.Sound.play(sounds.sigh_female, 1);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX04);
        ƒS.Sound.play(sounds.oh, 1);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX05);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX06);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX12);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX13);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX07);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX05);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX12);
        ƒS.Sound.play(sounds.hmm, 1);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX08);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX08);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX09);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX14);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX10);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX15);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX09);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX10);
        await ƒS.Character.hide(characters.celeste);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.school_smile, ƒS.positionPercent(70, 100));
        await ƒS.update(0.3);
        ƒS.Sound.play(sounds.chuckle_female, 1);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX11);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX13);
        await ƒS.Speech.tell(characters.lucia, text.lucia.TX11);

        await signalDelay2();
        await ƒS.Character.hide(characters.celeste);
        await ƒS.Character.hide(characters.lucia);
        ƒS.Speech.hide();
        await ƒS.update(1);
        ƒS.Sound.fade(music.main_theme, 0, 0);
    }
}