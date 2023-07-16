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
                TX04: "Aber bei deinen nächsten Schichten, werde ich trotzdem da sein und es bei dir kontrollieren, damit bei dir nicht mehr so oft Fehler vorkommen."
            }
        };

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Speech.hide();
        await ƒS.Location.show(locations.office);
        await ƒS.update(transition.boxes.duration, transition.boxes.alpha, transition.boxes.edge);
        await signalDelay2();
        await ƒS.update(1);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_neutral, ƒS.positionPercent(25, 100));
        await ƒS.Character.show(characters.evan, characters.evan.pose.neutral, ƒS.positionPercent(70, 105));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await ƒS.Speech.tell(characters.evan, text.evan.TX01);
        await ƒS.Speech.tell(characters.evan, text.evan.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
        await ƒS.Speech.tell(characters.evan, text.evan.TX03);
        await ƒS.Speech.tell(characters.evan, text.evan.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX05);
        await ƒS.Character.hide(characters.celeste);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_happy, ƒS.positionPercent(25, 100));
        await ƒS.update(0.3);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
        await ƒS.Text.print("Du hast das Normal Ending erreicht");
        
    }
}