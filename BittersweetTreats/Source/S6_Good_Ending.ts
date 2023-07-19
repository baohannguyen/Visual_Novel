namespace Novel {
    export async function scene_6(): ƒS.SceneReturn {
        console.log("Good Ending");

        let text = {
            celeste: {
                TX01: "Das freut mich zu hören.",
                TX02: "Es hat auch richtig Spaß gemacht.",
                TX03: "Aber was heißt das jetzt für mich?",
                TX04: "Vielen Dank, dass ich den Job kriege. ",
                TX05: "Sie werden es nicht bereuen mich eingestellt zu haben.",
            },
            evan: {
                TX01: "Du hast wirklich gute Arbeit geleistet, Celeste.",
                TX02: "Die Getränke hast du alle richtig gemischt und die Kunden waren ebenfalls alle zufrieden mit dir.",
                TX03: "Das heißt, dass du natürlich von uns eingestellt wirst und du die Stelle kriegst.",
                TX04: "Also über deine heutige Leistung kann ich mich nicht beschweren.",
                TX05: "Auf eine gute Zusammenarbeit, Celeste."
            }
        };

        dataForSave.pickedMeterScene = true;
        document.getElementsByName("celesteScore").forEach(meterStuff => meterStuff.hidden = true);

        let signalDelay2: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);

        ƒS.Sound.fade(music.good_ending_theme, 0.1, 0.2, true);
        ƒS.Speech.hide();
        await ƒS.Location.show(locations.office);
        await ƒS.update(transition.good_ending_transition.duration, transition.good_ending_transition.alpha, transition.good_ending_transition.edge);
        await signalDelay2();
        await ƒS.update(1);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_smile, ƒS.positionPercent(25, 100));
        await ƒS.update(2);
        await ƒS.Character.show(characters.evan, characters.evan.pose.smile2, ƒS.positionPercent(70, 105));
        await ƒS.update(2);
        await ƒS.Speech.tell(characters.evan, text.evan.TX01);
        await ƒS.Speech.tell(characters.evan, text.evan.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX01);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX02);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX03);
        await ƒS.Speech.tell(characters.evan, text.evan.TX03);
        await ƒS.Speech.tell(characters.evan, text.evan.TX04);
        await ƒS.Character.hide(characters.celeste);
        await ƒS.Character.show(characters.celeste, characters.celeste.pose.cafe_happy, ƒS.positionPercent(25, 100));
        await ƒS.update(0.3);
        ƒS.Sound.play(sounds.chuckle_female, 1);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX04);
        await ƒS.Speech.tell(characters.celeste, text.celeste.TX05);
        await ƒS.Speech.tell(characters.evan, text.evan.TX05);
        await ƒS.Character.hide(characters.evan);
        await ƒS.Character.hide(characters.celeste);
        ƒS.Speech.hide();
        await ƒS.update(1);
        return "Good Ending Part 2";
        
    }
}