namespace Novel {
    export async function scene_6_2(): ƒS.SceneReturn {
        console.log("Good Ending");

        let text = {
            celeste: {
                TX01: "Mamaa!",
                TX02: "Ich hab die Stelle bei <b>Lovely Java</b> bekommen.",
                TX03: "Ich bin so froh, dass ich den Job habe, jetzt muss du dir nicht mehr so viele Sorgen, um das Geld machen."
            },
            celeste_mum: {
                TX01: "Das hat mich richtig erschreckt.",
                TX02: "Was ist passiert?",
                TX03: "Oh da, wofür du dich letzte Woche beworben hast?",
                TX04: "Das freut mich, mein Schatz.",
                TX05: "Ich bin richtig stolz auf dich."
            }
        };

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);

        let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.living_room);
        await ƒS.update(transition.good_ending_transition.duration, transition.good_ending_transition.alpha, transition.good_ending_transition.edge);
        await signalDelay1();
        ƒS.Sound.play(sounds.door_opening, 1.5);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_happy, ƒS.positionPercent(25, 100));
        await ƒS.update(1);
        await signalDelay1();
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        ƒS.Sound.play(sounds.gasping, 1.9);
        await ƒS.Character.show(characters.celeste_mum, characters.celeste_mum.pose.shocked, ƒS.positionPercent(70, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX01);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX03);
        await ƒS.Character.hide(characters.celeste_mum);
        await ƒS.Character.show(characters.celeste_mum, characters.celeste_mum.pose.happy, ƒS.positionPercent(70, 100));
        await ƒS.update(0.3);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX04);
        await ƒS.Speech.tell(characters.celeste_mum, text.celeste_mum.TX05);
        ƒS.Sound.play(sounds.chuckle_female, 1.5);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await signalDelay2();
        ƒS.Text.addClass("NovelPages");
        await ƒS.Text.print("Du hast das <b>Good Ending</b> erreicht." +
                            "<p>Das ist eins von drei Endings.</p>" +
                            "<p>Du kannst die Novel gerne nochmal starten, um die anderen Endings zu erreichen." +
                            "<p>Falls nicht, hoffe ich, dass dir die Novel Spaß gemacht hat :).");
        return "Last Page";
    }
}