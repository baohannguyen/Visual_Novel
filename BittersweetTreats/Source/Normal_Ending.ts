namespace Novel {
    export async function scene_7(): ƒS.SceneReturn {
        console.log("Normal Ending");

        let text = {
            celeste: {
                TX01: "<i>Ich kann gar nicht einschätzen, ob ich den Job jetzt kriege oder nicht.</i>",
                TX02: "<i>An Evans Gesichtsausdruck kann ich es auch nicht wirklich ablesen.</i>",
                TX03: "Und wie fandest du bis jetzt meine Arbeit?",
                TX04: "Ja, das Mischen war doch schwieriger als ich dachte.",
                TX05: "Wirklich?",
                TX06: "Vielen Dank, dass ich die Stelle bekommen habe.",
                TX07: "Ich werde mich verbessern, das wäre ich dir versprechen."
            },
            evan: {
                TX01: "Ich fand, dadurch dass du es zum ersten Mal gemacht hast, war deine Leistung durchschnittlich.",
                TX02: "Es sind dir dennoch ein paar Fehler passiert.",
                TX03: "Ich würde dich trotzdem einstellen, weil ich Potenzial in dir sehe und glaube, dass du besser wirst, je öfter du das machst.",
                TX04: "Aber bei deinen nächsten Schichten, werde ich trotzdem da sein, um ab und zu bei dir rüberzuschauen, damit du es auch richtig machst.",
                TX05: "Auf diese Weise passieren dir nicht mehr so oft Fehler."
            }
        };

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);

        // let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Sound.fade(music.normal_ending_theme, 0.1, 0.2, true);
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.office);
        await ƒS.update(transition.normal_ending_transition.duration, transition.normal_ending_transition.alpha, transition.normal_ending_transition.edge);
        await signalDelay2();
        await ƒS.update(1);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_neutral, ƒS.positionPercent(25, 100));
        await ƒS.Character.show(characters.evan, characters.evan.pose.neutral, ƒS.positionPercent(70, 105));
        await ƒS.update(2);
        ƒS.Sound.play(sounds.hmm, 1.5);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await ƒS.Speech.tell(characters.evan, text.evan.TX01);
        await ƒS.Speech.tell(characters.evan, text.evan.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
        await ƒS.Speech.tell(characters.evan, text.evan.TX03);
        await ƒS.Speech.tell(characters.evan, text.evan.TX04);
        await ƒS.Speech.tell(characters.evan, text.evan.TX05);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX05);
        await ƒS.Character.hide(characters.celeste);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_happy, ƒS.positionPercent(25, 100));
        await ƒS.update(0.3);
        ƒS.Sound.play(sounds.chuckle_female, 1.5);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
        await signalDelay2();
        ƒS.Text.addClass("NovelPages");
        await ƒS.Text.print("Du hast das <b>Normal Ending</b> erreicht" +
                            "<p>Das ist eins von drei Endings.</p>" +
                            "<p>Du kannst die Novel gerne nochmal starten, um die anderen Endings zu erreichen." +
                            "<p>Falls nicht, hoffe ich, dass dir die Novel Spaß gemacht hat :).");
        return "Last Page";
        
    }
}