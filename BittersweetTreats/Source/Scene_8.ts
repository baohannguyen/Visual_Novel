namespace Novel {
    export async function scene_8(): ƒS.SceneReturn {
        console.log("Bad Ending");

        let text = {
            celeste: {
                TX01: "...",
                TX02: "Ja, das ist verständlich.",
                TX03: "Dann werde ich mich auf die Suche nach anderen Stellen begeben.",
                TX04: "Der Job wäre super gewesen, hätte ich ihn bekommen.",
                TX05: "Jetzt muss ich mich wieder auf der Suche nach neuen Stellenangeboten begeben.",
                TX06: "Ich weiß nicht, ob ich das Mama erzählen soll, sie würde sich nur noch mehr Sorgen machen",
                TX07: "Und Lucia hätte sich auch gefreut, wenn ich den Job bekommen hätte, den sie mir vorgeschlagen hat.",
                TX08: "Wie konnte ich das nur vermasseln?"
            },
            evan: {
                TX01: "Es tut mir leid, Celeste.",
                TX02: "Aber das war grade gar nicht gut.",
                TX03: "Du hast die Getränke falsch gemischt, dann war der Kunde noch so lieb und hat dir noch eine zweite Chance gegeben.",
                TX04: "Das kann ich nicht so akzeptieren, die Stelle kann ich dir daher nicht vergeben.",
                TX05: "Mach das.",
                TX06: "Ich wünsche dir trotzdem viel Glück für deinen nächsten Job."
            }
        };

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);

        let signalDelay1: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]);
        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);


        ƒS.Speech.hide();
        await ƒS.Location.show(locations.office);
        await ƒS.update(transition.boxes.duration, transition.boxes.alpha, transition.boxes.edge);
        await signalDelay2();
        await ƒS.update(1);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_sad, ƒS.positionPercent(25, 100));
        await ƒS.Character.show(characters.evan, characters.evan.pose.disappointed, ƒS.positionPercent(70, 105));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.evan, text.evan.TX01);
        await ƒS.Speech.tell(characters.evan, text.evan.TX02);
        await ƒS.Speech.tell(characters.evan, text.evan.TX03);
        await ƒS.Speech.tell(characters.evan, text.evan.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await ƒS.Speech.tell(characters.evan, text.evan.TX05);
        await ƒS.Speech.tell(characters.evan, text.evan.TX06);
        await ƒS.Character.hide(characters.evan);
        await ƒS.Character.hide(characters.celeste);
        ƒS.Speech.hide();
        await ƒS.update(1);

        // next location
        await signalDelay1();
        await ƒS.update(1);
        await ƒS.Location.show(locations.park);
        await ƒS.update(transition.stripes.duration, transition.stripes.alpha, transition.stripes.edge);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_sad, ƒS.positionPercent(50, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX05);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX06);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX07);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX08);
        await ƒS.Text.print("Du hast das Bad Ending erreicht");
        
    }
}